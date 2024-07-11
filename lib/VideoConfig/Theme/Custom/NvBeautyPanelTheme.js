"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NvBeautyPanelTheme = void 0;
const NvViewTheme_1 = require("../ThemeElement/NvViewTheme");
/*! \if ENGLISH
 *
 *  \brief Beauty panel and Beauty makeup panel are shared Configuration item
 *  \else
 *
 *  \brief 美颜面板和美妆面板配置项
 *  \endif
*/
class NvBeautyPanelTheme extends NvViewTheme_1.NvViewTheme {
    /*! \if ENGLISH
     *
     *  \brief cornerRadius
     *  \else
     *
     *  \brief 圆角
     *  \endif
    */
    cornerRadius;
    /*! \if ENGLISH
     *
     *  \brief Panel background color
     *  \else
     *
     *  \brief 面板背景色
     *  \endif
    */
    contentBackgroundColor;
    /*! \if ENGLISH
     *
     *  \brief Top panel top line
     *  \else
     *
     *  \brief 面板顶部线
     *  \endif
    */
    lineTheme;
    /*! \if ENGLISH
     *
     *  \brief Underline the panel categories
     *  \else
     *
     *  \brief 面板分类的下划线
     *  \endif
    */
    cellUnderlineColor;
    /*! \if ENGLISH
     *
     *  \brief Underline the panel categories hidden
     *  \else
     *
     *  \brief 面板分类的下划线隐藏
     *  \endif
    */
    cellUnderlineHidden;
    /*! \if ENGLISH
     *
     *  \brief First stage slide
     *  \else
     *
     *  \brief 一级滑杆
     *  \endif
    */
    sliderLevel1Theme;
    /*! \if ENGLISH
     *
     *  \brief Secondary slide bar, only used to Oiliness
     *  \else
     *
     *  \brief 二级滑杆，只有去油光用到
     *  \endif
    */
    sliderLevel2Theme;
    /*! \if ENGLISH
     *
     *  \brief First stage slide title
     *  \else
     *
     *  \brief 一级滑杆标题
     *  \endif
    */
    labelLevel1Theme;
    /*! \if ENGLISH
     *
     *  \brief Secondary slide bar title, only used to Oiliness
     *  \else
     *
     *  \brief 二级滑杆标题，只有去油光用到
     *  \endif
    */
    labelLevel2Theme;
    /*! \if ENGLISH
     *
     *  \brief Beauty panel under the switch button, turn on the state of color
     *  \else
     *
     *  \brief 美颜面板下的开关按钮，打开状态下的颜色
     *  \endif
    */
    switchOnTintColor;
    /*! \if ENGLISH
     *
     *  \brief Beauty panel under the switch button, turn off the state of the color
     *  \else
     *
     *  \brief 美颜面板下的开关按钮，关闭状态下的颜色
     *  \endif
    */
    switchNormalTintColor;
    /*! \if ENGLISH
     *
     *  \brief Beauty panel under the switch button color
     *  \else
     *
     *  \brief 美颜面板下的开关按钮的颜色
     *  \endif
    */
    switchThumbTintColor;
    /*! \if ENGLISH
     *
     *  \brief No effect icon for beauty makeup
     *  \else
     *
     *  \brief 美妆的无效果图标
     *  \endif
    */
    originalImage;
    /*! \if ENGLISH
     *
     *  \brief An array of optional colors for adjustable makeup
     *  \warning The array holds the string @"#243BFF"
     *  \else
     *
     *  \brief 美妆可调单妆的可选颜色数组
     *  \warning 数组存放的是此类字符串@"#243BFF"
     *  \endif
    */
    selectorColorArray;
    /*! \if ENGLISH
     *
     *  \brief Under makeup (makeup and filters) panel
     *  \else
     *
     *  \brief 美妆妆容下的（妆容和滤镜）面板
     *  \endif
    */
    makeupFilterViewTheme;
    /*! \if ENGLISH
     *
     *  \brief Under makeup (makeup and filters) panel
     *  Makeup button
     *  \else
     *
     *  \brief 美妆妆容下的（妆容和滤镜）面板
     *  妆容按钮
     *  \endif
    */
    makeupBtnTheme;
    /*! \if ENGLISH
     *
     *  \brief Under makeup (makeup and filters) panel
     *  Filter button
     *  \else
     *
     *  \brief 美妆妆容下的（妆容和滤镜）面板
     *  滤镜按钮
     *  \endif
    */
    filterBtnTheme;
    /*! \if ENGLISH
     *
     *  \brief The triangle icon in the beauty palette
     *  \else
     *
     *  \brief 美妆调色面板的小三角图标
     *  \endif
    */
    selectorImageViewTheme;
}
exports.NvBeautyPanelTheme = NvBeautyPanelTheme;
