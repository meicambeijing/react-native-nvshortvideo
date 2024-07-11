"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NvShortVideoOperator = void 0;
const NvVideoOperator_1 = require("./NvVideoOperator");
const react_native_1 = require("react-native");
const { VideoEditPlugin } = react_native_1.NativeModules;
const VideoEditPluginEmitter = new react_native_1.NativeEventEmitter(VideoEditPlugin);
class NvShortVideoOperator {
    editEventHandler;
    draftEventHandler;
    videoCompiletEventHandler;
    constructor() {
    }
    /*! \if ENGLISH
    *  \brief Set the material server information
    *  \else
    *  \brief 设置素材服务器信息
    *  \endif
    */
    configServerInfo(info) {
        VideoEditPlugin.sendMessageToNative({
            'method': 'ConfigServerInfo',
            'arguments': info
        }).then((response) => {
            console.log('Received VideoEditPlugin response from native:', response);
        }).catch((error) => {
            console.error('VideoEditPlugin Error sending message to native:', error);
        });
    }
    /*! \if ENGLISH
     *  \brief capture
     *  \else
     *  \brief 视频拍摄
     *  \endif
    */
    startVideoCaptrue(config, musicInfo) {
        var params = {};
        params['method'] = 'CaptureMethod';
        params['arguments'] = {};
        if (musicInfo) {
            params['arguments']['musicInfo'] = musicInfo;
        }
        if (config) {
            params['arguments']['config'] = config;
        }
        VideoEditPlugin.sendMessageToNative(params).then((response) => {
            console.log('Received VideoEditPlugin response from native:', response);
        }).catch((error) => {
            console.error('VideoEditPlugin Error sending message to native:', error);
        });
    }
    /*! \if ENGLISH
     *  \brief dual capture
     *  \else
     *  \brief 合拍
     *  \endif
    */
    startVideoDualCaptrue(config) {
        var params = {};
        params['method'] = 'DualCaptureMethod';
        if (config) {
            params['arguments'] = { "config": config };
        }
        VideoEditPlugin.sendMessageToNative(params).then((response) => {
            console.log('Received VideoEditPlugin response from native:', response);
        }).catch((error) => {
            console.error('VideoEditPlugin Error sending message to native:', error);
        });
    }
    /*! \if ENGLISH
     *  \brief dual capture
     *  \else
     *  \brief 合拍
     *  \endif
    */
    startVideoDualCaptrueWithVideo(videoPath, config) {
        if (!videoPath) {
            throw new Error('videoPath is required');
        }
        const params = {
            method: 'DualCaptureMethod',
            arguments: {
                videoPath: videoPath
            }
        };
        if (config) {
            params.arguments.config = config;
        }
        VideoEditPlugin.sendMessageToNative(params).then((response) => {
            console.log('Received VideoEditPlugin response from native:', response);
        }).catch((error) => {
            console.error('VideoEditPlugin Error sending message to native:', error);
        });
    }
    /*! \if ENGLISH
     *  \brief Select material from album, edit
     *  \else
     *  \brief 从相册选择素材，编辑
     *  \endif
    */
    startSeleteFilesForEdit(config) {
        var params = {};
        params['method'] = 'EditMethod';
        if (config) {
            params['arguments'] = { "config": config };
        }
        VideoEditPlugin.sendMessageToNative(params).then((response) => {
            console.log('Received VideoEditPlugin response from native:', response);
        }).catch((error) => {
            console.error('VideoEditPlugin Error sending message to native:', error);
        });
    }
    /*! \if ENGLISH
     *  \brief get draft list
     *  \else
     *  \brief 获取草稿列表
     *  \endif
    */
    getDraftList() {
        return VideoEditPlugin.sendMessageToNative({
            'method': 'DraftListMethod'
        });
    }
    /*! \if ENGLISH
     *  \brief reedit draft project
     *  \else
     *  \brief 打开草稿
     *  \endif
    */
    reeditDraft(projectId, config) {
        const params = {
            method: 'ReeditMethod',
            arguments: {
                projectId: projectId
            }
        };
        if (config) {
            params.arguments.config = config;
        }
        return VideoEditPlugin.sendMessageToNative(params);
    }
    /*! \if ENGLISH
     *  \brief delete draft
     *  \else
     *  \brief 删除草稿
     *  \endif
    */
    deleteDraft(projectId) {
        return VideoEditPlugin.sendMessageToNative({
            'method': 'DeleteDraftMethod',
            'arguments': { "projectId": projectId }
        });
    }
    /*! \if ENGLISH
     *  \brief save draft
     *  \else
     *  \brief 保存草稿
     *  \endif
    */
    saveDraft(info) {
        return VideoEditPlugin.sendMessageToNative({
            'method': 'SaveDraftMethod',
            'arguments': { "draftInfo": info }
        });
    }
    /*! \if ENGLISH
   *  \brief selete cover image
   *  \else
   *  \brief 选择封面图片
   *  \endif
  */
    selectCoverImage() {
        return VideoEditPlugin.sendMessageToNative({
            'method': 'SelectCoverImageMethod'
        });
    }
    /*! \if ENGLISH
      *  \brief save image
      *  \else
      *  \brief 保存图片
      *  \endif
      */
    saveImage(coverImagePath) {
        return VideoEditPlugin.sendMessageToNative({
            'method': 'SaveImageMethod',
            'arguments': { "coverImagePath": coverImagePath }
        });
    }
    /*! \if ENGLISH
     *  \brief Composite video
     *  \else
     *  \brief 合成视频
     *  \endif
    */
    compileCurrentTimeline(configure) {
        return VideoEditPlugin.sendMessageToNative({
            'method': 'CompileVideoMethod',
            'arguments': { "configure": configure }
        });
    }
    /*! \if ENGLISH
     *  \brief Exit editing module
     *  \else
     *  \brief 退出编辑模块
     *  \endif
    */
    exitEdit(projectId) {
        VideoEditPlugin.sendMessageToNative({
            'method': 'ExitVideoEditMethod',
            'arguments': { "projectId": projectId }
        });
    }
    /*! \if ENGLISH
     *  \brief Edit module event callback
     *  \else
     *  \brief 编辑模块事件回调
     *  \endif
    */
    setVideoEditEventHandler(handler) {
        this.editEventHandler = handler;
        if (handler) {
            VideoEditPluginEmitter.addListener('VideoEditMethodChannel', (body) => this._getNotice(body));
        }
        else {
            VideoEditPluginEmitter.removeAllListeners('VideoEditMethodChannel');
        }
    }
    /*! \if ENGLISH
     *  \brief Draft update event callback
     *  \else
     *  \brief 草稿更新事件回调
     *  \endif
    */
    setDraftUpdateHandler(handler) {
        this.draftEventHandler = handler;
        if (handler) {
            VideoEditPluginEmitter.addListener('VideoEditDraftChangeMethodChannel', (body) => this._getNotice(body));
        }
        else {
            VideoEditPluginEmitter.removeAllListeners('VideoEditDraftChangeMethodChannel');
        }
    }
    /*! \if ENGLISH
     *  \brief Composite video event callback
     *  \else
     *  \brief 视频合成事件回调
     *  \endif
    */
    setVideoCompileEventHandler(handler) {
        this.videoCompiletEventHandler = handler;
        if (handler) {
            VideoEditPluginEmitter.addListener('VideoEditCallbackMethodChannel', (body) => this._getNotice(body));
        }
        else {
            VideoEditPluginEmitter.removeAllListeners('VideoEditCallbackMethodChannel');
        }
    }
    _getNotice(body) {
        let nMethod = body.method;
        let nArguments = body.arguments;
        // console.log('nMethod:', nMethod);
        // console.log('nArguments:', nArguments);
        this.handleEvent(nMethod, nArguments);
    }
    handleEvent(nMethod, nArguments) {
        if (nMethod == 'DraftListUpdate') {
            if (this.draftEventHandler) {
                this.draftEventHandler();
            }
        }
        else if (nMethod == 'VideoEditResultEvent') {
            if (this.editEventHandler) {
                this.editEventHandler(NvVideoOperator_1.NvVideoEditEvent.publish, nArguments);
            }
        }
        else if (nMethod == 'DidCompileProgressMethod') {
            if (this.videoCompiletEventHandler) {
                this.videoCompiletEventHandler(NvVideoOperator_1.NvVideoCompileEvent.progress, nArguments);
            }
        }
        else if (nMethod == 'DidCompileCompletedMethod') {
            if (this.videoCompiletEventHandler) {
                this.videoCompiletEventHandler(NvVideoOperator_1.NvVideoCompileEvent.complete, nArguments);
            }
        }
        else if (nMethod == 'DidCoverImageChangedMethod') {
            if (this.videoCompiletEventHandler) {
                this.videoCompiletEventHandler(NvVideoOperator_1.NvVideoCompileEvent.coverImageSelected, nArguments);
            }
        }
        else {
            //
        }
    }
}
exports.NvShortVideoOperator = NvShortVideoOperator;
