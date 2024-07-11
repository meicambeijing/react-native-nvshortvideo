"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NvCompileConfig = exports.NvsCompileVideoBitrateGrade = exports.NvVideoCompileResolution = exports.NvVideoPreviewResolution = void 0;
var NvVideoPreviewResolution;
(function (NvVideoPreviewResolution) {
    NvVideoPreviewResolution[NvVideoPreviewResolution["NvVideoPreviewResolution_720"] = 0] = "NvVideoPreviewResolution_720";
    NvVideoPreviewResolution[NvVideoPreviewResolution["NvVideoPreviewResolution_1080"] = 1] = "NvVideoPreviewResolution_1080";
})(NvVideoPreviewResolution || (exports.NvVideoPreviewResolution = NvVideoPreviewResolution = {}));
;
var NvVideoCompileResolution;
(function (NvVideoCompileResolution) {
    NvVideoCompileResolution[NvVideoCompileResolution["NvVideoCompileResolution_720"] = 0] = "NvVideoCompileResolution_720";
    NvVideoCompileResolution[NvVideoCompileResolution["NvVideoCompileResolution_1080"] = 1] = "NvVideoCompileResolution_1080";
    NvVideoCompileResolution[NvVideoCompileResolution["NvVideoCompileResolution_4K"] = 2] = "NvVideoCompileResolution_4K";
})(NvVideoCompileResolution || (exports.NvVideoCompileResolution = NvVideoCompileResolution = {}));
var NvsCompileVideoBitrateGrade;
(function (NvsCompileVideoBitrateGrade) {
    NvsCompileVideoBitrateGrade[NvsCompileVideoBitrateGrade["NvsCompileBitrateGradeLow"] = 0] = "NvsCompileBitrateGradeLow";
    NvsCompileVideoBitrateGrade[NvsCompileVideoBitrateGrade["NvsCompileBitrateGradeMedium"] = 1] = "NvsCompileBitrateGradeMedium";
    NvsCompileVideoBitrateGrade[NvsCompileVideoBitrateGrade["NvsCompileBitrateGradeHigh"] = 2] = "NvsCompileBitrateGradeHigh"; //!< \if ENGLISH High bitrate \else 高码率 \endif
})(NvsCompileVideoBitrateGrade || (exports.NvsCompileVideoBitrateGrade = NvsCompileVideoBitrateGrade = {}));
/*! \if ENGLISH
 *
 *  \brief Compile configuration item
 *  \else
 *
 *  \brief 导出配置项
 *  \endif
*/
class NvCompileConfig {
    /*! \if ENGLISH
     *
     *  \brief Output video resolution
     *  Default 1080
     *  Refer to NvVideoCompileResolution
     *  \else
     *
     *  \brief 输出视频分辨率
     *  默认1080
     *  参考NvVideoCompileResolution
     *  \endif
    */
    resolution = NvVideoCompileResolution.NvVideoCompileResolution_1080;
    /*! \if ENGLISH
     *
     *  \brief Output video fps
     *  \else
     *
     *  \brief 输出视频fps
     *  \endif
    */
    fps = 25;
    /*! \if ENGLISH
     *
     *  \brief Output video bit rate
     *  Default NvsCompileBitrateGradeHigh
     *
     *  Refer to NvsCompileVideoBitrateGrade
     *  \else
     *
     *  \brief 输出视频码率
     *  默认NvsCompileBitrateGradeHigh
     *
     *  参考NvsCompileVideoBitrateGrade
     *  \endif
    */
    bitrateGrade = NvsCompileVideoBitrateGrade.NvsCompileBitrateGradeHigh;
    /*! \if ENGLISH
     *
     *  \brief Output video bit rate
     *  For example, to set 3M bit rate, pass 3000000
     *  Default not set
     *  \else
     *
     *  \brief 输出视频码率
     *  比如要设置3M码率，则传3000000
     *  默认不设置
     *  \endif
    */
    bitrate = -1;
    /*! \if ENGLISH
     *
     *  \brief Whether to save the exported video to the album
     *  Default Save
     *  false==Don't save
     *  true==Save
     *  \else
     *
     *  \brief 导出视频是否保存到相册
     *  默认保存
     *  false==不保存
     *  true==保存
     *  \endif
    */
    autoSaveVideo = true;
}
exports.NvCompileConfig = NvCompileConfig;
