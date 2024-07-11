import { NvCellTheme } from "../ThemeElement/NvCellTheme";
import { NvImageViewTheme } from "../ThemeElement/NvImageViewTheme";

/*! \if ENGLISH
 *
 *  \brief AlbumCellTheme Configuration item
 *  \else
 *
 *  \brief AlbumCellTheme配置项
 *  \endif
*/
export class NvAlbumCellTheme extends NvCellTheme {

/*! \if ENGLISH
 *
 *  \brief The icon in the lower right corner of the album material cell
 *  \else
 *
 *  \brief 相册素材cell的右下角图标
 *  \endif
*/
    imageView?: NvImageViewTheme;

/*! \if ENGLISH
 *
 *  \brief no Select the icon in the upper left corner of the album material cell
 *  \else
 *
 *  \brief 相册素材cell的左上角未选中图标
 *  \endif
*/
    normalImage?: string;

/*! \if ENGLISH
 *
 *  \brief Select the icon in the upper left corner of the album material cell
 *  \else
 *  
 *  \brief 相册素材cell的左上角选中图标
 *  \endif
*/
    selectImage?: string;
}