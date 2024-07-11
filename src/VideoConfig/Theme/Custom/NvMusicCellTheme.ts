import { NvButtonTheme } from "../ThemeElement/NvButtonTheme";
import { NvCellTheme } from "../ThemeElement/NvCellTheme";
import { NvLabelTheme } from "../ThemeElement/NvLabelTheme";
import { NvImageViewTheme } from "../ThemeElement/NvImageViewTheme";

/*! \if ENGLISH
 *
 *  \brief MusicCellTheme Configuration item
 *  \else
 *
 *  \brief MusicCellTheme配置项
 *  \endif
*/
export class NvMusicCellTheme extends NvCellTheme {

/*! \if ENGLISH
 *
 *  \brief Image styles and default images
 *  \else
 *
 *  \brief 图片样式及默认图
 *  \endif
*/
    imageView?: NvImageViewTheme;

/*! \if ENGLISH
 *
 *  \brief Crop button style
 *  \else
 *
 *  \brief 裁剪按钮样式
 *  \endif
*/
    cutBt?: NvButtonTheme;

/*! \if ENGLISH
 *
 *  \brief Description text style
 *  \else
 *
 *  \brief 描述文本样式
 *  \endif
*/
    desLable?: NvLabelTheme;

/*! \if ENGLISH
 *
 *  \brief Time text style
 *  \else
 *
 *  \brief 时间文本样式
 *  \endif
*/
    timeLable?: NvLabelTheme;

/*! \if ENGLISH
 *
 *  \brief Download the gif file path
 *  \else
 *
 *  \brief 下载中gif文件路径
 *  \endif
*/
    loadingAnimatedFilePath?: string;

}