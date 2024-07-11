import { NvViewTheme } from "../ThemeElement/NvViewTheme";
/*! \if ENGLISH
 *
 *  \brief EffectTrackViewTheme Configuration item
 *  \else
 *
 *  \brief EffectTrackViewTheme配置项
 *  \endif
*/
export declare class NvEffectTrackViewTheme extends NvViewTheme {
    /*! \if ENGLISH
     *
     *  \brief Select the fragment Stroke color
     *  \else
     *
     *  \brief 选中片段描边颜色
     *  \endif
    */
    clipBorderColor?: string;
    /*! \if ENGLISH
     *
     *  \brief
     *  \else
     *
     *  \brief 选中片段描边宽度
     *  \endif
    */
    clipBorderWidth?: number;
    /*! \if ENGLISH
     *
     *  \brief Select the fragment stroke width
     *  \else
     *
     *  \brief 中间线样式
     *  \endif
    */
    centerLineView?: NvViewTheme;
    /*! \if ENGLISH
     *
     *  \brief Left and right handle picture
     *  \else
     *
     *  \brief 左右把手图片
     *  \endif
    */
    leftHandleImage?: string;
    rightHandleImage?: string;
    /*! \if ENGLISH
     *
     *  \brief Time handle picture
     *  \else
     *
     *  \brief 时间把手图片
     *  \endif
    */
    timeHandleImage?: string;
}
