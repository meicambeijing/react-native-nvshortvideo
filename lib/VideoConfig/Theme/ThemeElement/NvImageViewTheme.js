"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NvImageViewTheme = void 0;
const NvViewTheme_1 = require("./NvViewTheme");
/*! \if ENGLISH
 *
 *  \brief ImageView Configuration item
 *  \else
 *
 *  \brief ImageView配置项
 *  \endif
*/
class NvImageViewTheme extends NvViewTheme_1.NvViewTheme {
    /*! \if ENGLISH
     *
     *  \brief Image name
     *  \else
     *
     *  \brief 图片名称
     *  \endif
    */
    imageName;
    /*! \if ENGLISH
     *
     *  \brief animation file
     *  \else
     *
     *  \brief 动画文件
     *  \endif
    */
    animatedFilePath;
    constructor() {
        super();
    }
}
exports.NvImageViewTheme = NvImageViewTheme;
