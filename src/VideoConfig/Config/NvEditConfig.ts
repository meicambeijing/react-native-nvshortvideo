import { NvViewTheme } from "../Theme/ThemeElement/NvViewTheme";
import { NvBubbleConfig } from "./NvBubbleConfig";
import { NvVideoPreviewResolution } from "./NvCompileConfig";
import { NvThemeElementKey } from "../Theme/NvThemeElementKey";

/*! \if ENGLISH
 *
 *  \brief Right-hand menu
 *  \else
 *
 *  \brief 右侧菜单
 *  \endif
*/
export enum NvEditMenuItem {
    release = "edit_menu_release",      //!< \if ENGLISH Release \else 发布 \endif
    download = "edit_menu_download",    //!< \if ENGLISH Save \else 保存 \endif
    edit = "edit_menu_edit",            //!< \if ENGLISH Edit \else 裁剪 \endif
    text = "edit_menu_text",            //!< \if ENGLISH Text \else 文字 \endif
    sticker = "edit_menu_sticker",      //!< \if ENGLISH Sticker \else 贴纸 \endif
    effect = "edit_menu_effect",        //!< \if ENGLISH Effect \else 特效 \endif
    filter = "edit_menu_filter",        //!< \if ENGLISH Filter \else 滤镜 \endif
    caption = "edit_menu_caption",      //!< \if ENGLISH Caption \else 字幕 \endif
    audio = "edit_menu_audio",          //!< \if ENGLISH Audio \else 音效 \endif
    record = "edit_menu_record"         //!< \if ENGLISH Record \else 录音 \endif
}

export enum NvEditMode {
    NvEditMode9v16 = "9v16",
    NvEditMode16v9 = "16v9",
    NvEditMode3v4 = "3v4",
    NvEditMode4v3 = "4v3",
    NvEditMode1v1 = "1v1",
    NvEditMode18v9 = "18v9",
    NvEditMode9v18 = "9v18",
    NvEditMode8v9 = "8v9",
    NvEditMode9v8 = "9v8",
}

/*! \if ENGLISH
 *
 *  \brief Frame scale calculation method
 *  \else
 *
 *  \brief 编辑画幅比例计算方式
 *  \endif
*/
export enum NvEditModeSource {
    fixed,      //!< \if ENGLISH Fixed \else 画幅比例固定 \endif
    firstAsset  //!< \if ENGLISH The scale is determined by the first material \else 画幅比例由第一个素材确定 \endif
}

export enum NvImageCaptionStyle {
    none = "none",
    bg = "bg",
    bgAlpha = "bgAlpha",
    outline = "outline"
};


