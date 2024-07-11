"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NvSliderTheme = void 0;
const NvViewTheme_1 = require("./NvViewTheme");
/*! \if ENGLISH
 *
 *  \brief SliderTheme Configuration item
 *  \else
 *
 *  \brief SliderTheme配置项
 *  \endif
*/
class NvSliderTheme extends NvViewTheme_1.NvViewTheme {
    /*! \if ENGLISH
     *
     *  \brief undertone
     *  \else
     *
     *  \brief 底色
     *  \endif
    */
    minimumTrackTintColor;
    /*! \if ENGLISH
     *
     *  \brief Effective interval color
     *  \else
     *
     *  \brief 有效区间颜色
     *  \endif
    */
    maximumTrackTintColor;
    /*! \if ENGLISH
     *
     *  \brief Handle color
     *  \else
     *
     *  \brief 把手颜色
     *  \endif
    */
    thumbTintColor;
    /*! \if ENGLISH
     *
     *  \brief Numeric text color
     *  \else
     *
     *  \brief 数值文本颜色
     *  \endif
    */
    valueTextColor;
    /*! \if ENGLISH
     *
     *  \brief Second numeric text colorf'f'f
     *  \else
     *
     *  \brief 第二数值文本颜色
     *  \endif
    */
    valueSecondaryTextColor;
    /*! \if ENGLISH
     *
     *  \brief Handle icon
     *  \else
     *
     *  \brief 把手图标
     *  \endif
    */
    thumbTintImage;
    constructor() {
        super();
    }
}
exports.NvSliderTheme = NvSliderTheme;
