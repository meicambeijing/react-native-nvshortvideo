"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NvCaptureConfig = exports.NvCaptureBottomMenuItem = exports.NvCaptureMenuItem = exports.NvTimePair = void 0;
const NvCompileConfig_1 = require("./NvCompileConfig");
/*! \if ENGLISH
 *
 *  \brief Duration(in microseconds)
 *  \else
 *
 *  \brief 时长(单位毫秒)
 *  \endif
*/
class NvTimePair {
    /*! \if ENGLISH
     *
     *  \brief min Duration(in microseconds)
     *  \else
     *
     *  \brief 最小时长(单位毫秒)
     *  \endif
    */
    minDuration;
    /*! \if ENGLISH
     *
     *  \brief max Duration(in microseconds)
     *  \else
     *
     *  \brief 最大时长(单位毫秒)
     *  \endif
    */
    maxDuration;
    constructor(minDuration, maxDuration) {
        this.minDuration = minDuration;
        this.maxDuration = maxDuration;
    }
}
exports.NvTimePair = NvTimePair;
/*! \if ENGLISH
 *
 *  \brief Right-hand menu
 *  \else
 *
 *  \brief 右侧菜单
 *  \endif
*/
var NvCaptureMenuItem;
(function (NvCaptureMenuItem) {
    NvCaptureMenuItem["device"] = "capture_menu_device";
    NvCaptureMenuItem["speed"] = "capture_menu_speed";
    NvCaptureMenuItem["timer"] = "capture_menu_timer";
    NvCaptureMenuItem["beauty"] = "capture_menu_beauty";
    NvCaptureMenuItem["makeup"] = "capture_menu_makeup";
    NvCaptureMenuItem["prop"] = "capture_menu_prop";
    NvCaptureMenuItem["flashlight"] = "capture_menu_flashlight";
    NvCaptureMenuItem["filter"] = "capture_menu_filter";
    NvCaptureMenuItem["original"] = "capture_menu_original";
    NvCaptureMenuItem["dualtype"] = "capture_menu_dual_type";
})(NvCaptureMenuItem || (exports.NvCaptureMenuItem = NvCaptureMenuItem = {}));
/*! \if ENGLISH
 *
 *  \brief Bottom menu
 *  \else
 *
 *  \brief 底部菜单
 *  \endif
*/
var NvCaptureBottomMenuItem;
(function (NvCaptureBottomMenuItem) {
    NvCaptureBottomMenuItem["image"] = "capture_bottom_menu_image";
    NvCaptureBottomMenuItem["video"] = "capture_bottom_menu_video";
    NvCaptureBottomMenuItem["smart"] = "capture_bottom_menu_smart";
    NvCaptureBottomMenuItem["template"] = "capture_bottom_menu_template"; //!< \if ENGLISH Template \else 模版 \endif
})(NvCaptureBottomMenuItem || (exports.NvCaptureBottomMenuItem = NvCaptureBottomMenuItem = {}));
/*! \if ENGLISH
 *
 *  \brief Shooting configuration
 *  \else
 *
 *  \brief 拍摄配置项
 *  \endif
*/
class NvCaptureConfig {
    /*! \if ENGLISH
     *
     *  \brief Custom UI collection
     *  \else
     *
     *  \brief 自定义UI合集
     *  \endif
    */
    customTheme;
    /*! \if ENGLISH
     *
     *  \brief Shoot right menu (array ordered)
     *  Refer to NvCaptureMenuItem
     *  \else
     *
     *  \brief 拍摄右侧菜单 （数组有序）
     *  参考NvCaptureMenuItem
     *  \endif
    */
    captureMenuItems;
    /*! \if ENGLISH
     *
     *  \brief Shoot the bottom menu (array ordered, templates placed last)
     *  Refer to NvCaptureBottomMenuItem
     *  \else
     *
     *  \brief 拍摄底部菜单 （数组有序，模版放最后）
     *  参考NvCaptureBottomMenuItem
     *  \endif
    */
    captureBottomMenuItems;
    /*! \if ENGLISH
     *
     *  \brief Default front camera
     *  0==Rear camera，1==Front camera
     *  \else
     *
     *  \brief 默认前置摄像头
     *  0==后置，1==前置
     *  \endif
    */
    captureDeviceIndex = 1;
    /*! \if ENGLISH
     *
     *  \brief Shooting resolution
     *  Refer to NvVideoPreviewResolution
     *  \else
     *
     *  \brief 拍摄分辨率
     *  参考NvVideoPreviewResolution
     *  \endif
    */
    resolution = NvCompileConfig_1.NvVideoPreviewResolution.NvVideoPreviewResolution_1080;
    /*! \if ENGLISH
     *
     *  \brief Ignore device rotation
     *  \else
     *
     *  \brief 忽略设备旋转
     *  \endif
    */
    ignoreVideoRotation = true;
    /*! \if ENGLISH
     *
     *  \brief Photo duration Settings (milliseconds)
     *  \else
     *
     *  \brief 拍照时长设置（毫秒）
     *  \endif
    */
    imageDuration = 3 * 1000;
    /*! \if ENGLISH
     *
     *  \brief Taken photos, before entering editing, whether to save to album
     *  false==Don't save，true==save
     *  \else
     *
     *  \brief 拍摄的照片，进入编辑之前，是否保存到相册
     *  false==不保存，true==保存
     *  \endif
    */
    autoSavePhotograph = false;
    /*! \if ENGLISH
     *
     *  \brief
     *  \else
     *
     *  \brief 录制时长设置
     *  参考NvTimePair
     *  \endif
    */
    timeRanges;
    /*! \if ENGLISH
     *
     *  \brief smart setting
     *  Refer to NvTimePair
     *  \else
     *
     *  \brief 快拍设置
     *  参考NvTimePair
     *  \endif
    */
    smartTimeRange;
    /*! \if ENGLISH
     *
     *  \brief Beauty configuration item
     *  Refer to NvBeautyConfig
     *  \else
     *
     *  \brief 美颜配置项
     *  参考NvBeautyConfig
     *  \endif
    */
    beautyConfig;
    /*! \if ENGLISH
     *
     *  \brief Click right menu (orderly)
     *  \else
     *
     *  \brief 合拍右侧菜单（有序）
     *  \endif
    */
    dualMenuItems;
    /*! \if ENGLISH
     *
     *  \brief PIP setting
     *  Refer to NvDualConfig
     *  \else
     *
     *  \brief 合拍设置
     *  参考NvDualConfig
     *  \endif
    */
    dualConfig;
    /*! \if ENGLISH
     *
     *  \brief Filter default value
     *  Default 0.8
     *  \else
     *
     *  \brief 滤镜默认值
     *  默认0.8
     *  \endif
    */
    filterDefaultValue = 0.8;
    /*! \if ENGLISH
     *  \brief The Capture shows the album button
     *  \else
     *  \brief 拍摄页显示相册按钮
     *  \endif
    */
    enableCaptureAlbum;
    /*! \if ENGLISH
     *
     *  \brief Automatically disables the soundtrack
     *  \else
     *
     *  \brief 自动禁掉原声
     *  \endif
    */
    autoDisablesMic = false;
    constructor() {
        this.captureMenuItems = [NvCaptureMenuItem.device,
            NvCaptureMenuItem.speed,
            NvCaptureMenuItem.timer,
            NvCaptureMenuItem.beauty,
            NvCaptureMenuItem.makeup,
            NvCaptureMenuItem.prop,
            NvCaptureMenuItem.flashlight,
            NvCaptureMenuItem.filter,
            NvCaptureMenuItem.original];
        this.dualMenuItems = [NvCaptureMenuItem.device,
            NvCaptureMenuItem.speed,
            NvCaptureMenuItem.timer,
            NvCaptureMenuItem.beauty,
            NvCaptureMenuItem.makeup,
            NvCaptureMenuItem.prop,
            NvCaptureMenuItem.flashlight,
            NvCaptureMenuItem.filter,
            NvCaptureMenuItem.original,
            NvCaptureMenuItem.dualtype];
        this.captureBottomMenuItems = [NvCaptureBottomMenuItem.image,
            NvCaptureBottomMenuItem.video,
            NvCaptureBottomMenuItem.smart,
            NvCaptureBottomMenuItem.template];
        this.timeRanges = [new NvTimePair(3 * 1000, 15 * 1000), new NvTimePair(3 * 1000, 60 * 1000)];
        this.smartTimeRange = new NvTimePair(0, 15 * 1000);
    }
}
exports.NvCaptureConfig = NvCaptureConfig;
