import { NvViewTheme } from "../ThemeElement/NvViewTheme";
import { NvButtonTheme } from "../ThemeElement/NvButtonTheme";

/*! \if ENGLISH
 *
 *  \brief CaptionViewTheme Configuration item
 *  \else
 *
 *  \brief CaptionViewTheme配置项
 *  \endif
*/
export class NvCaptionViewTheme extends NvViewTheme {

/*! \if ENGLISH
 *
 *  \brief Cursor color
 *  \else
 *
 *  \brief 光标颜色
 *  \endif
*/
    textViewTintColor? : string;

/*! \if ENGLISH
 *
 *  \brief Complete button style
 *  \else
 *
 *  \brief 完成按钮样式
 *  \endif
*/
    doneBt? : NvButtonTheme;

/*! \if ENGLISH
 *
 *  \brief Align icon
 *  \else
 *
 *  \brief 对齐图标
 *  \endif
*/
    leftAlignmentImage? : string;
    centerAlignmentImage? : string;
    rightAlignmentImage? : string;

/*! \if ENGLISH
 *
 *  \brief Caption style corresponding icon
 *  \else
 *
 *  \brief 字幕样式对应的图标
 *  \endif
*/
    styleNoneImage? : string;
    styleBgImage? : string;
    styleBgAlphaImage? : string;
    styleOutlineImage? : string;

/*! \if ENGLISH
 *
 *  \brief Font style
 *  \else
 *
 *  \brief 字体样式
 *  \endif
*/
    fontCellTheme? : NvViewTheme;
    fontCellSelectedTheme? : NvViewTheme;

/*! \if ENGLISH
 *
 *  \brief Color style
 *  \else
 *
 *  \brief 颜色样式
 *  \endif
*/
    colorCellTheme? : NvViewTheme;
    colorCellSelectedTheme? : NvViewTheme;

}