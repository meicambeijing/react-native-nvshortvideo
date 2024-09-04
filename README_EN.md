
# Meishe React Native short video module access guide

## Development environment requirements

 - react-native ^0.41.2
 - iOS   
     - Xcode 9.0+
     - iOS 12.0 and above
     - Swift 5 
     - CocoaPods
 - Anroid
     - Android Studio 3.0+

## Support media formats

For details, see: [Meishes sdk product overview](https://www.meishesdk.com/ios/doc_en/html/content/Introduction_8md.html)

## System authorization

### iOS
App needs to add the following permissions in Info.plist, otherwise it will not be able to use the short video module.

```xml
<key>NSCameraUsageDescription</key>
<string>AppYour consent is required to access the camera</string>
<key>NSMicrophoneUsageDescription</key>
<string>AppYour consent is required to access the microphone</string>
<key>NSPhotoLibraryUsageDescription</key>
<string>AppYour consent is required to access the album</string>
<key>NSAppleMusicUsageDescription</key>
<string>AppYour consent is required to access music</string>
```
### Android
  TODO：Add the following permissions in AndroidManifest.xml
  ```xml
 <uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW" />
    <uses-permission android:name="android.permission.CAMERA" />
    <uses-permission android:name="android.permission.RECORD_AUDIO" />
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" /> <!-- <uses-permission android:name="android.permission.MOUNT_UNMOUNT_FILESYSTEMS" /> -->
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
    <uses-permission android:name="android.permission.VIBRATE" />
    <uses-permission android:name="android.permission.WAKE_LOCK" />
    <uses-permission android:name="android.permission.ACCESS_NOTIFICATION_POLICY" /> <!-- <uses-permission android:name="android.permission.INTERNET" /> -->
    <uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />
    <uses-permission android:name="android.permission.CHANGE_WIFI_STATE" /> <!-- 用于进行网络定位 -->
    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" /> <!-- 用于访问GPS定位 -->
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" /> <!-- 用于读取手机当前的状态 -->
    <uses-permission android:name="android.permission.REQUEST_INSTALL_PACKAGES" />
    <uses-permission android:name="android.permission.EXPAND_STATUS_BAR" />
  ```

  

## Meishe SDK authorization

Meishe SDK authorization method:

After registering as a user on [Meishe‘s official website](https://en.meishesdk.com/), create an application and configure the App package name. After a Meishe business colleague activates the authorization, you can download the authorization file in the application information.

Rename the downloaded license.lic file to meicam_license.lic and place it in the native project

> The SDK authorization is bound to the package name of the App. When it is not authorized, all functions of the SDK can be used without checking the authorization, and the drawn picture will have the MEISHE watermark.

## Network interface configuration

The filters, stickers, music and other files used in the short video module are all obtained through the network interface. The server needs to implement the corresponding interface according to the interface document.
Configure the server address and public parameters in the App project.

```javascript
import { NvShortVideo, NvVideoConfig } from 'react-native-nvshortvideo';
...
  //服务器地址
  //Server url
  /// assetRequestUrl  素材列表请求 Material list request
  /// assetCategoryUrl 素材分类列表请求 Material category list request
  /// assetMusiciansUrl 音乐列表请求 Music list request
  /// assetFontUrl 字体列表请求 Font list request
  /// assetDownloadUrl 下载地址请求 Download address request
  /// assetPrefabricatedUrl 预制素材请求 Prefabricated material request
  /// assetAutoCutUrl 一键成片网络请求 AutoCut request
  /// assetTagUrl 模版标签列表请求 Template tag list request
  /// clientId clientId
  /// clientSecret clientSecret
  /// assemblyId assemblyId
  /// isAbroad 海外数据请求，0==全部，1==海外 Overseas data request, 0== all, 1== overseas
  let map = {
      'host': 'https://mall.meishesdk.com/api/shortvideo/',
      'assetRequestUrl': 'materialcenter/mall/custom/listAllAssemblyMaterial',
      'assetCategoryUrl': 'materialcenter/appSdkApi/listTypeAndCategory',
      'assetMusiciansUrl': 'materialcenter/appSdkApi/listMusic',
      'assetFontUrl': 'materialcenter/listFont',
      'assetDownloadUrl': 'materialcenter/mall/custom/materialInteraction',
      'assetPrefabricatedUrl': 'materialcenter/beautyAssets/latest',
      'assetAutoCutUrl': 'materialcenter/recommend/listTemplate',
      'assetTagUrl': 'materialcenter/listTemplateTag',
      'clientId': '7480f2bf193d417ea7d93d64',
      'clientSecret': 'e4434ff769404f64b33f462331a80957',
      'assemblyId': 'MEISHE_MATERIAL_LIST',
      'isAbroad': 1
  };
  let videoOperator = NvShortVideo.shareInstance();
  videoOperator.configServerInfo(map);
```

## Preset material

The material packages that the short video module relies on can be selected as needed. For details of preset materials, see: [Short video module preset materials](../../nv_short_video_ios_doc/doc_en/html/PrefabricatedMaterial_en.html)

## Main methods of short video module

Module singleton: let videoOperator = NvShortVideo.shareInstance();
Example call:

```javascript
import { NvShortVideo, NvVideoConfig } from 'react-native-nvshortvideo';

...

let videoOperator = NvShortVideo.shareInstance();
videoOperator.startVideoCaptrue(this.videoConfig);

```

### Video recording

```javascript
 /*! \if ENGLISH
 *
 *  \brief Shooting entrance
 *  \param config Configuration item
 *  \param music The default is nil，If you need to shoot with music, you need to pass an audio object, and the path of the audio must be local and has been downloaded
 *  \else
 *
 *  \brief 拍摄入口
 *  \param config 配置项
 *  \param music 默认是nil，如果拍摄时需要带音乐拍摄，需要传递一个音频对象，音频的路径必须是本地的，已经下载的路径
 *  \endif
 */
startVideoCaptrue(config?: NvVideoConfig, musicInfo?: NvMusicInfo): void;

```

### Picture in Picture

```javascript
/*! \if ENGLISH
 *
 *  \brief PIP entrance By default, the album is opened, and a material from the album is taken into the beat
 *  \param config Configuration item
 *  \else
 *
 *  \brief 合拍入口，默认打开相册，从相册取一个素材进入合拍
 *  \param config 配置项
 *  \endif
 */
startVideoDualCaptrue(config?: NvVideoConfig): void;

/*! \if ENGLISH
 *
 *  \brief PIP entrance
 *  \param config Configuration item
 *  \param videoPath The video path to be filmed must be a local path
 *  \else
 *
 *  \brief 合拍入口
 *  \param config 配置项
 *  \param videoPath 准备合拍的视频路径，必须是本地路径
 *  \endif
 */
startVideoDualCaptrueWithVideo(videoPath: string, config?: NvVideoConfig): void;

```

### Video editing

```javascript
/*! \if ENGLISH
 *
 *  \brief Edit entrance
 *  \param config Configuration item
 *  \else
 *
 *  \brief 编辑入口
 *  \param config 配置项
 *  \endif
 */
startSeleteFilesForEdit(config?: NvVideoConfig): void;
```

### Video editing complete callback

```javascript
/*! \if ENGLISH
 *  \brief Edit module event callback
 *  \else
 *  \brief 编辑模块事件回调
 *  \endif
*/
setVideoEditEventHandler(handler?: (event: NvVideoEditEvent, info: Map<string, string>) => void): void;

```

### Select cover

```javascript
/*! \if ENGLISH
 *  \brief selete cover image
 *  \else
 *  \brief 选择封面图片
 *  \endif
*/
selectCoverImage(): Promise<Map<string, any>>;
```

### Save draft

```javascript
/*! \if ENGLISH
 *  \brief save draft
 *  \else
 *  \brief 保存草稿
 *  \endif
 */
saveDraft(info: string): Promise<Map<string, any>>;

```

### Synthetic video

```javascript
/*! \if ENGLISH
 *  \brief Composite video
 *  \else
 *  \brief 合成视频
 *  \endif
 */
compileCurrentTimeline(configure: Map<string, string>): Promise<Map<string, any>>;


```

### Video synthesis callback

```javascript
/*! \if ENGLISH
 *  \brief Composite video event callback
 *  \else
 *  \brief 视频合成事件回调
 *  \endif
 */
setVideoCompileEventHandler(handler?: (event: NvVideoCompileEvent, compileInfo: Map<string, string>) => void): void;

```

### Save cover image

```javascript
/*! \if ENGLISH
 *  \brief save image
 *  \else
 *  \brief 保存图片
 *  \endif
 */
saveImage(coverImagePath: string): Promise<Map<string, any>>;

```

### Exit short video module

Call it when the video publishing page exits

```javascript
/*! \if ENGLISH
 *
 *  \brief Exit the entire publisher call
 *  \param taskId Returned by the edit completion callback
 *  \warning This method will clean up the current draft and SDK-held resources, please call after completely exiting the editing and publishing process
 *  \else
 *
 *  \brief 退出整个发布器调用
 *  \param taskId 由编辑完成回调中返回
 *  \warning 该方法会清理当前草稿以及sdk持有资源，请在完全退出编辑发布流程之后，调用
 *  \endif
 */
  exitEdit(taskId: String): void;

```

### Get draft list

```javascript
/*! \if ENGLISH
 *  \brief get draft list
 *  \else
 *  \brief 获取草稿列表
 *  \endif
*/
getDraftList(): Promise<Map<string, any>>;

```

### Delete draft

```javascript
/*! \if ENGLISH
 *  \brief delete draft
 *  \else
 *  \brief 删除草稿
 *  \endif
*/
deleteDraft(draftId: string): Promise<Map<string, any>>;

```

### Open draft

```javascript
/*! \if ENGLISH
 *
 *  \brief Enter the editing portal through draft data recovery
 *  \param draftId Current draft id
 *  \param config Configuration item
 *  \else
 *
 *  \brief 通过草稿数据恢复，进入编辑入口
 *  \param draftId 当前草稿id
 *  \param config 配置项
 *  \endif
 */
reeditDraft(draftId: string, config?: NvVideoConfig): Promise<Map<string, any>>;
  
```

## Module settings

The short video module setting class NvVideoConfig includes function module settings and UI customization. For details, see: [Short video function module settings](../../nv_short_video_ios_doc/doc_en/html/functionConfiguration_en.html)、[Short video UI module settings](../../nv_short_video_ios_doc/doc_en/html/UIConfiguration_en.html)