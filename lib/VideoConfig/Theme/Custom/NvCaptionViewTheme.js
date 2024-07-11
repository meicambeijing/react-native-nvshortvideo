"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NvCaptionViewTheme = void 0;
const NvViewTheme_1 = require("../ThemeElement/NvViewTheme");
/*! \if ENGLISH
 *
 *  \brief CaptionViewTheme Configuration item
 *  \else
 *
 *  \brief CaptionViewTheme配置项
 *  \endif
*/
class NvCaptionViewTheme extends NvViewTheme_1.NvViewTheme {
    /*! \if ENGLISH
     *
     *  \brief Cursor color
     *  \else
     *
     *  \brief 光标颜色
     *  \endif
    */
    textViewTintColor;
    /*! \if ENGLISH
     *
     *  \brief Complete button style
     *  \else
     *
     *  \brief 完成按钮样式
     *  \endif
    */
    doneBt;
    /*! \if ENGLISH
     *
     *  \brief Align icon
     *  \else
     *
     *  \brief 对齐图标
     *  \endif
    */
    leftAlignmentImage;
    centerAlignmentImage;
    rightAlignmentImage;
    /*! \if ENGLISH
     *
     *  \brief Caption style corresponding icon
     *  \else
     *
     *  \brief 字幕样式对应的图标
     *  \endif
    */
    styleNoneImage;
    styleBgImage;
    styleBgAlphaImage;
    styleOutlineImage;
    /*! \if ENGLISH
     *
     *  \brief Font style
     *  \else
     *
     *  \brief 字体样式
     *  \endif
    */
    fontCellTheme;
    fontCellSelectedTheme;
    /*! \if ENGLISH
     *
     *  \brief Color style
     *  \else
     *
     *  \brief 颜色样式
     *  \endif
    */
    colorCellTheme;
    colorCellSelectedTheme;
}
exports.NvCaptionViewTheme = NvCaptionViewTheme;
