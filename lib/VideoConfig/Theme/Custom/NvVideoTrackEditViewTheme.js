"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NvVideoTrackEditViewTheme = void 0;
const NvViewTheme_1 = require("../ThemeElement/NvViewTheme");
/*! \if ENGLISH
 *
 *  \brief VideoTrackEditViewTheme Configuration item
 *  \else
 *
 *  \brief VideoTrackEditViewTheme配置项
 *  \endif
*/
class NvVideoTrackEditViewTheme extends NvViewTheme_1.NvViewTheme {
    /*! \if ENGLISH
     *
     *  \brief Stroke color
     *  \else
     *
     *  \brief 描边颜色
     *  \endif
    */
    selectedClipBorderColor;
    /*! \if ENGLISH
     *
     *  \brief Left and right handle icon
     *  \else
     *
     *  \brief 左右把手图标
     *  \endif
    */
    leftHandleImage;
    rightHandleImage;
    /*! \if ENGLISH
     *
     *  \brief Timeline color
     *  \else
     *
     *  \brief 时间轴颜色
     *  \endif
    */
    timeTrackColor;
    /*! \if ENGLISH
     *
     *  \brief Text style
     *  \else
     *
     *  \brief 文本样式
     *  \endif
    */
    durationLabel;
}
exports.NvVideoTrackEditViewTheme = NvVideoTrackEditViewTheme;
