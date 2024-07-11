import { NvLabelTheme } from "./NvLabelTheme";
import { NvViewTheme } from "./NvViewTheme";
/*! \if ENGLISH
 *
 *  \brief Button Configuration item
 *  \else
 *
 *  \brief Button配置项
 *  \endif
*/
export declare class NvButtonTheme extends NvViewTheme {
    /*! \if ENGLISH
     *
     *  \brief icon
     *  \else
     *
     *  \brief 图标
     *  \endif
    */
    imageName?: string;
    /*! \if ENGLISH
     *
     *  \brief The icon when selected
     *  \else
     *
     *  \brief 选中时的图标
     *  \endif
    */
    selectedImageName?: string;
    /*! \if ENGLISH
     *
     *  \brief Icon when disabled
     *  \else
     *
     *  \brief 禁用时的图标
     *  \endif
    */
    disableImageName?: string;
    /*! \if ENGLISH
     *
     *  \brief Text style
     *  \else
     *
     *  \brief 文本样式
     *  \endif
    */
    title?: NvLabelTheme;
    /*! \if ENGLISH
     *
     *  \brief Text style check
     *  \else
     *
     *  \brief 文本样式 选中
     *  \endif
    */
    selectedTitle?: NvLabelTheme;
    /*! \if ENGLISH
     *
     *  \brief Text style disabled
     *  \else
     *
     *  \brief 文本样式 禁用
     *  \endif
    */
    disableTitle?: NvLabelTheme;
    /*! \if ENGLISH
     *
     *  \brief The background color is selected
     *  \else
     *
     *  \brief 选中时背景颜色
     *  \endif
    */
    selectedBackgroundColor?: string;
    constructor();
}
