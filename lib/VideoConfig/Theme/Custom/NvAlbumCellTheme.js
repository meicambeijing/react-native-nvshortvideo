"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NvAlbumCellTheme = void 0;
const NvCellTheme_1 = require("../ThemeElement/NvCellTheme");
/*! \if ENGLISH
 *
 *  \brief AlbumCellTheme Configuration item
 *  \else
 *
 *  \brief AlbumCellTheme配置项
 *  \endif
*/
class NvAlbumCellTheme extends NvCellTheme_1.NvCellTheme {
    /*! \if ENGLISH
     *
     *  \brief The icon in the lower right corner of the album material cell
     *  \else
     *
     *  \brief 相册素材cell的右下角图标
     *  \endif
    */
    imageView;
    /*! \if ENGLISH
     *
     *  \brief no Select the icon in the upper left corner of the album material cell
     *  \else
     *
     *  \brief 相册素材cell的左上角未选中图标
     *  \endif
    */
    normalImage;
    /*! \if ENGLISH
     *
     *  \brief Select the icon in the upper left corner of the album material cell
     *  \else
     *
     *  \brief 相册素材cell的左上角选中图标
     *  \endif
    */
    selectImage;
}
exports.NvAlbumCellTheme = NvAlbumCellTheme;
