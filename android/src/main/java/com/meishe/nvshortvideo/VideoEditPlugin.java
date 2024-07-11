package com.meishe.nvshortvideo;

import android.util.Log;
import android.text.TextUtils;

import java.util.Map;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.TreeMap;

import android.graphics.Bitmap;
import android.os.Bundle;

import androidx.annotation.Nullable;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableNativeArray;

import android.content.Intent;

import com.facebook.react.bridge.Promise;
import com.meishe.module.NvModuleManager;
import com.meishe.nvshortvideo.bean.NvError;
import com.meishe.nvshortvideo.bean.OnMethodCallListener;
import com.meishe.module.bean.NvMusicInfo;
import com.meishe.config.NvVideoConfig;
import com.blankj.utilcode.util.LogUtils;
import com.blankj.utilcode.util.FileUtils;
import com.blankj.utilcode.util.GsonUtils;
import com.blankj.utilcode.util.LogUtils;
import com.google.gson.Gson;
import com.meicam.sdk.NvsTimeline;
import com.meishe.common.utils.CaptureAndEditUtil;
import com.meishe.config.NvEditConfig;
import com.meishe.config.NvVideoConfig;
import com.meishe.draft.DraftManager;
import com.meishe.draft.data.DraftData;
import com.meishe.edit.utils.PublishUtils;
import com.meishe.edit.view.activity.SelectCoverActivity;
import com.meishe.engine.EditorEngine;
import com.meishe.engine.EngineNetApi;
import com.meishe.engine.bean.MeicamTimeline;
import com.meishe.engine.util.PathUtils;
import com.meishe.libbase.manager.AppManager;
import com.meishe.libbase.utils.NvsServerClient;
import com.meishe.module.NvModuleManager;
import com.meishe.module.bean.NvMusicInfo;
import com.meishe.nvshortvideo.utils.*;
import com.meishe.module.interfaces.NvModuleManagerCallback;

import com.facebook.react.modules.core.DeviceEventManagerModule;

import static android.app.Activity.RESULT_OK;
import static com.meishe.nvshortvideo.PluginConstants.*;

import java.lang.ref.SoftReference;

import android.app.Activity;
import android.os.Handler;
import android.os.Message;

import androidx.annotation.NonNull;

import static com.facebook.react.bridge.UiThreadUtil.runOnUiThread;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.Arguments;
import com.blankj.utilcode.util.ThreadUtils;

public class VideoEditPlugin extends ReactContextBaseJavaModule {
    private static final int SELECT_COVER_CODE = 100;
    private static final String PROJECT_ID = "projectId";
    private final ReactApplicationContext reactContext;
    private MainHandler mHandler;
    private long mCoverPoint;

