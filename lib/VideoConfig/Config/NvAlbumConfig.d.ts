import { NvViewTheme } from "../Theme/ThemeElement/NvViewTheme";
import { NvThemeElementKey } from "../Theme/NvThemeElementKey";
/*! \if ENGLISH
 *
 *  \brief Album configuration
 *  \else
 *
 *  \brief 相册配置
 *  \endif
*/
export declare class NvAlbumConfig {
    /*! \if ENGLISH
     *
     *  \brief Custom UI collection
     *  \else
     *
     *  \brief 自定义UI合集
     *  \endif
    */
    customTheme?: Map<NvThemeElementKey, NvViewTheme>;
    /*! \if ENGLISH
     *
     *  \brief Album top TAB, All==0, Video==1, Pictures==2
     *  \else
     *
     *  \brief 相册顶部标签，全部==0、视频==1、图片==2
     *  \endif
    */
    type: number;
    /*! \if ENGLISH
     *
     *  \brief The maximum number of materials for an album
     *  \else
     *
     *  \brief 相册可选最大素材数
     *  \endif
    */
    maxSelectCount: number;
    /*! \if ENGLISH
     *
     *  \brief Whether to include AutoCut
     *  \else
     *
     *  \brief 是否有一键成片功能
     *  \endif
    */
    useAutoCut: boolean;
}
