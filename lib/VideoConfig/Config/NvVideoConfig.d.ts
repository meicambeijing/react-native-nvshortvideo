import { NvAlbumConfig } from "./NvAlbumConfig";
import { NvCaptureConfig } from "./NvCaptureConfig";
import { NvEditConfig } from "./NvEditConfig";
import { NvTemplateConfig } from "./NvTemplateConfig";
import { NvModelConfig } from "./NvModelConfig";
import { NvCompileConfig } from "./NvCompileConfig";
/*! \if ENGLISH
 *
 *  \brief Project configuration item
 *  \else
 *
 *  \brief 工程配置项
 *  \endif
*/
export declare class NvVideoConfig {
    /*! \if ENGLISH
     *
     *  \brief primary Color
     *  \else
     *
     *  \brief 主色调
     *  \endif
    */
    primaryColor: string;
    /*! \if ENGLISH
     *
     *  \brief backgroundColor
     *  \else
     *
     *  \brief 背景色
     *  \endif
    */
    backgroundColor: string;
    /*! \if ENGLISH
     *
     *  \brief panel Color
     *  \else
     *
     *  \brief 面板色
     *  \endif
    */
    panelBackgroundColor: string;
    /*! \if ENGLISH
     *
     *  \brief text Color
     *  \else
     *
     *  \brief 文字颜色
     *  \endif
    */
    textColor: string;
    /*! \if ENGLISH
     *
     *  \brief secondary Text Color
     *  \else
     *
     *  \brief 二级文字颜色
     *  \endif
    */
    secondaryTextColor: string;
    /*! \if ENGLISH
     *
     *  \brief show the itunes music list
     *  \else
     *
     *  \brief 显示itunes 音乐列表
     *  \endif
    */
    enableLocalMusic: boolean;
    /*! \if ENGLISH
     *
     *  \brief album
     *  \else
     *
     *  \brief 相册
     *  \endif
    */
    albumConfig: NvAlbumConfig;
    /*! \if ENGLISH
     *
     *  \brief Capture
     *  \else
     *
     *  \brief 拍摄
     *  \endif
    */
    captureConfig: NvCaptureConfig;
    /*! \if ENGLISH
     *
     *  \brief edit
     *  \else
     *
     *  \brief 编辑
     *  \endif
    */
    editConfig: NvEditConfig;
    /*! \if ENGLISH
     *
     *  \brief template
     *  \else
     *
     *  \brief 模版
     *  \endif
    */
    templateConfig: NvTemplateConfig;
    /*! \if ENGLISH
     *
     *  \brief compile
     *  \else
     *
     *  \brief 合成
     *  \endif
    */
    compileConfig: NvCompileConfig;
    /*! \if ENGLISH
     *
     *  \brief Apply the required model file
     *  \else
     *
     *  \brief 应用所需的模型文件
     *  \endif
    */
    modelConfig: NvModelConfig;
}
