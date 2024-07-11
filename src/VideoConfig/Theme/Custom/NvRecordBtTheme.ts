import { NvViewTheme } from "../ThemeElement/NvViewTheme";

/*! \if ENGLISH
 *
 *  \brief Capture record button theme
 *  \else
 *
 *  \brief 拍摄按钮主题
 *  \endif
*/
export class NvRecordBtTheme extends NvViewTheme {

/*! \if ENGLISH
 *
 *  \brief Capture record button color
 *  \else
 *
 *  \brief 拍摄按钮颜色
 *  \endif
*/
    normalColor?: string;

/*! \if ENGLISH
 *
 *  \brief Capture record button  progress bar color
 *  \else
 *
 *  \brief 拍摄按钮颜色进度条颜色
 *  \endif
*/
    minimumTrackTintColor?: string;

/*! \if ENGLISH
 *
 *  \brief Capture record button  progress bar color when highlighted
 *  \else
 *
 *  \brief 拍摄按钮颜色进度条高亮颜色
 *  \endif
*/
    maximumTrackTintColor?: string;

/*! \if ENGLISH
 *
 *  \brief Capture button start recording icon
 *  \else
 *
 *  \brief 拍摄按钮开始录制图标
 *  \endif
*/
    playImageName?: string;

/*! \if ENGLISH
 *
 *  \brief Capture button stop recording icon
 *  \else
 *
 *  \brief 拍摄按钮停止录制图标
 *  \endif
*/
    pauseImageName?: string;

/*! \if ENGLISH
 *
 *  \brief Capture button story icon
 *  \else
 *  
 *  \brief 拍摄按钮快拍图标
 *  \endif
*/
    smartImageName?: string;

}