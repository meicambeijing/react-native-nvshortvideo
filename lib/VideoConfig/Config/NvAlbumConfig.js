"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NvAlbumConfig = void 0;
/*! \if ENGLISH
 *
 *  \brief Album configuration
 *  \else
 *
 *  \brief 相册配置
 *  \endif
*/
class NvAlbumConfig {
    /*! \if ENGLISH
     *
     *  \brief Custom UI collection
     *  \else
     *
     *  \brief 自定义UI合集
     *  \endif
    */
    customTheme;
    /*! \if ENGLISH
     *
     *  \brief Album top TAB, All==0, Video==1, Pictures==2
     *  \else
     *
     *  \brief 相册顶部标签，全部==0、视频==1、图片==2
     *  \endif
    */
    type = 0;
    /*! \if ENGLISH
     *
     *  \brief The maximum number of materials for an album
     *  \else
     *
     *  \brief 相册可选最大素材数
     *  \endif
    */
    maxSelectCount = 5;
    /*! \if ENGLISH
     *
     *  \brief Whether to include AutoCut
     *  \else
     *
     *  \brief 是否有一键成片功能
     *  \endif
    */
    useAutoCut = true;
}
exports.NvAlbumConfig = NvAlbumConfig;