    public VideoEditPlugin(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                mHandler = new MainHandler(VideoEditPlugin.this);
            }
        });
        reactContext.addActivityEventListener(mActivityEventListener);
        NvModuleManager.get().setModuleManagerCallback(new NvModuleManagerCallback() {
            @Override
            public void publishWithInfo(Activity activity, boolean needSaveDraft, boolean needSaveCover, boolean needSaveVideo, String videoPath) {
                goPublish(needSaveDraft, needSaveCover, needSaveVideo,videoPath);
            }

        });

    }

    @Override
    public void initialize() {
        super.initialize();
        DraftManager.getInstance().setDraftDeleteCallBack(new DraftManager.DraftDeleteCallBack() {
            @Override
            public void onDraftDeleted() {
                WritableMap maps = Arguments.createMap();
                invokeMethod(VIDEO_DRAFT_CHANNEL, DRAFT_LIST_UPDATE, maps);
            }
        });
        NvModuleManager.get().init(getCurrentActivity().getApplication());
        String mLicPath = "assets:/meishesdk.lic";
        NvModuleManager.get().initSdk(mLicPath);
    }

    private ActivityEventListener mActivityEventListener = new ActivityEventListener() {
        @Override
        public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent data) {
            if (resultCode == RESULT_OK && requestCode == SELECT_COVER_CODE) {
                if (data != null) {
                    Bundle extras = data.getExtras();
                    if (extras != null) {
                        mCoverPoint = extras.getLong(SelectCoverActivity.INTENT_KEY_COVER_POINT);
                        String path = extras.getString(SelectCoverActivity.INTENT_KEY_COVER_PATH);
                        WritableMap arguments = Arguments.createMap();
                        arguments.putString("coverImagePath", getSDPath(path));
                        invokeMethod(VIDEO_EDIT_CALLBACK_CHANNEL, DID_COVER_IMAGE_CHANGED_METHOD, arguments);
                    }
                }
            }
        }

        @Override
        public void onNewIntent(Intent intent) {

        }

    };

    public static class MainHandler extends Handler {

        private SoftReference<VideoEditPlugin> activitySoftReference;

        public MainHandler(VideoEditPlugin module) {
            this.activitySoftReference = new SoftReference<>(module);
        }

        @Override
        public void handleMessage(@NonNull Message msg) {
            super.handleMessage(msg);
        }
    }

    @Override
    public String getName() {
        return "VideoEditPlugin";
    }

    private int listenerCount = 0;

    @ReactMethod
    public void addListener(String eventName) {
        if (listenerCount == 0) {
            // Set up any upstream listeners or background tasks as necessary
        }

        listenerCount += 1;
    }

    @ReactMethod
    public void removeListeners(Integer count) {
        listenerCount -= count;
        if (listenerCount == 0) {
            // Remove upstream listeners， stop unnecessary background tasks
        }
    }

    @ReactMethod
    public void sendMessageToNative(ReadableMap map, Promise promise) {
        onPluginMethodCall(map.getString("method"), map.getMap("arguments"), new OnMethodCallListener() {
            @Override
            public void completion(Object response, NvError error) {
                if (null == response && (null == error)) {
                    promise.resolve("");
                    return;
                }
                if (null != response) {
                    promise.resolve(response);
                }
                if (null != error) {
                    promise.reject(error.getCode() + "", error.getMessage());
                }

            }
        });
    }

    private void onPluginMethodCall(String method, ReadableMap arguments, OnMethodCallListener methodCallListener) {
        Log.d(getClass().getCanonicalName(), "====sendMessageToNative==" + method + "==" + arguments);
        if (TextUtils.isEmpty(method) || (null == methodCallListener)) {
            return;
        }
//     if (null == arguments) {
//         arguments = new ReadableMap();
//     }
        NvVideoConfig mVideoConfig = null;
        if (null != arguments) {
            ReadableMap configMap = arguments.getMap("config");
            if (null != configMap) {
                try {
                    mVideoConfig = NvVideoConfig.fromJson(MapUtil.toMap(configMap));
                } catch (Exception e) {
                    LogUtils.e(e);
                }
            }
        }
        switch (method) {
            case CAPTURE_METHOD:
                NvMusicInfo musicInfo = null;
                ReadableMap musicInfoMap = arguments.getMap("musicInfo");
                if (null != musicInfoMap) {
                    String musicName = musicInfoMap.getString("musicName");
                    String musicPath = musicInfoMap.getString("musicPath");
                    musicInfo = new NvMusicInfo();
                    musicInfo.setMusicName(musicName);
                    musicInfo.setMusicPath(musicPath);
                }
                NvModuleManager.get().openCapture(getCurrentActivity(), mVideoConfig, musicInfo);
                methodCallListener.completion(null, null);
                break;
            case DUAL_CAPTURE_METHOD:
                NvModuleManager.get().openDualCapture(getCurrentActivity(), mVideoConfig);
                methodCallListener.completion(null, null);
                break;
            case DUAL_CAPTURE_WITH_VIDEO_METHOD:
                String videoPath = arguments.getString("videoPath");
                videoPath = parsePathFromJs(videoPath);
                if (TextUtils.isEmpty(videoPath) || !FileUtils.isFileExists(videoPath)) {
                    methodCallListener.completion(null, new NvError(-1, "File exception, please check!"));
                    return;
                }
                NvModuleManager.get().openDualCapture(getCurrentActivity(), mVideoConfig, videoPath);
                methodCallListener.completion(null, null);
                break;
            case EDIT_METHOD:
                NvModuleManager.get().openEdit(getCurrentActivity(), mVideoConfig);
                methodCallListener.completion(null, null);
                break;
            case SELECT_COVER_IMAGE_METHOD:
                NvModuleManager.editCover(getCurrentActivity(), mCoverPoint, SELECT_COVER_CODE);
                methodCallListener.completion(null, null);
                break;
            case SAVE_DRAFT_METHOD:
                String draftDesc = arguments.getString("draftInfo");
                NvModuleManager.get().saveDraft(draftDesc, 0, new DraftManager.DraftSaveCallBack() {
                    @Override
                    public void onSaveSuccess(boolean isNew) {
                        methodCallListener.completion(null, null);
                    }
                });
                break;
            case SAVE_IMAGE_METHOD:
                String coverImagePath = arguments.getString("coverImagePath");
                coverImagePath = parsePathFromJs(coverImagePath);
                NvModuleManager.get().saveCover(coverImagePath, null, 0, true, new NvModuleManager.OnCoverSavedCallBack() {
                    @Override
                    public void onCoverSaved(String path) {
                        if (TextUtils.isEmpty(path) || !FileUtils.isFileExists(path)) {
                            methodCallListener.completion(null, new NvError(-2, "Cover Path error"));
                            return;
                        }
                        methodCallListener.completion(getSDPath(path), null);
                    }

                    @Override
                    public void onCoverSaveFailed() {
                        methodCallListener.completion(null, new NvError(-1, "Save error"));
                    }
                });
                break;
            case COMPILE_VIDEO_METHOD:
                NvModuleManager.saveVideoToAlbum(new NvModuleManager.OnCompileVideoListener() {
                    @Override
                    public void compileProgress(NvsTimeline timeline, int progress) {
                        WritableMap maps = Arguments.createMap();
                        double progressD = progress;
                        maps.putDouble("progress", progressD);
                        invokeMethod(VIDEO_EDIT_CALLBACK_CHANNEL, DID_COMPILE_PROGRESS_METHOD, maps);
                    }

                    @Override
                    public void compileFinished(NvsTimeline timeline) {
                    }

                    @Override
                    public void compileFailed(NvsTimeline timeline) {
                        WritableMap maps = Arguments.createMap();
                        invokeMethod(VIDEO_EDIT_CALLBACK_CHANNEL, DID_COMPILE_COMPLETED_METHOD, maps);
                    }

                    @Override
                    public void compileCompleted(NvsTimeline nvsTimeline, String compileVideoPath, boolean isCanceled) {
                        WritableMap maps = Arguments.createMap();
                        maps.putString("outputPath", compileVideoPath);
                        maps.putInt("errorCode", 0);
                        invokeMethod(VIDEO_EDIT_CALLBACK_CHANNEL, DID_COMPILE_COMPLETED_METHOD, maps);
                    }

                    @Override
                    public void compileVideoCancel() {
                        WritableMap maps = Arguments.createMap();
                        invokeMethod(VIDEO_EDIT_CALLBACK_CHANNEL, DID_COMPILE_COMPLETED_METHOD, maps);
                    }

                    @Override
                    public void onCompileCompleted(boolean isHardwareEncoder, int errorType, String stringInfo, int flags) {
                    }
                });
                break;
            case EXIT_VIDEO_EDIT_METHOD:
                AppManager.getInstance().finishAllEditActivity();
                break;
            case CONFIG_SERVER_INFO:

                String host = arguments.getString("host");
                if (!TextUtils.isEmpty(host)) {
                    NvsServerClient.get().initConfig(getCurrentActivity().getApplication(), host);
                }
                String assetAutoCutUrl = arguments.getString("assetAutoCutUrl");
                if (!TextUtils.isEmpty(assetAutoCutUrl)) {
                    EngineNetApi.NV_ASSET_AUTOCUT_URL = assetAutoCutUrl;
                }

                String assetRequestUrl = arguments.getString("assetRequestUrl");
                if (!TextUtils.isEmpty(assetRequestUrl)) {
                    EngineNetApi.NV_ASSET_REQUEST_URL = assetRequestUrl;
                }

                String assetCategoryUrl = arguments.getString("assetCategoryUrl");
                if (!TextUtils.isEmpty(assetCategoryUrl)) {
                    EngineNetApi.NV_ASSET_CATEGORY_URL = assetCategoryUrl;
                }

                String assetMusiciansUrl = arguments.getString("assetMusiciansUrl");
                if (!TextUtils.isEmpty(assetMusiciansUrl)) {
                    EngineNetApi.NV_ASSET_MUSICIANS_URL = assetMusiciansUrl;
                }

                String assetFontUrl = arguments.getString("assetFontUrl");
                if (!TextUtils.isEmpty(assetFontUrl)) {
                    EngineNetApi.NV_ASSET_FONT_URL = assetFontUrl;
                }

                String assetDownloadUrl = arguments.getString("assetDownloadUrl");
                if (!TextUtils.isEmpty(assetDownloadUrl)) {
                    EngineNetApi.NV_ASSET_DOWNLOAD_URL = assetDownloadUrl;
                }

                String assetPrefabricatedUrl = arguments.getString("assetPrefabricatedUrl");
                if (!TextUtils.isEmpty(assetPrefabricatedUrl)) {
                    EngineNetApi.NV_ASSET_PREFABRICATED_URL = assetPrefabricatedUrl;
                }

                String assetTagUrl = arguments.getString("assetTagUrl");
                if (!TextUtils.isEmpty(assetTagUrl)) {
                    EngineNetApi.NV_ASSET_TAG_URL = assetTagUrl;
                }
                String clientId = arguments.getString("clientId");
                if (!TextUtils.isEmpty(clientId)) {
                    NvsServerClient.MallInfo.CLIENT_ID = clientId;
                }

                String clientSecret = arguments.getString("clientSecret");
                if (!TextUtils.isEmpty(clientSecret)) {
                    NvsServerClient.MallInfo.CLIENT_SECRET = clientSecret;
                }
                String assemblyId = arguments.getString("assemblyId");
                if (!TextUtils.isEmpty(assemblyId)) {
                    NvsServerClient.MallInfo.ASSEMBLY_ID = assemblyId;
                }
                NvModuleManager.get().initModel();
                break;
            case DRAFT_LIST_METHOD:
                methodCallListener.completion(getDraftList(), null);
                break;
            case DELETE_DRAFT_METHOD:
                String draftIdStr = arguments.getString(PROJECT_ID);
                DraftData draftData = getDraftDataById(draftIdStr);
                if (null == draftData) {
                    return;
                }
                DraftManager.getInstance().deleteDraft(draftData);
                WritableMap maps = Arguments.createMap();
                invokeMethod(VIDEO_DRAFT_CHANNEL, DRAFT_LIST_UPDATE, maps);
                methodCallListener.completion(null, null);
                break;
            case REEDIT_METHOD:
                String editDraftIdStr = arguments.getString(PROJECT_ID);
                DraftData editDraftData = getDraftDataById(editDraftIdStr);
                if (null == editDraftData) {
                    return;
                }
                NvModuleManager.get().openDraftAndJumpToEdit(getCurrentActivity(), editDraftData);
                methodCallListener.completion(null, null);
                break;
            default:
                break;
        }
    }

    private void goPublish(boolean needSaveDraft, boolean needSaveCover, boolean needSaveVideo, String videoPath) {
        if (null == getCurrentActivity()) {
            return;
        }
        NvModuleManager.get().saveCover(PathUtils.getCoverDir(), String.valueOf(System.currentTimeMillis()), mCoverPoint, false,
                new NvModuleManager.OnCoverSavedCallBack() {
                    @Override
                    public void onCoverSaved(String path) {
                        WritableMap maps = Arguments.createMap();
                        maps.putBoolean("hasDraft", needSaveDraft);
                        maps.putString("coverImagePath", getSDPath(path));
                        maps.putString("videoPath", videoPath);
                        //目前默认传00
                        maps.putString("projectId", "00");
                        invokeMethod(VIDEO_EDIT_CHANNEL, VIDEO_EDIT_RESULT_EVENT, maps);
                        AppManager.getInstance().finishAllEditActivity();
                    }

                    @Override
                    public void onCoverSaveFailed() {
                    }
                });
    }

    private DraftData getDraftDataById(String draftIdStr) {
        if (TextUtils.isEmpty(draftIdStr)) {
            return null;
        }
        List<DraftData> data = DraftManager.getInstance().getAllDraftData();
        if (null == data || data.isEmpty()) {
            return null;
        }
        int draftId = Integer.parseInt(draftIdStr);
        if (draftId < 0 || draftId > data.size() - 1) {
            return null;
        }
        return data.get(draftId);
    }

    /**
     * Get a list of drafts
     */
    private WritableArray getDraftList() {
        List<DraftData> data = DraftManager.getInstance().getAllDraftData();
        WritableArray resultData = new WritableNativeArray();
        if (null != data && !data.isEmpty()) {
            for (int i = 0; i < data.size(); i++) {
                DraftData draftData = data.get(i);
                WritableMap arguments = Arguments.createMap();
                arguments.putString("coverImagePath", getSDPath(draftData.getCoverPath()));
                arguments.putString(PROJECT_ID, i + "");
                arguments.putString("draftInfo", TextUtils.isEmpty(draftData.getVideoDesc())?"请添加描述~":draftData.getVideoDesc());
                resultData.pushMap(arguments);
            }
        }
        return resultData;
    }

    private void invokeMethod(String methodName, String eventName, WritableMap map) {
        WritableMap writableMap = Arguments.createMap();
        writableMap.putString("method", eventName);
        writableMap.putMap("arguments", map);
        invokeMethod(methodName, writableMap);
    }

    private void invokeMethod(String methodName, WritableMap map) {
        reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit(methodName, map);
    }

    /**
     * 传给js的地址需要加上file路径
     */
    private String getSDPath(String path) {
        if (path == null) {
            return "";
        }
        if (!path.startsWith("file://")) {
            return "file://" + path;
        } else {
            return path;
        }
    }

    /**
     * js传来的地址需要去除file路径
     */
    private String parsePathFromJs(String path) {
        if (path == null) {
            return "";
        }
        return path.replaceAll("file://", "");
    }
}