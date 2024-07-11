"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NvTextFieldTheme = void 0;
const NvLabelTheme_1 = require("./NvLabelTheme");
/*! \if ENGLISH
 *
 *  \brief TextField Configuration item
 *  \else
 *
 *  \brief TextField配置项
 *  \endif
*/
class NvTextFieldTheme extends NvLabelTheme_1.NvLabelTheme {
    /*! \if ENGLISH
     *
     *  \brief Placeholder font size
     *  \else
     *
     *  \brief 占位符字体大小
     *  \endif
    */
    placeholderFontSize;
    /*! \if ENGLISH
     *
     *  \brief Placeholder font family
     *  \else
     *
     *  \brief 占位符字体名称
     *  \endif
    */
    placeholderFontFamily;
    /*! \if ENGLISH
     *
     *  \brief Placeholder text color
     *  \else
     *
     *  \brief 占位符文本颜色
     *  \endif
    */
    placeholderColor;
    constructor() {
        super();
    }
}
exports.NvTextFieldTheme = NvTextFieldTheme;
