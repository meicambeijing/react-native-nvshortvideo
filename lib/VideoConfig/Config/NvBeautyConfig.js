"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NvBeautyConfig = exports.NvBeautyAdjust = exports.NvBeautyMicroShape = exports.NvBeautyShape = exports.NvBeautyEffect = exports.NvBeautyCategorical = void 0;
/*! \if ENGLISH
 *  \brief Beauty classification
 *  \else
 *  \brief 美颜分类
 *  \endif
*/
var NvBeautyCategorical;
(function (NvBeautyCategorical) {
    NvBeautyCategorical["Skin"] = "NvBeauty";
    NvBeautyCategorical["Shape"] = "Shape";
    NvBeautyCategorical["MicroShape"] = "MicroShape";
    NvBeautyCategorical["Adjust"] = "Adjust";
})(NvBeautyCategorical || (exports.NvBeautyCategorical = NvBeautyCategorical = {}));
/*! \if ENGLISH
 *  \brief Beauty Adjustment item
 *  \else
 *  \brief 美肤调节项
 *  \endif
*/
var NvBeautyEffect;
(function (NvBeautyEffect) {
    NvBeautyEffect["Standard"] = "Standard";
    NvBeautyEffect["Shiny"] = "Shiny";
    NvBeautyEffect["Natural"] = "Natural";
    NvBeautyEffect["Luxurious"] = "Luxurious";
    NvBeautyEffect["CoolWhite"] = "CoolWhite";
    NvBeautyEffect["PinkyWhite"] = "PinkyWhite";
    NvBeautyEffect["WarmWhite"] = "WarmWhite";
    NvBeautyEffect["Tanning"] = "Tanning";
    NvBeautyEffect["WhiteA"] = "WhiteA";
    NvBeautyEffect["WhiteB"] = "WhiteB";
    NvBeautyEffect["Oiliness"] = "Oiliness";
    NvBeautyEffect["Rosy"] = "Rosy";
})(NvBeautyEffect || (exports.NvBeautyEffect = NvBeautyEffect = {}));
/*! \if ENGLISH
 *  \brief Shape Adjustment item
 *  \else
 *  \brief 美型调节项
 *  \endif
*/
var NvBeautyShape;
(function (NvBeautyShape) {
    NvBeautyShape["Narrow"] = "Narrow";
    NvBeautyShape["LowerJaw"] = "Lower_Jaw";
    NvBeautyShape["Lessen"] = "Lessen";
    NvBeautyShape["Forehead"] = "Forehead";
    NvBeautyShape["Chin"] = "Chin";
    NvBeautyShape["EyesSize"] = "Eyes_Size";
    NvBeautyShape["EyesConer"] = "Eyes_Coner";
    NvBeautyShape["NoseAla"] = "Nose_Ala";
    NvBeautyShape["NoseLength"] = "Nose_Length";
    NvBeautyShape["LipHeight"] = "Lip_Height";
    NvBeautyShape["LipWidth"] = "Lip_Width";
})(NvBeautyShape || (exports.NvBeautyShape = NvBeautyShape = {}));
/*! \if ENGLISH
 *  \brief MicroShape Adjustment item
 *  \else
 *  \brief 微整形调节项
 *  \endif
*/
var NvBeautyMicroShape;
(function (NvBeautyMicroShape) {
    NvBeautyMicroShape["Head"] = "Head";
    NvBeautyMicroShape["EyesBrighten"] = "Eyes_Brighten";
    NvBeautyMicroShape["NasolabialFolds"] = "Nasolabial_Folds";
    NvBeautyMicroShape["BlackCircle"] = "Black_Circle";
    NvBeautyMicroShape["WhitenTeeth"] = "Whiten_Teeth";
    NvBeautyMicroShape["CheekBones"] = "Cheek_bones";
    NvBeautyMicroShape["ChinLength"] = "Chin_Length";
    NvBeautyMicroShape["Temple"] = "Temple";
    NvBeautyMicroShape["EyesConer"] = "Eyes_Coner";
    NvBeautyMicroShape["EyesDistance"] = "Eyes_Distance";
    NvBeautyMicroShape["Philtrum"] = "Philtrum";
    NvBeautyMicroShape["NoseRoot"] = "Nose_Root";
    NvBeautyMicroShape["EyebrowSize"] = "Eyebrow_Size";
    NvBeautyMicroShape["EyebrowHeight"] = "Eyebrow_Height";
    NvBeautyMicroShape["EyebrowDistance"] = "Eyebrow_Distance";
    NvBeautyMicroShape["EyebrowSlant"] = "Eyebrow_Slant";
    NvBeautyMicroShape["LowerEyelid"] = "Lower_Eyelid";
    NvBeautyMicroShape["EyesLength"] = "Eyes_Length";
    NvBeautyMicroShape["EyesEnlarge"] = "Eyes_Enlarge";
    NvBeautyMicroShape["EyesHeight"] = "Eyes_Height";
    NvBeautyMicroShape["NoseTip"] = "Nose_Tip";
})(NvBeautyMicroShape || (exports.NvBeautyMicroShape = NvBeautyMicroShape = {}));
/*! \if ENGLISH
 *  \brief Adjust Functional  Adjustment item
 *  \else
 *  \brief 调节功能调节项
 *  \endif
*/
var NvBeautyAdjust;
(function (NvBeautyAdjust) {
    NvBeautyAdjust["Tone"] = "Tone";
    NvBeautyAdjust["Firm"] = "Firm";
    NvBeautyAdjust["Articulation"] = "Articulation";
})(NvBeautyAdjust || (exports.NvBeautyAdjust = NvBeautyAdjust = {}));
/*! \if ENGLISH
 *
 *  \brief Beauty config
 *  \else
 *
 *  \brief 美颜配置项
 *  \endif
*/
class NvBeautyConfig {
    /*! \if ENGLISH
     *
     *  \brief Beauty functional
     *  Refer to NvBeautyCategorical
     *  \else
     *
     *  \brief 美颜功能
     *  参考NvBeautyCategorical
     *  \endif
    */
    categoricalArray;
    /*! \if ENGLISH
     *
     *  \brief Beauty functional
     *  Refer to NvBeautyEffect
     *  \else
     *
     *  \brief 美肤功能
     *  参考NvBeautyEffect
     *  \endif
    */
    beautyEffectArray;
    /*! \if ENGLISH
     *
     *  \brief Shape functional
     *  Refer to NvBeautyShape
     *  \else
     *
     *  \brief 美型功能
     *  参考NvBeautyShape
     *  \endif
    */
    beautyShapeArray;
    /*! \if ENGLISH
     *
     *  \brief MicroShape functional
     *  Refer to NvBeautyMicroShape
     *  \else
     *
     *  \brief 微整形功能
     *  参考NvBeautyMicroShape
     *  \endif
    */
    beautyMicroShapeArray;
    /*! \if ENGLISH
     *
     *  \brief Adjust functional
     *  Refer to NvBeautyAdjust
     *  \else
     *
     *  \brief 调节功能
     *  参考NvBeautyAdjust
     *  \endif
    */
    beautyAdjustArray;
}
exports.NvBeautyConfig = NvBeautyConfig;
