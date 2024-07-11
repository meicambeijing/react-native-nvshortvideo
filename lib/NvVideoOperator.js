"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NvMusicInfo = exports.NvVideoCompileEvent = exports.NvVideoEditEvent = void 0;
/*! \if ENGLISH
 *
 *  \brief Video editing module event
 *  \else
 *  \brief 视频编辑模块事件
 *  \endif
*/
var NvVideoEditEvent;
(function (NvVideoEditEvent) {
    NvVideoEditEvent[NvVideoEditEvent["publish"] = 0] = "publish"; //!< \if ENGLISH Jump to publish \else 跳转到发布 \endif
})(NvVideoEditEvent || (exports.NvVideoEditEvent = NvVideoEditEvent = {}));
/*! \if ENGLISH
 *
 *  \brief Video compile event
 *  \else
 *  \brief 视频合成事件
 *  \endif
*/
var NvVideoCompileEvent;
(function (NvVideoCompileEvent) {
    NvVideoCompileEvent[NvVideoCompileEvent["progress"] = 0] = "progress";
    NvVideoCompileEvent[NvVideoCompileEvent["complete"] = 1] = "complete";
    NvVideoCompileEvent[NvVideoCompileEvent["coverImageSelected"] = 2] = "coverImageSelected"; //!< \if ENGLISH cover image selected \else 选择了新的封面图片 \endif
})(NvVideoCompileEvent || (exports.NvVideoCompileEvent = NvVideoCompileEvent = {}));
/*! \if ENGLISH
 *
 *  \brief music information
 *  \else
 *  \brief 传入拍摄页面音乐信息
 *  \endif
*/
class NvMusicInfo {
    musicName;
    musicPath;
    constructor(musicName, musicPath) {
        this.musicName = musicName;
        this.musicPath = musicPath;
    }
}
exports.NvMusicInfo = NvMusicInfo;
