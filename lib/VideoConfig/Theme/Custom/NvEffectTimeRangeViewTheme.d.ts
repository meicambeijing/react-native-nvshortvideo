import { NvViewTheme } from "../ThemeElement/NvViewTheme";
import { NvImageViewTheme } from "../ThemeElement/NvImageViewTheme";
/*! \if ENGLISH
 *
 *  \brief EffectTimeRangeViewTheme Configuration item
 *  \else
 *
 *  \brief EffectTimeRangeViewTheme配置项
 *  \endif
*/
export declare class NvEffectTimeRangeViewTheme extends NvViewTheme {
    /*! \if ENGLISH
     *
     *  \brief Complete button style
     *  \else
     *
     *  \brief 完成按钮样式
     *  \endif
    */
    doneBtImage?: string;
    /*! \if ENGLISH
     *
     *  \brief Text color
     *  \else
     *
     *  \brief 文本颜色
     *  \endif
    */
    valueTextColor?: string;
    valueSecondaryTextColor?: string;
    /*! \if ENGLISH
     *
     *  \brief Select the fragment Stroke style
     *  \else
     *
     *  \brief 选中片段描边样式
     *  \endif
    */
    clipBorderColor?: string;
    clipBorderWidth?: number;
    /*! \if ENGLISH
     *
     *  \brief Center line style
     *  \else
     *
     *  \brief 中线样式
     *  \endif
    */
    centerLineView?: NvViewTheme;
    /*! \if ENGLISH
     *
     *  \brief Left and right handle pattern
     *  \else
     *
     *  \brief 左右把手样式
     *  \endif
    */
    leftHandleImage?: string;
    rightHandleImage?: string;
    /*! \if ENGLISH
     *
     *  \brief Prompt text style
     *  \else
     *
     *  \brief 提示文本样式
     *  \endif
    */
    tipLabel?: NvImageViewTheme;
}
