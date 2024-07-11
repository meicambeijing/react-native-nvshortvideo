import { NvViewTheme } from "../ThemeElement/NvViewTheme";
import { NvLabelTheme } from "../ThemeElement/NvLabelTheme";

/*! \if ENGLISH
 *
 *  \brief VideoTrackEditViewTheme Configuration item
 *  \else
 *
 *  \brief VideoTrackEditViewTheme配置项
 *  \endif
*/
export class NvVideoTrackEditViewTheme extends NvViewTheme {

/*! \if ENGLISH
 *
 *  \brief Stroke color
 *  \else
 *
 *  \brief 描边颜色
 *  \endif
*/
    selectedClipBorderColor?: string;

/*! \if ENGLISH
 *
 *  \brief Left and right handle icon
 *  \else
 *
 *  \brief 左右把手图标
 *  \endif
*/
    leftHandleImage?: string;
    rightHandleImage?: string;

/*! \if ENGLISH
 *
 *  \brief Timeline color
 *  \else
 *
 *  \brief 时间轴颜色
 *  \endif
*/
    timeTrackColor?: string;

/*! \if ENGLISH
 *
 *  \brief Text style
 *  \else
 *
 *  \brief 文本样式
 *  \endif
*/
    durationLabel?: NvLabelTheme;

}