import { NvCellTheme } from "../ThemeElement/NvCellTheme";
import { NvImageViewTheme } from "../ThemeElement/NvImageViewTheme";
/*! \if ENGLISH
 *
 *  \brief MaterialCellTheme Configuration item
 *  \else
 *
 *  \brief MaterialCellTheme配置项
 *  \endif
*/
export declare class NvMaterialCellTheme extends NvCellTheme {
    /*! \if ENGLISH
     *
     *  \brief Picture style
     *  \else
     *
     *  \brief 图片样式
     *  \endif
    */
    imageView?: NvImageViewTheme;
    /*! \if ENGLISH
     *
     *  \brief Download button icon
     *  \else
     *
     *  \brief 下载按钮图标
     *  \endif
    */
    downloadImageName?: string;
    /*! \if ENGLISH
     *
     *  \brief Download animation file
     *  \else
     *
     *  \brief 下载动画文件
     *  \endif
    */
    loadingAnimatedFilePath?: string;
}
