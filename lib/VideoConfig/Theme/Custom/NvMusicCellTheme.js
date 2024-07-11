"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NvMusicCellTheme = void 0;
const NvCellTheme_1 = require("../ThemeElement/NvCellTheme");
/*! \if ENGLISH
 *
 *  \brief MusicCellTheme Configuration item
 *  \else
 *
 *  \brief MusicCellTheme配置项
 *  \endif
*/
class NvMusicCellTheme extends NvCellTheme_1.NvCellTheme {
    /*! \if ENGLISH
     *
     *  \brief Image styles and default images
     *  \else
     *
     *  \brief 图片样式及默认图
     *  \endif
    */
    imageView;
    /*! \if ENGLISH
     *
     *  \brief Crop button style
     *  \else
     *
     *  \brief 裁剪按钮样式
     *  \endif
    */
    cutBt;
    /*! \if ENGLISH
     *
     *  \brief Description text style
     *  \else
     *
     *  \brief 描述文本样式
     *  \endif
    */
    desLable;
    /*! \if ENGLISH
     *
     *  \brief Time text style
     *  \else
     *
     *  \brief 时间文本样式
     *  \endif
    */
    timeLable;
    /*! \if ENGLISH
     *
     *  \brief Download the gif file path
     *  \else
     *
     *  \brief 下载中gif文件路径
     *  \endif
    */
    loadingAnimatedFilePath;
}
exports.NvMusicCellTheme = NvMusicCellTheme;
