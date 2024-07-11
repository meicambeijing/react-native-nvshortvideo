"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NvRecordBtTheme = void 0;
const NvViewTheme_1 = require("../ThemeElement/NvViewTheme");
/*! \if ENGLISH
 *
 *  \brief Capture record button theme
 *  \else
 *
 *  \brief 拍摄按钮主题
 *  \endif
*/
class NvRecordBtTheme extends NvViewTheme_1.NvViewTheme {
    /*! \if ENGLISH
     *
     *  \brief Capture record button color
     *  \else
     *
     *  \brief 拍摄按钮颜色
     *  \endif
    */
    normalColor;
    /*! \if ENGLISH
     *
     *  \brief Capture record button  progress bar color
     *  \else
     *
     *  \brief 拍摄按钮颜色进度条颜色
     *  \endif
    */
    minimumTrackTintColor;
    /*! \if ENGLISH
     *
     *  \brief Capture record button  progress bar color when highlighted
     *  \else
     *
     *  \brief 拍摄按钮颜色进度条高亮颜色
     *  \endif
    */
    maximumTrackTintColor;
    /*! \if ENGLISH
     *
     *  \brief Capture button start recording icon
     *  \else
     *
     *  \brief 拍摄按钮开始录制图标
     *  \endif
    */
    playImageName;
    /*! \if ENGLISH
     *
     *  \brief Capture button stop recording icon
     *  \else
     *
     *  \brief 拍摄按钮停止录制图标
     *  \endif
    */
    pauseImageName;
    /*! \if ENGLISH
     *
     *  \brief Capture button story icon
     *  \else
     *
     *  \brief 拍摄按钮快拍图标
     *  \endif
    */
    smartImageName;
}
exports.NvRecordBtTheme = NvRecordBtTheme;
