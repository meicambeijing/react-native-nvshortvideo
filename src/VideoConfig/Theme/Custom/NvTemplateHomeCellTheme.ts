import { NvButtonTheme } from "../ThemeElement/NvButtonTheme";
import { NvCellTheme } from "../ThemeElement/NvCellTheme";
import { NvLabelTheme } from "../ThemeElement/NvLabelTheme";
import { NvImageViewTheme } from "../ThemeElement/NvImageViewTheme";

/*! \if ENGLISH
 *
 *  \brief TemplateHomeCellTheme Configuration item
 *  \else
 *
 *  \brief TemplateHomeCellTheme配置项
 *  \endif
*/
export class NvTemplateHomeCellTheme extends NvCellTheme {

/*! \if ENGLISH
 *
 *  \brief Text style
 *  \else
 *
 *  \brief 文字样式
 *  \endif
*/
    descriptionLabel? : NvLabelTheme;

/*! \if ENGLISH
 *
 *  \brief Picture style
 *  \else
 *
 *  \brief 图片样式
 *  \endif
*/
    imageView? : NvImageViewTheme;

/*! \if ENGLISH
 *
 *  \brief Secondary image style
 *  \else
 *
 *  \brief 二级图片样式
 *  \endif
*/
    centerImageView? : NvImageViewTheme;

/*! \if ENGLISH
 *
 *  \brief Button style
 *  \else
 *
 *  \brief 按钮样式
 *  \endif
*/
    button? : NvButtonTheme;

}