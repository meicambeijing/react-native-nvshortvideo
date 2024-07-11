

/*! \if ENGLISH
 *  \brief Beauty classification
 *  \else
 *  \brief 美颜分类
 *  \endif
*/
export enum NvBeautyCategorical {
    Skin = "NvBeauty",
    Shape = "Shape",
    MicroShape = "MicroShape",
    Adjust = "Adjust"
}

/*! \if ENGLISH
 *  \brief Beauty Adjustment item
 *  \else
 *  \brief 美肤调节项
 *  \endif
*/
export enum NvBeautyEffect {
    Standard = "Standard",
    Shiny = "Shiny",
    Natural = "Natural",
    Luxurious = "Luxurious",
    CoolWhite = "CoolWhite",
    PinkyWhite = "PinkyWhite",
    WarmWhite = "WarmWhite",
    Tanning = "Tanning",
    WhiteA = "WhiteA",
    WhiteB = "WhiteB",
    Oiliness = "Oiliness",
    Rosy = "Rosy"
}

/*! \if ENGLISH
 *  \brief Shape Adjustment item
 *  \else
 *  \brief 美型调节项
 *  \endif
*/
export enum NvBeautyShape {
    Narrow = "Narrow",
    LowerJaw = "Lower_Jaw",
    Lessen = "Lessen",
    Forehead = "Forehead",
    Chin = "Chin",
    EyesSize = "Eyes_Size",
    EyesConer = "Eyes_Coner",
    NoseAla = "Nose_Ala",
    NoseLength = "Nose_Length",
    LipHeight = "Lip_Height",
    LipWidth = "Lip_Width"
}

/*! \if ENGLISH
 *  \brief MicroShape Adjustment item
 *  \else
 *  \brief 微整形调节项
 *  \endif
*/
export enum NvBeautyMicroShape {
    Head = "Head",
    EyesBrighten = "Eyes_Brighten",
    NasolabialFolds = "Nasolabial_Folds",
    BlackCircle = "Black_Circle",
    WhitenTeeth = "Whiten_Teeth",
    CheekBones = "Cheek_bones",
    ChinLength = "Chin_Length",
    Temple = "Temple",
    EyesConer = "Eyes_Coner",
    EyesDistance = "Eyes_Distance",
    Philtrum = "Philtrum",
    NoseRoot = "Nose_Root",
    EyebrowSize = "Eyebrow_Size",
    EyebrowHeight = "Eyebrow_Height",
    EyebrowDistance = "Eyebrow_Distance",
    EyebrowSlant = "Eyebrow_Slant",
    LowerEyelid = "Lower_Eyelid",
    EyesLength = "Eyes_Length",
    EyesEnlarge = "Eyes_Enlarge",
    EyesHeight = "Eyes_Height",
    NoseTip = "Nose_Tip"
}

/*! \if ENGLISH
 *  \brief Adjust Functional  Adjustment item
 *  \else
 *  \brief 调节功能调节项
 *  \endif
*/
export enum NvBeautyAdjust {
    Tone = "Tone",
    Firm = "Firm",
    Articulation = "Articulation"
}

/*! \if ENGLISH
 *
 *  \brief Beauty config
 *  \else
 *
 *  \brief 美颜配置项
 *  \endif
*/
export class NvBeautyConfig {

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
    categoricalArray?: NvBeautyCategorical[];

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
    beautyEffectArray?: NvBeautyEffect[];

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
    beautyShapeArray?: NvBeautyShape[];

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
    beautyMicroShapeArray?: NvBeautyMicroShape[];

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
    beautyAdjustArray?: NvBeautyAdjust[];
}