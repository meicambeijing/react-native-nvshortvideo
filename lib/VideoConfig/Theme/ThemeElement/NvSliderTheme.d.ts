import { NvViewTheme } from "./NvViewTheme";
/*! \if ENGLISH
 *
 *  \brief SliderTheme Configuration item
 *  \else
 *
 *  \brief SliderTheme配置项
 *  \endif
*/
export declare class NvSliderTheme extends NvViewTheme {
    /*! \if ENGLISH
     *
     *  \brief undertone
     *  \else
     *
     *  \brief 底色
     *  \endif
    */
    minimumTrackTintColor?: string;
    /*! \if ENGLISH
     *
     *  \brief Effective interval color
     *  \else
     *
     *  \brief 有效区间颜色
     *  \endif
    */
    maximumTrackTintColor?: string;
    /*! \if ENGLISH
     *
     *  \brief Handle color
     *  \else
     *
     *  \brief 把手颜色
     *  \endif
    */
    thumbTintColor?: string;
    /*! \if ENGLISH
     *
     *  \brief Numeric text color
     *  \else
     *
     *  \brief 数值文本颜色
     *  \endif
    */
    valueTextColor?: string;
    /*! \if ENGLISH
     *
     *  \brief Second numeric text colorf'f'f
     *  \else
     *
     *  \brief 第二数值文本颜色
     *  \endif
    */
    valueSecondaryTextColor?: string;
    /*! \if ENGLISH
     *
     *  \brief Handle icon
     *  \else
     *
     *  \brief 把手图标
     *  \endif
    */
    thumbTintImage?: string;
    constructor();
}
