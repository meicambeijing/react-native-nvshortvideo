"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NvBubbleConfig = exports.NvBubbleBgBlurStyle = void 0;
/*! \if ENGLISH
 *
 *  \brief Bubble background blur style
 *  \else
 *
 *  \brief 气泡背景模糊样式
 *  \endif
*/
var NvBubbleBgBlurStyle;
(function (NvBubbleBgBlurStyle) {
    NvBubbleBgBlurStyle[NvBubbleBgBlurStyle["none"] = 0] = "none";
    NvBubbleBgBlurStyle[NvBubbleBgBlurStyle["light"] = 1] = "light";
    NvBubbleBgBlurStyle[NvBubbleBgBlurStyle["dark"] = 2] = "dark"; //!< \if Dark \else 黑色模糊 \endif
})(NvBubbleBgBlurStyle || (exports.NvBubbleBgBlurStyle = NvBubbleBgBlurStyle = {}));
/*! \if ENGLISH
 *
 *  \brief Bubble configuration
 *  \else
 *
 *  \brief 气泡配置
 *  \endif
*/
class NvBubbleConfig {
    /*! \if ENGLISH
     *
     *  \brief Edit icon
     *  \else
     *
     *  \brief 编辑图标
     *  \endif
    */
    editImageName;
    /*! \if ENGLISH
     *
     *  \brief Duration icon
     *  \else
     *
     *  \brief 时长图标
     *  \endif
    */
    durationImageName;
    /*! \if ENGLISH
     *
     *  \brief
     *  \else
     *
     *  \brief 文字样式
     *  \endif
    */
    titleTheme;
    /*! \if ENGLISH
     *
     *  \brief Text style
     *  \else
     *
     *  \brief 背景色（无模糊时的）
     *  \endif
    */
    backgroundColor;
    /*! \if ENGLISH
     *
     *  \brief Background mode
     *  \else
     *
     *  \brief 背景模式
     *  \endif
    */
    backgroundBlurStyle = NvBubbleBgBlurStyle.dark;
}
exports.NvBubbleConfig = NvBubbleConfig;
