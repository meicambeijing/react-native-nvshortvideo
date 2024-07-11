"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NvMaterialCellTheme = void 0;
const NvCellTheme_1 = require("../ThemeElement/NvCellTheme");
/*! \if ENGLISH
 *
 *  \brief MaterialCellTheme Configuration item
 *  \else
 *
 *  \brief MaterialCellTheme配置项
 *  \endif
*/
class NvMaterialCellTheme extends NvCellTheme_1.NvCellTheme {
    /*! \if ENGLISH
     *
     *  \brief Picture style
     *  \else
     *
     *  \brief 图片样式
     *  \endif
    */
    imageView;
    /*! \if ENGLISH
     *
     *  \brief Download button icon
     *  \else
     *
     *  \brief 下载按钮图标
     *  \endif
    */
    downloadImageName;
    /*! \if ENGLISH
     *
     *  \brief Download animation file
     *  \else
     *
     *  \brief 下载动画文件
     *  \endif
    */
    loadingAnimatedFilePath;
}
exports.NvMaterialCellTheme = NvMaterialCellTheme;
