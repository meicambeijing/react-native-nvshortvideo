"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NvEffectTrackViewTheme = void 0;
const NvViewTheme_1 = require("../ThemeElement/NvViewTheme");
/*! \if ENGLISH
 *
 *  \brief EffectTrackViewTheme Configuration item
 *  \else
 *
 *  \brief EffectTrackViewTheme配置项
 *  \endif
*/
class NvEffectTrackViewTheme extends NvViewTheme_1.NvViewTheme {
    /*! \if ENGLISH
     *
     *  \brief Select the fragment Stroke color
     *  \else
     *
     *  \brief 选中片段描边颜色
     *  \endif
    */
    clipBorderColor;
    /*! \if ENGLISH
     *
     *  \brief
     *  \else
     *
     *  \brief 选中片段描边宽度
     *  \endif
    */
    clipBorderWidth;
    /*! \if ENGLISH
     *
     *  \brief Select the fragment stroke width
     *  \else
     *
     *  \brief 中间线样式
     *  \endif
    */
    centerLineView;
    /*! \if ENGLISH
     *
     *  \brief Left and right handle picture
     *  \else
     *
     *  \brief 左右把手图片
     *  \endif
    */
    leftHandleImage;
    rightHandleImage;
    /*! \if ENGLISH
     *
     *  \brief Time handle picture
     *  \else
     *
     *  \brief 时间把手图片
     *  \endif
    */
    timeHandleImage;
}
exports.NvEffectTrackViewTheme = NvEffectTrackViewTheme;
