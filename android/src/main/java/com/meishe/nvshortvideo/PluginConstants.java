package com.meishe.nvshortvideo;

/**
 * All rights Reserved, Designed By www.meishesdk.com
 *
 * @Author: LiFei
 * @CreateDate: 2024/5/17 15:51
 * @Description:
 * @Copyright: www.meishesdk.com Inc. All rights reserved.
 */
public class PluginConstants {
    /**
     * Channel
     */
    public static final String VIDEO_EDIT_CHANNEL = "VideoEditMethodChannel";
    public static final String VIDEO_EDIT_CALLBACK_CHANNEL = "VideoEditCallbackMethodChannel";
    public static final String VIDEO_DRAFT_CHANNEL = "VideoEditDraftChangeMethodChannel";

    /**
     * Method
     */
    public static final String CAPTURE_METHOD = "CaptureMethod";
    public static final String DUAL_CAPTURE_METHOD = "DualCaptureMethod";
    public static final String DUAL_CAPTURE_WITH_VIDEO_METHOD = "DualCaptureWithVideoMethod";
    public static final String EDIT_METHOD = "EditMethod";
    public static final String SELECT_COVER_IMAGE_METHOD = "SelectCoverImageMethod";
    public static final String SAVE_DRAFT_METHOD = "SaveDraftMethod";
    public static final String SAVE_IMAGE_METHOD = "SaveImageMethod";
    public static final String DRAFT_LIST_METHOD = "DraftListMethod";
    public static final String DELETE_DRAFT_METHOD = "DeleteDraftMethod";
    public static final String REEDIT_METHOD = "ReeditMethod";
    public static final String CONFIG_SERVER_INFO = "ConfigServerInfo";
    public static final String EXIT_VIDEO_EDIT_METHOD = "ExitVideoEditMethod";
    public static final String COMPILE_VIDEO_METHOD = "CompileVideoMethod";

    /**
     * Event
     */
    public static final String VIDEO_EDIT_RESULT_EVENT = "VideoEditResultEvent";
    public static final String DID_COMPILE_COMPLETED_METHOD = "DidCompileCompletedMethod";
    public static final String DID_COMPILE_PROGRESS_METHOD = "DidCompileProgressMethod";
    public static final String DID_COVER_IMAGE_CHANGED_METHOD = "DidCoverImageChangedMethod";
    public static final String DRAFT_LIST_UPDATE = "DraftListUpdate";
}
