"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NvVideoConfig = void 0;
const NvAlbumConfig_1 = require("./NvAlbumConfig");
const NvCaptureConfig_1 = require("./NvCaptureConfig");
const NvEditConfig_1 = require("./NvEditConfig");
const NvTemplateConfig_1 = require("./NvTemplateConfig");
const NvModelConfig_1 = require("./NvModelConfig");
const NvCompileConfig_1 = require("./NvCompileConfig");
/*! \if ENGLISH
 *
 *  \brief Project configuration item
 *  \else
 *
 *  \brief 工程配置项
 *  \endif
*/
class NvVideoConfig {
    /*! \if ENGLISH
     *
     *  \brief primary Color
     *  \else
     *
     *  \brief 主色调
     *  \endif
    */
    primaryColor = "#FC3E5A";
    /*! \if ENGLISH
     *
     *  \brief backgroundColor
     *  \else
     *
     *  \brief 背景色
     *  \endif
    */
    backgroundColor = "#000000";
    /*! \if ENGLISH
     *
     *  \brief panel Color
     *  \else
     *
     *  \brief 面板色
     *  \endif
    */
    panelBackgroundColor = "#1C1C1C";
    /*! \if ENGLISH
     *
     *  \brief text Color
     *  \else
     *
     *  \brief 文字颜色
     *  \endif
    */
    textColor = "#FFFFFF";
    /*! \if ENGLISH
     *
     *  \brief secondary Text Color
     *  \else
     *
     *  \brief 二级文字颜色
     *  \endif
    */
    secondaryTextColor = "#6C6C77";
    /*! \if ENGLISH
     *
     *  \brief show the itunes music list
     *  \else
     *
     *  \brief 显示itunes 音乐列表
     *  \endif
    */
    enableLocalMusic = true;
    /*! \if ENGLISH
     *
     *  \brief album
     *  \else
     *
     *  \brief 相册
     *  \endif
    */
    albumConfig = new NvAlbumConfig_1.NvAlbumConfig();
    /*! \if ENGLISH
     *
     *  \brief Capture
     *  \else
     *
     *  \brief 拍摄
     *  \endif
    */
    captureConfig = new NvCaptureConfig_1.NvCaptureConfig();
    /*! \if ENGLISH
     *
     *  \brief edit
     *  \else
     *
     *  \brief 编辑
     *  \endif
    */
    editConfig = new NvEditConfig_1.NvEditConfig();
    /*! \if ENGLISH
     *
     *  \brief template
     *  \else
     *
     *  \brief 模版
     *  \endif
    */
    templateConfig = new NvTemplateConfig_1.NvTemplateConfig();
    /*! \if ENGLISH
     *
     *  \brief compile
     *  \else
     *
     *  \brief 合成
     *  \endif
    */
    compileConfig = new NvCompileConfig_1.NvCompileConfig();
    /*! \if ENGLISH
     *
     *  \brief Apply the required model file
     *  \else
     *
     *  \brief 应用所需的模型文件
     *  \endif
    */
    modelConfig = new NvModelConfig_1.NvModelConfig();
}
exports.NvVideoConfig = NvVideoConfig;
