"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NvLabelTheme = void 0;
const NvViewTheme_1 = require("./NvViewTheme");
/*! \if ENGLISH
 *
 *  \brief Llabel Configuration item
 *  \else
 *
 *  \brief Label配置项
 *  \endif
*/
class NvLabelTheme extends NvViewTheme_1.NvViewTheme {
    /*! \if ENGLISH
     *
     *  \brief UIFont size
     *  \else
     *
     *  \brief 字体大小
     *  \endif
    */
    fontSize;
    /*! \if ENGLISH
     *
     *  \brief UIFont family
     *  \else
     *
     *  \brief 字体名称
     *  \endif
    */
    fontFamily;
    /*! \if ENGLISH
     *
     *  \brief Text color
     *  \else
     *
     *  \brief 文字颜色
     *  \endif
    */
    textColor;
    constructor() {
        super();
    }
}
exports.NvLabelTheme = NvLabelTheme;
