import { NvButtonTheme } from "../ThemeElement/NvButtonTheme";
import { NvCellTheme } from "../ThemeElement/NvCellTheme";
import { NvImageViewTheme } from "../ThemeElement/NvImageViewTheme";
/*! \if ENGLISH
 *
 *  \brief MusicSearchCellTheme Configuration item
 *  \else
 *
 *  \brief MusicSearchCellTheme配置项
 *  \endif
*/
export declare class NvMusicSearchCellTheme extends NvCellTheme {
    /*! \if ENGLISH
     *
     *  \brief Left icon style
     *  \else
     *
     *  \brief 左侧图标样式
     *  \endif
    */
    imageView?: NvImageViewTheme;
    /*! \if ENGLISH
     *
     *  \brief Remove button style
     *  \else
     *
     *  \brief 删除按钮样式
     *  \endif
    */
    deleteBt?: NvButtonTheme;
}
