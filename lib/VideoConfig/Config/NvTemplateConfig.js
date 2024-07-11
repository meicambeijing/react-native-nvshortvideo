"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NvTemplateConfig = void 0;
/*! \if ENGLISH
 *
 *  \brief Template configuration
 *  \else
 *
 *  \brief 模版配置
 *  \endif
*/
class NvTemplateConfig {
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
     *  \brief Adaptive template、autoCut Maximum number of optional fragments
     *  \else
     *
     *  \brief 自适应模版、一键成片最大可选片段数量
     *  \endif
    */
    maxSelectCount = 50;
    /*! \if ENGLISH
     *
     *  \brief Whether to include AutoCut
     *  \else
     *
     *  \brief 是否有一键成片功能
     *  \endif
    */
    useAutoCut = true;
}
exports.NvTemplateConfig = NvTemplateConfig;
