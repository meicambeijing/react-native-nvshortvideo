"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NvButtonTheme = void 0;
const NvViewTheme_1 = require("./NvViewTheme");
/*! \if ENGLISH
 *
 *  \brief Button Configuration item
 *  \else
 *
 *  \brief Button配置项
 *  \endif
*/
class NvButtonTheme extends NvViewTheme_1.NvViewTheme {
    /*! \if ENGLISH
     *
     *  \brief icon
     *  \else
     *
     *  \brief 图标
     *  \endif
    */
    imageName;
    /*! \if ENGLISH
     *
     *  \brief The icon when selected
     *  \else
     *
     *  \brief 选中时的图标
     *  \endif
    */
    selectedImageName;
    /*! \if ENGLISH
     *
     *  \brief Icon when disabled
     *  \else
     *
     *  \brief 禁用时的图标
     *  \endif
    */
    disableImageName;
    /*! \if ENGLISH
     *
     *  \brief Text style
     *  \else
     *
     *  \brief 文本样式
     *  \endif
    */
    title;
    /*! \if ENGLISH
     *
     *  \brief Text style check
     *  \else
     *
     *  \brief 文本样式 选中
     *  \endif
    */
    selectedTitle;
    /*! \if ENGLISH
     *
     *  \brief Text style disabled
     *  \else
     *
     *  \brief 文本样式 禁用
     *  \endif
    */
    disableTitle;
    /*! \if ENGLISH
     *
     *  \brief The background color is selected
     *  \else
     *
     *  \brief 选中时背景颜色
     *  \endif
    */
    selectedBackgroundColor;
    constructor() {
        super();
    }
}
exports.NvButtonTheme = NvButtonTheme;
