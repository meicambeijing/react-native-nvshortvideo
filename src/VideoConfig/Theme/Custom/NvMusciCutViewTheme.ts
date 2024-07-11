import { NvViewTheme } from "../ThemeElement/NvViewTheme";
import { NvButtonTheme } from "../ThemeElement/NvButtonTheme";
import { NvLabelTheme } from "../ThemeElement/NvLabelTheme";

/*! \if ENGLISH
 *
 *  \brief MusciCutViewTheme Configuration item
 *  \else
 *
 *  \brief MusciCutViewTheme配置项
 *  \endif
*/
export class NvMusciCutViewTheme extends NvViewTheme {

/*! \if ENGLISH
 *
 *  \brief Time text font
 *  \else
 *
 *  \brief 时间文本 字体
 *  \endif
*/
    timeFontSize?: number;

/*! \if ENGLISH
 *
 *  \brief Time text color
 *  \else
 *
 *  \brief 时间文本 颜色
 *  \endif
*/
    timeFontFamily?: string;

/*! \if ENGLISH
 *
 *  \brief Time text second color
 *  \else
 *
 *  \brief 时间文本 第二颜色
 *  \endif
*/
    timeSecondaryTextColor?: string;

/*! \if ENGLISH
 *
 *  \brief Left side line color
 *  \else
 *
 *  \brief 左侧线颜色
 *  \endif
*/
    waveColor?: string;

/*! \if ENGLISH
 *
 *  \brief Waveform diagram base color
 *  \else
 *
 *  \brief 波形图底色
 *  \endif
*/
    waveTintColor?: string;

/*! \if ENGLISH
 *
 *  \brief Wave diagram bright color
 *  \else
 *
 *  \brief 波形图亮色
 *  \endif
*/
    waveBackgroundColor?: string;

/*! \if ENGLISH
 *
 *  \brief Waveform background color
 *  \else
 *
 *  \brief 波形图背景色
 *  \endif
*/
    rightBtImage?: string;

/*! \if ENGLISH
 *
 *  \brief Loop button style
 *  \else
 *
 *  \brief 循环按钮样式
 *  \endif
*/
    loopBt?: NvButtonTheme;

/*! \if ENGLISH
 *
 *  \brief Prompt text style
 *  \else
 *
 *  \brief 提示文本样式
 *  \endif
*/
    tipLabel?: NvLabelTheme;

}