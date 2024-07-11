"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NvDualConfig = exports.NvDualType = void 0;
/*! \if ENGLISH
 *
 *  \brief Dual type
 *  \else
 *
 *  \brief 合拍样式
 *  \endif
*/
var NvDualType;
(function (NvDualType) {
    NvDualType["leftRight"] = "left_right";
    NvDualType["topDown"] = "top_down";
    NvDualType["leftRect"] = "left_rect";
    NvDualType["leftCircle"] = "left_circle";
    NvDualType["topCircle"] = "top_circle";
})(NvDualType || (exports.NvDualType = NvDualType = {}));
;
/*! \if ENGLISH
 *
 *  \brief PIP Configuration item
 *  \else
 *
 *  \brief 合拍配置项
 *  \endif
*/
class NvDualConfig {
    /*! \if ENGLISH
     *
     *  \brief The ratio of the small map to the left border and the width of the base map
     *  \else
     *
     *  \brief 小图距离 左边边界和底图宽度的比例
     *  \endif
    */
    left = 17.0 / 375.0;
    /*! \if ENGLISH
     *
     *  \brief The ratio of the small map to the height of the upper boundary and the bottom map
     *  \else
     *
     *  \brief 小图距离 上边边界和底图高度的比例
     *  \endif
    */
    top = 18.0 / 666.67;
    /*! \if ENGLISH
     *
     *  \brief The ratio between the width of the short edge and the width of the base
     *  \else
     *
     *  \brief 小图 短边和底图宽度的比例
     *  \endif
    */
    limitWidth = 153.5 / 375.0;
    /*! \if ENGLISH
     *
     *  \brief PIP with default style
     *  \else
     *
     *  \brief 合拍默认样式
     *  \endif
    */
    defaultType = NvDualType.leftRight;
    /*! \if ENGLISH
     *
     *  \brief Supported styles (in no order)
     *  Refer to NvDualType
     *  \else
     *
     *  \brief 支持的样式（没有顺序）
     *  参考NvDualType
     *  \endif
    */
    supportedTypes;
    /*! \if ENGLISH
     *
     *  \brief Automatically disables the soundtrack
     *  \else
     *
     *  \brief 自动禁掉原声
     *  \endif
    */
    autoDisablesMic = false;
    /*! \if ENGLISH
     *
     *  \brief Acoustic silence
     *  \else
     *
     *  \brief 默认关掉原声
     *  \endif
    */
    muteOriginal = true;
    constructor() {
        this.supportedTypes = [NvDualType.leftRight, NvDualType.topDown, NvDualType.leftRect, NvDualType.leftCircle, NvDualType.topCircle];
    }
}
exports.NvDualConfig = NvDualConfig;
