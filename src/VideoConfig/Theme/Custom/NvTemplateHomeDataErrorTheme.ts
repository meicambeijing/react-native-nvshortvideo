import { NvButtonTheme } from "../ThemeElement/NvButtonTheme";
import { NvViewTheme } from "../ThemeElement/NvViewTheme";
import { NvLabelTheme } from "../ThemeElement/NvLabelTheme";

/*! \if ENGLISH
 *
 *  \brief TemplateHomeDataErrorTheme Configuration item
 *  \else
 *
 *  \brief TemplateHomeDataErrorTheme配置项
 *  \endif
*/
export class NvTemplateHomeDataErrorTheme extends NvViewTheme {
    
/*! \if ENGLISH
 *
 *  \brief Text style
 *  \else
 *
 *  \brief 文本样式
 *  \endif
*/
    titleLabel? : NvLabelTheme;

/*! \if ENGLISH
 *
 *  \brief Description text style
 *  \else
 *
 *  \brief 描述文本样式
 *  \endif
*/
    descriptionLabel? : NvLabelTheme;

/*! \if ENGLISH
 *
 *  \brief Button style
 *  \else
 *
 *  \brief 按钮样式
 *  \endif
*/
    retryBtn? : NvButtonTheme;

}