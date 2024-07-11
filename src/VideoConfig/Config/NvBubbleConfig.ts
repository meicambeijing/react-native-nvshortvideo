import { NvViewTheme } from "../Theme/ThemeElement/NvViewTheme";
import { NvLabelTheme } from "../Theme/ThemeElement/NvLabelTheme";

/*! \if ENGLISH
 *
 *  \brief Bubble background blur style
 *  \else
 *
 *  \brief 气泡背景模糊样式
 *  \endif
*/
export enum NvBubbleBgBlurStyle {
    none = 0, //!< \if ENGLISH None \else 无模糊 \endif
    light = 1, //!< \if Light \else 白色模糊 \endif
    dark = 2 //!< \if Dark \else 黑色模糊 \endif
}

/*! \if ENGLISH
 *
 *  \brief Bubble configuration
 *  \else
 *
 *  \brief 气泡配置
 *  \endif
*/
export class NvBubbleConfig {

/*! \if ENGLISH
 *
 *  \brief Edit icon
 *  \else
 *
 *  \brief 编辑图标
 *  \endif
*/
    editImageName? : string;

/*! \if ENGLISH
 *
 *  \brief Duration icon
 *  \else
 *
 *  \brief 时长图标
 *  \endif
*/
    durationImageName? : string;

/*! \if ENGLISH
 *
 *  \brief
 *  \else
 *
 *  \brief 文字样式
 *  \endif
*/
    titleTheme? : NvLabelTheme;

/*! \if ENGLISH
 *
 *  \brief Text style
 *  \else
 *
 *  \brief 背景色（无模糊时的）
 *  \endif
*/
    backgroundColor? : string;

/*! \if ENGLISH
 *
 *  \brief Background mode
 *  \else
 *
 *  \brief 背景模式
 *  \endif
*/
    backgroundBlurStyle : NvBubbleBgBlurStyle = NvBubbleBgBlurStyle.dark;
}