import { NvViewTheme } from "../Theme/ThemeElement/NvViewTheme";
import { NvVideoPreviewResolution } from "./NvCompileConfig";
import { NvBeautyConfig } from "./NvBeautyConfig";
import { NvThemeElementKey } from "../Theme/NvThemeElementKey";
import { NvDualConfig } from "./NvDualConfig";

/*! \if ENGLISH
 *
 *  \brief Duration(in microseconds)
 *  \else
 *
 *  \brief 时长(单位毫秒)
 *  \endif
*/
export class NvTimePair {

/*! \if ENGLISH
 *
 *  \brief min Duration(in microseconds)
 *  \else
 *
 *  \brief 最小时长(单位毫秒)
 *  \endif
*/
    minDuration: number;

/*! \if ENGLISH
 *
 *  \brief max Duration(in microseconds)
 *  \else
 *
 *  \brief 最大时长(单位毫秒)
 *  \endif
*/
    maxDuration: number;

    constructor(minDuration: number, maxDuration: number) {
        this.minDuration = minDuration;
        this.maxDuration = maxDuration;
    }

}

/*! \if ENGLISH
 *
 *  \brief Right-hand menu
 *  \else
 *
 *  \brief 右侧菜单
 *  \endif
*/
export enum NvCaptureMenuItem {
    device = "capture_menu_device",         //!< \if ENGLISH Flip camera \else 翻转摄像头\endif
    speed = "capture_menu_speed",           //!< \if ENGLISH Speed \else 快慢速\endif
    timer = "capture_menu_timer",           //!< \if ENGLISH Countdown \else 倒计时 \endif
    beauty = "capture_menu_beauty",         //!< \if ENGLISH Beauty \else 美颜 \endif
    makeup = "capture_menu_makeup",         //!< \if ENGLISH Makeup \else 美妆 \endif
    prop = "capture_menu_prop",             //!< \if ENGLISH Face prop \else 人脸道具 \endif
    flashlight = "capture_menu_flashlight", //!< \if ENGLISH Flashlight \else 闪光灯 \endif
    filter = "capture_menu_filter",         //!< \if ENGLISH Filter \else 滤镜 \endif
    original = "capture_menu_original",     //!< \if ENGLISH Original sound \else 原声 \endif
    dualtype = "capture_menu_dual_type",    //!< \if ENGLISH Dual type \else 合拍样式 \endif
}

/*! \if ENGLISH
 *
 *  \brief Bottom menu
 *  \else
 *
 *  \brief 底部菜单
 *  \endif
*/
export enum NvCaptureBottomMenuItem {
    image = "capture_bottom_menu_image",        //!< \if ENGLISH Photo \else 拍照 \endif
    video = "capture_bottom_menu_video",        //!< \if ENGLISH Record \else 录制 \endif
    smart = "capture_bottom_menu_smart",        //!< \if ENGLISH Smart record \else 快拍 \endif
    template = "capture_bottom_menu_template"   //!< \if ENGLISH Template \else 模版 \endif
}

/*! \if ENGLISH
 *
 *  \brief Shooting configuration
 *  \else
 *
 *  \brief 拍摄配置项
 *  \endif
*/
export class NvCaptureConfig {

/*! \if ENGLISH
 *
 *  \brief Custom UI collection
 *  \else
 *
 *  \brief 自定义UI合集
 *  \endif
*/
    customTheme?: Map<NvThemeElementKey, NvViewTheme>;

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
    captureMenuItems: NvCaptureMenuItem[];

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
    captureBottomMenuItems: NvCaptureBottomMenuItem[];

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
    captureDeviceIndex: number = 1;

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
    resolution: NvVideoPreviewResolution = NvVideoPreviewResolution.NvVideoPreviewResolution_1080;

/*! \if ENGLISH
 *
 *  \brief Ignore device rotation
 *  \else
 *
 *  \brief 忽略设备旋转
 *  \endif
*/
    ignoreVideoRotation: boolean = true;

/*! \if ENGLISH
 *
 *  \brief Photo duration Settings (milliseconds)
 *  \else
 *
 *  \brief 拍照时长设置（毫秒）
 *  \endif
*/
    imageDuration: number = 3 * 1000;

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
    autoSavePhotograph: boolean = false;

/*! \if ENGLISH
 *
 *  \brief
 *  \else
 *
 *  \brief 录制时长设置
 *  参考NvTimePair
 *  \endif
*/
    timeRanges: NvTimePair[];

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
    smartTimeRange: NvTimePair;

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
    beautyConfig?: NvBeautyConfig;

/*! \if ENGLISH
 *
 *  \brief Click right menu (orderly)
 *  \else
 *
 *  \brief 合拍右侧菜单（有序）
 *  \endif
*/
    dualMenuItems: NvCaptureMenuItem[];

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
    dualConfig?: NvDualConfig;
    
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
    filterDefaultValue: number = 0.8;

/*! \if ENGLISH
 *  \brief The Capture shows the album button
 *  \else
 *  \brief 拍摄页显示相册按钮
 *  \endif
*/
    enableCaptureAlbum?: boolean;

/*! \if ENGLISH
 *
 *  \brief Automatically disables the soundtrack
 *  \else
 *
 *  \brief 自动禁掉原声
 *  \endif
*/
    autoDisablesMic: boolean = false;

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