/*! \if ENGLISH
 *
 *  \brief Edit configuration
 *  \else
 *
 *  \brief 编辑配置
 *  \endif
*/
export class NvEditConfig {

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
 *  \brief Right side menu (orderly)
 *  \else
 *
 *  \brief 右侧菜单 （有序）
 *  \endif
*/
    editMenuItems: NvEditMenuItem[];

/*! \if ENGLISH
 *
 *  \brief Edit preview resolution
 *  Refer to NvVideoPreviewResolution
 *  \else
 *
 *  \brief 编辑预览分辨率
 *  参考NvVideoPreviewResolution
 *  \endif
*/
    resolution: NvVideoPreviewResolution = NvVideoPreviewResolution.NvVideoPreviewResolution_1080;

/*! \if ENGLISH
 *
 *  \brief Preview fps
 *  Default 25
 *  \else
 *
 *  \brief 预览fps
 *  默认25
 *  \endif
*/
    fps: number = 25;

/*! \if ENGLISH
 *
 *  \brief Minimum effect duration (milliseconds)
 *  Default 500ms
 *  \else
 *
 *  \brief 最小特效时长（毫秒）
 *  默认500ms
 *  \endif
*/
    minEffectDuration: number = 500;

/*! \if ENGLISH
 *
 *  \brief Minimum recording duration (ms)
 *  Default1000ms
 *  \else
 *
 *  \brief 最小录音时长（毫秒）
 *  默认1000ms
 *  \endif
*/
    minAudioDuration: number = 500;

/*! \if ENGLISH
 *
 *  \brief Default title color
 *  Default white
 *  \else
 *
 *  \brief 默认字幕颜色
 *  默认白色
 *  \endif
*/
    captionColor: string = "#FFFFFF";

/*! \if ENGLISH
 *
 *  \brief Caption color list (ordered)
 *  \else
 *
 *  \brief 字幕颜色列表（有序）
 *  \endif
*/
    captionColorList: string[];

/*! \if ENGLISH
 *
 *  \brief Supported title styles (out of order)
 *  \else
 *
 *  \brief 支持的字幕样式（无序）
 *  \endif
*/
    supportedCaptionStyles: NvImageCaptionStyle[];

/*! \if ENGLISH
 *
 *  \brief Scale mode
 *  Refer to NvEditModeSource
 *  \else
 *
 *  \brief 画幅比例模式
 *  参考NvEditModeSource
 *  \endif
*/
    editModeSource: NvEditModeSource = NvEditModeSource.firstAsset; 

/*! \if ENGLISH
 *
 *  \brief Fixed frame scale
 *  \else
 *
 *  \brief 固定画幅比例
 *  \endif
*/
    editMode: NvEditMode = NvEditMode.NvEditMode9v16;
    
/*! \if ENGLISH
 *
 *  \brief Supported frame ratio
 *  Refer to NvEditMode
 *  \else
 *
 *  \brief 支持的画幅比例
 *  参考NvEditMode
 *  \endif
*/
    supportedEditModes: NvEditMode[];

/*! \if ENGLISH
 *
 *  \brief Bubble configuration
 *  \else
 *
 *  \brief 气泡配置
 *  \endif
*/
    bubbleConfig?: NvBubbleConfig;

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
 *
 *  \brief Maximum volume, [0-8]
 *  Default 4
 *  \else
 *
 *  \brief 最大音量， [0-8]
 *  默认 4
 *  \endif
*/
maxVolume: number = 4;

/*! \if ENGLISH
 *
 *  \brief disable time effect
 *  \else
 *
 *  \brief 禁用时间特效 (反复、慢动作)
 *  \endif
*/
disableTimeEffect: boolean = false;

    constructor() {
        this.editMenuItems = [NvEditMenuItem.release,
        NvEditMenuItem.download,
        NvEditMenuItem.edit,
        NvEditMenuItem.text,
        NvEditMenuItem.sticker,
        NvEditMenuItem.effect,
        NvEditMenuItem.filter,
        NvEditMenuItem.caption,
        NvEditMenuItem.audio,
        NvEditMenuItem.record];

        this.captionColorList = [
            "#FFFFFF", "#000000", "#0099F6", "#50C23B",
            "#FFC840", "#FF8500", "#FF3350", "#E40069",
            "#B200C0", "#F8808A", "#FEBF7C", "#262626",
            "#363636", "#555555", "#737373", "#989898",
            "#B2B2B2", "#C7C7C7", "#DBDBDB", "#F0F0F0"];

        this.supportedCaptionStyles = [NvImageCaptionStyle.none,
        NvImageCaptionStyle.bg,
        NvImageCaptionStyle.bgAlpha,
        NvImageCaptionStyle.outline];

        this.supportedEditModes = [NvEditMode.NvEditMode9v16,
        NvEditMode.NvEditMode16v9,
        NvEditMode.NvEditMode3v4,
        NvEditMode.NvEditMode4v3,
        NvEditMode.NvEditMode1v1,
        NvEditMode.NvEditMode18v9,
        NvEditMode.NvEditMode9v18,
        NvEditMode.NvEditMode8v9,
        NvEditMode.NvEditMode9v8];

    }
}

