export declare enum NvVideoPreviewResolution {
    NvVideoPreviewResolution_720 = 0,
    NvVideoPreviewResolution_1080 = 1
}
export declare enum NvVideoCompileResolution {
    NvVideoCompileResolution_720 = 0,
    NvVideoCompileResolution_1080 = 1,
    NvVideoCompileResolution_4K = 2
}
export declare enum NvsCompileVideoBitrateGrade {
    NvsCompileBitrateGradeLow = 0,//!< \if ENGLISH Low bitrate \else 低码率 \endif
    NvsCompileBitrateGradeMedium = 1,//!< \if ENGLISH Medium bitrate \else 中等码率 \endif
    NvsCompileBitrateGradeHigh = 2
}
/*! \if ENGLISH
 *
 *  \brief Compile configuration item
 *  \else
 *
 *  \brief 导出配置项
 *  \endif
*/
export declare class NvCompileConfig {
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
    resolution: NvVideoCompileResolution;
    /*! \if ENGLISH
     *
     *  \brief Output video fps
     *  \else
     *
     *  \brief 输出视频fps
     *  \endif
    */
    fps: number;
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
    bitrateGrade: NvsCompileVideoBitrateGrade;
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
    bitrate: number;
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
    autoSaveVideo: boolean;
}
