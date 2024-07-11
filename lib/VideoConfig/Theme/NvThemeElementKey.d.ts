export declare enum NvThemeElementKey {
    /*! \if ENGLISH
     *  \brief Capture view
     *  \else
     *  \brief 拍摄页面
     *  \endif
    */
    NvCaptureViewKey = "capture_capture_view",
    NvCaptureCloseBtKey = "capture_capture_close_bt",
    NvCaptureNextBtKey = "capture_capture_next_bt",
    NvCaptureAlbumBtKey = "capture_capture_album_bt",
    NvCaptureDeleteBtKey = "capture_capture_delete_bt",
    NvCaptureLeftMenuDevBtKey = "capture_left_menu_dev_bt",
    NvCaptureLeftMenuSpeedBtKey = "capture_left_menu_speed_bt",
    NvCaptureLeftMenuFlashBtKey = "capture_left_menu_flash_bt",
    NvCaptureLeftMenuBeautyBtKey = "capture_left_menu_beauty_bt",
    NvCaptureLeftMenuMakeupBtKey = "capture_left_menu_makeup_bt",
    NvCaptureLeftMenuTimerBtKey = "capture_left_menu_timer_bt",
    NvCaptureLeftMenuPropsBtKey = "capture_left_menu_props_bt",
    NvCaptureLeftMenuFilterBtKey = "capture_left_menu_filter_bt",
    NvCaptureLeftMenuOriginalBtKey = "capture_left_menu_original_bt",
    NvCaptureLeftMenuDualTypeBtKey = "capture_left_menu_dualtype_bt",
    NvCaptureDurationPointView = "capture_duration_point_view",
    NvCaptureDurationLabelKey = "capture_duration_label",
    /*! \if ENGLISH
     *  \brief Capture record button,   object:  NvRecordBtTheme
     *  \else
     *  \brief 拍摄按钮， 类型：NvRecordBtTheme
     *  \endif
    */
    NvCaptureRecordBtSetKey = "capture_capture_record_bt_set",
    NvCaptureBottomMenuCellKey = "capture_bottom_menu_cell",
    NvCaptureBottomMenuCellSelectedKey = "capture_bottom_menu_cell_selected",
    NvCaptureTopMenuCellKey = "capture_top_menu_cell",
    NvCaptureTopMenuCellSelectedKey = "capture_top_menu_cell_selected",
    NvCaptureMusicMenuViewKey = "capture_music_menu_view",
    NvCaptureMusicMenuImageViewKey = "capture_music_menu_imageview",
    NvCaptureMusicMenuTextLabelKey = "capture_music_menu_text_label",
    NvCaptureMusicMenuDeleteBtKey = "capture_music_menu_delete_bt",
    NvCaptureMusicMenuLineViewKey = "capture_music_menu_line_view",
    NvCaptureMusicPanelViewKey = "capture_music_panel_view",
    NvCaptureMusicSearchPanelViewKey = "capture_music_search_panel_view",
    NvCaptureMusicCutPanelViewKey = "capture_music_cut_panel_view",
    NvCaptureMusicPanelLineViewKey = "capture_music_panel_line_view",
    NvCaptureMusicCutPanelLineViewKey = "capture_music_cut_panel_line_view",
    NvCaptureMusicCutPanelTitleLabelKey = "capture_music_cut_panel_title_label",
    NvCapturePanelBackBtKey = "capture_panel_back_bt",
    NvCaptureMusicPanelCaptegoryCellKey = "capture_music_category_cell",
    NvCaptureMusicPanelCaptegoryLineViewKey = "capture_music_category_line_view",
    NvCaptureMusicPanelSearchBtKey = "capture_music_pannel_search_bt",
    NvCaptureMusicCellKey = "capture_music_cell",
    NvCaptureMusicCellSelectedKey = "capture_music_cell_selected",
    NvCaptureMusicHistoryCellKey = "capture_music_search_history_cell",
    NvCaptureMusicSearchTextFieldKey = "capture_music_search_textfield",
    NvCaptureMusicSearchEmptyLabelKey = "capture_music_search_empty_label",
    NvCaptureMusicSearchLineViewKey = "capture_music_search_line_view",
    NvCaptureMusicCutViewSetKey = "capture_music_cut_view_set",
    NvCaptureDualTypeModeBtKey = "capture_dual_type_mode_bt",
    NvCaptureDualTypeExchangeBtKey = "capture_dual_type_exchange_bt",
    NvCaptureDualTypePanelLineViewKey = "capture_dual_type_panel_line_view",
    NvCaptureDualTypeTitleLabelKey = "capture_dual_type_title_label",
    NvCaptureDualTypeLeftRightBtKey = "capture_dual_type_left_right_bt",
    NvCaptureDualTypeTopDownBtKey = "capture_dual_type_top_down_bt",
    NvCaptureDualTypeLeftRectBtKey = "capture_dual_type_left_rect_bt",
    NvCaptureDualTypeLeftCircleBtKey = "capture_dual_type_left_circle_bt",
    NvCaptureDualTypeTopCircleBtKey = "capture_dual_type_top_circle_bt",
    NvCaptureFilterPanelViewKey = "capture_filter_panel_view",
    NvCaptureFilterPanelDoneBtKey = "capture_filter_panel_done_bt",
    NvCaptureFilterPanelEmptyBtKey = "capture_filter_panel_empty_bt",
    NvCaptureFilterPanelCategoryCellKey = "capture_filter_panel_category_cell",
    NvCaptureFilterPanelCategoryCellSelectedKey = "capture_filter_panel_category_cell_selected",
    NvCaptureFilterPanelMaterialCellKey = "capture_filter_panel_material_cell",
    NvCaptureFilterPanelMaterialCellSelectedKey = "capture_filter_panel_material_cell_selected",
    NvCaptureFilterPanelIntensitySliderKey = "capture_filter_panel_intensity_slider",
    NvCaptureFilterPanelIntensityLabelKey = "capture_filter_panel_intensity_label",
    NvCaptureFilterPanelCategoryLineViewKey = "capture_filter_panel_category_line_view",
    NvCapturePropPanelViewKey = "capture_prop_panel_view",
    NvCapturePropPanelEmptyBtKey = "capture_prop_panel_empty_bt",
    NvCapturePropPanelCategoryCellKey = "capture_prop_panel_category_cell",
    NvCapturePropPanelCategoryCellSelectedKey = "capture_prop_panel_category_cell_selected",
    NvCapturePropPanelMaterialCellKey = "capture_prop_panel_material_cell",
    NvCapturePropPanelMaterialCellSelectedKey = "capture_prop_panel_material_cell_selected",
    NvCapturePropPanelCategoryLineViewKey = "capture_prop_panel_category_line_view",
    NvCaptureBeautyPanelViewSetKey = "capture_beautyPanel_view_set",
    NvCaptureBeautyPanelCategoryViewKey = "capture_beautyPanel_Category_view",
    NvCaptureBeautyPanelCategoryCellKey = "capture_beautyPanel_Category_cell",
    NvCaptureBeautyPanelCategoryCellSelectedKey = "capture_beautyPanel_Category_cell_selected",
    NvCaptureBeautyPanelMaterialViewKey = "capture_beautyPanel_Material_view",
    NvCaptureBeautyPanelMaterialCellKey = "capture_beautyPanel_Material_cell",
    NvCaptureBeautyPanelMaterialCellSelectedKey = "capture_beautyPanel_Material_cell_selected",
    NvCaptureMakeupPanelViewSetKey = "capture_makeupPanel_view_set",
    NvCaptureMakeupPanelCategoryViewKey = "capture_makeupPanel_Category_view",
    NvCaptureMakeupPanelCategoryCellKey = "capture_makeupPanel_Category_cell",
    NvCaptureMakeupPanelCategoryCellSelectedKey = "capture_makeupPanel_Category_cell_selected",
    NvCaptureMakeupPanelMaterialViewKey = "capture_makeupPanel_Material_view",
    NvCaptureMakeupPanelMaterialCellKey = "capture_makeupPanel_Material_cell",
    NvCaptureMakeupPanelMaterialCellSelectedKey = "capture_makeupPanel_Material_cell_selected",
    NvCapturePrivilegeCloseBtKey = "capture_privilege_close_bt",
    NvCapturePrivilegeLocalBtKey = "capture_privilege_local_bt",
    NvCapturePrivilegeTitleLableKey = "capture_privilege_title_label",
    NvCapturePrivilegeDeseLabelKey = "capture_privilege_dese_label",
    NvCapturePrivilegeCameraBtKey = "capture_privilege_camera_bt",
    NvCapturePrivilegeAudioBtKey = "capture_privilege_audio_bt",
    NvCapturePrivilegePhotoBtKey = "capture_privilege_photo_bt",
    NvCapturePrivilegeViewKey = "capture_privilege_view",
    /*! \if ENGLISH
     *  \brief Capture alert
     *  \else
     *  \brief 拍摄Alert
     *  \endif
    */
    NvCaptureAlertViewKey = "capture_alert_view",
    NvCaptureAlertTitleLabelKey = "capture_alert_title_label",
    NvCaptureAlertMessageLabelKey = "capture_alert_message_label",
    NvCaptureAlertConfirmBtKey = "capture_alert_confirm_bt",
    NvCaptureAlertCancelBtKey = "capture_alert_cancel_bt",
    /*! \if ENGLISH
     *  \brief Edit view
     *  \else
     *  \brief 编辑页面
     *  \endif
    */
    NvEditVCViewKey = "edit_edit_vc_view",
    /*! \if ENGLISH
     *  \brief Edit view back button
     *  \else
     *  \brief 编辑页面返回按钮
     *  \endif
    */
    NvEditVCBackBtKey = "edit_edit_vc_back_bt",
    /*! \if ENGLISH
     *  \brief Edit view left menu
     *  \else
     *  \brief 编辑页面左侧菜单
     *  \endif
    */
    NvEditLeftMenuReleaseBtKey = "edit_left_menu_release_bt",
    NvEditLeftMenuDownloadBtKey = "edit_left_menu_download_bt",
    NvEditLeftMenuEditBtKey = "edit_left_menu_edit_bt",
    NvEditLeftMenuEffectBtKey = "edit_left_menu_effect_bt",
    NvEditLeftMenuAudioEffectBtKey = "edit_left_menu_audioeffect_bt",
    NvEditLeftMenuStickerBtKey = "edit_left_menu_sticker_bt",
    NvEditLeftMenuCaptionBtKey = "edit_left_menu_caption_bt",
    NvEditLeftMenuRecognitionCaptionBtKey = "edit_left_menu_recognition_caption_bt",
    NvEditLeftMenuFilterBtKey = "edit_left_menu_filter_bt",
    /*! \if ENGLISH
     *  \brief Edit view top music display view
     *  \else
     *  \brief 编辑顶部音乐展示区域
     *  \endif
    */
    NvEditMusicMenuViewKey = "edit_music_menu_view",
    /*! \if ENGLISH
     *  \brief Edit view top music display view: music icon
     *  \else
     *  \brief 编辑顶部音乐展示区域: 音乐图标
     *  \endif
    */
    NvEditMusicMenuImageViewKey = "edit_music_menu_imageview",
    /*! \if ENGLISH
     *  \brief Edit view top music display view: music name label
     *  \else
     *  \brief 编辑顶部音乐展示区域: 音乐名称
     *  \endif
    */
    NvEditMusicMenuTextLabelKey = "edit_music_menu_text_label",
    /*! \if ENGLISH
     *  \brief Edit view top music display view: delete button
     *  \else
     *  \brief 编辑顶部音乐展示区域: 删除按钮
     *  \endif
    */
    NvEditMusicMenuDeleteBtKey = "edit_music_menu_delete_bt",
    /*! \if ENGLISH
     *  \brief Edit view top music display view: line
     *  \else
     *  \brief 编辑顶部音乐展示区域: 分割线
     *  \endif
    */
    NvEditMusicMenuLineViewKey = "edit_music_menu_line_view",
    /*! \if ENGLISH
     *  \brief Edit view music panel
     *  \else
     *  \brief 编辑音乐面板
     *  \endif
    */
    NvEditMusicPanelViewKey = "edit_music_panel_view",
    /*! \if ENGLISH
     *  \brief Edit view music search panel
     *  \else
     *  \brief 编辑音乐搜素面板
     *  \endif
    */
    NvEditMusicSearchPanelViewKey = "edit_music_search_panel_view",
    /*! \if ENGLISH
     *  \brief Edit view music crop panel
     *  \else
     *  \brief 编辑音乐裁剪面板
     *  \endif
    */
    NvEditMusicCutPanelViewKey = "edit_music_cut_panel_view",
    /*! \if ENGLISH
     *  \brief Edit view volume panel
     *  \else
     *  \brief 编辑音量面板
     *  \endif
    */
    NvEditVolumPanelViewKey = "edit_music_volume_panel_view",
    /*! \if ENGLISH
     *  \brief Edit view effect panel
     *  \else
     *  \brief 编辑特效面板
     *  \endif
    */
    NvEditAudioEffectPanelViewKey = "edit_audio_effect_panel_view",
    NvEditRecordPanelViewKey = "edit_audio_record_panel_view",
    NvEditEffectDurationPanelViewKey = "edit_effect_duration_panel_view",
    NvEditPanelBackBtKey = "edit_panel_back_bt",
    NvEditMusicPanelLineViewKey = "edit_music_panel_line_view",
    NvEditMusicCutPanelLineViewKey = "edit_music_cut_panel_line_view",
    NvEditVolumPanelLineViewKey = "edit_music_volume_panel_line_view",
    NvEditAudioEffectPanelLineViewKey = "edit_audio_effect_panel_line_view",
    NvEditRecordPanelLineViewKey = "edit_audio_record_panel_line_view",
    NvEditEffectDurationPanelLineViewKey = "edit_effect_duration_panel_line_view",
    NvEditMusicCutPanelTitleLabelKey = "edit_music_cut_panel_title_label",
    NvEditEffectDurationPanelTitleLabelKey = "edit_effect_duration_panel_title_label",
    NvEditMusicPanelCaptegoryCellKey = "edit_music_category_cell",
    NvEditMusicPanelCaptegoryLineViewKey = "edit_music_category_line_view",
    NvEditMusicPanelSearchBtKey = "edit_music_pannel_search_bt",
    NvEditMusicPanelCancelBtKey = "edit_music_pannel_cancel_bt",
    NvEditMusicPanelOriginalBtKey = "edit_music_pannel_original_bt",
    NvEditMusicPanelSoundBtKey = "edit_music_pannel_sound_bt",
    NvEditMusicPanelVolumeBtKey = "edit_music_pannel_volume_bt",
    NvEditMusicCellKey = "edit_music_cell",
    NvEditMusicCellSelectedKey = "edit_music_cell_selected",
    NvEditMusicHistoryCellKey = "edit_music_search_history_cell",
    NvEditMusicSearchTextFieldKey = "edit_music_search_textfield",
    NvEditMusicSearchEmptyLabelKey = "edit_music_search_empty_label",
    NvEditMusicSearchLineViewKey = "edit_music_search_line_view",
    NvEditMusicCutViewSetKey = "edit_music_cut_view_set",
    NvEditFilterPanelViewKey = "edit_filter_panel_view",
    NvEditFilterPanelDoneBtKey = "edit_filter_panel_done_bt",
    NvEditFilterPanelEmptyBtKey = "edit_filter_panel_empty_bt",
    NvEditFilterPanelCategoryCellKey = "edit_filter_panel_category_cell",
    NvEditFilterPanelCategoryCellSelectedKey = "edit_filter_panel_category_cell_selected",
    NvEditFilterPanelMaterialCellKey = "edit_filter_panel_material_cell",
    NvEditFilterPanelMaterialCellSelectedKey = "edit_filter_panel_material_cell_selected",
    NvEditFilterPanelIntensitySliderKey = "edit_filter_panel_intensity_slider",
    NvEditFilterPanelIntensityLabelKey = "edit_filter_panel_intensity_label",
    NvEditFilterPanelCategoryLineViewKey = "edit_filter_panel_category_line_view",
    NvEditStickerPanelViewKey = "edit_sticker_panel_view",
    NvEditStickerPanelCategoryCellKey = "edit_sticker_panel_category_cell",
    NvEditStickerPanelCategoryCellSelectedKey = "edit_sticker_panel_category_cell_selected",
    NvEditStickerPanelMaterialCellKey = "edit_sticker_panel_material_cell",
    NvEditStickerPanelMaterialCellSelectedKey = "edit_sticker_panel_material_cell_selected",
    NvEditStickerPanelCategoryLineViewKey = "edit_sticker_panel_category_line_view",
    NvEditStickerPanelCategoryBottomLineViewKey = "edit_sticker_panel_category_bottom_line_view",
    NvEditEffectPanelViewKey = "edit_effect_panel_view",
    NvEditEffectPanelCategoryCellKey = "edit_effect_panel_category_cell",
    NvEditEffectPanelCategoryCellSelectedKey = "edit_effect_panel_category_cell_selected",
    NvEditEffectPanelMaterialCellKey = "edit_effect_panel_material_cell",
    NvEditEffectPanelMaterialCellSelectedKey = "edit_effect_panel_material_cell_selected",
    NvEditEffectPanelCategoryLineViewKey = "edit_effect_panel_category_line_view",
    NvEditEffectPanelCategoryBottomLineViewKey = "edit_effect_panel_category_bottom_line_view",
    NvEditEffectVCTrackViewSetKey = "edit_effect_vc_track_view_set",
    NvEditEffectVCRightiMenuViewKey = "edit_effect_vc_right_menu_view",
    NvEditEffectVCRightiMenuRevertBtKey = "edit_effect_vc_right_menu_revert_bt",
    NvEditEffectVCRightiMenuForwardBtKey = "edit_effect_vc_right_menu_forward_bt",
    NvEditEffectVCRightiMenuDeleteBtKey = "edit_effect_vc_right_menu_delete_bt",
    NvEditEffectVCRightiMenuLineViewKey = "edit_effect_vc_right_menu_line_view",
    NvEditEffectVCBackBtKey = "edit_effect_vc_back_bt",
    NvEditEffectVCDoneBtKey = "edit_effect_vc_done_bt",
    NvEditEffectVCPlayBtKey = "edit_effect_vc_play_bt",
    NvEditEffectVCViewKey = "edit_effect_vc_view",
    NvEditAudioFxVCBackBtKey = "edit_audiofx_vc_back_bt",
    NvEditAudioFxVCDoneBtKey = "edit_audiofx_vc_done_bt",
    NvEditAudioFxVCPlayBtKey = "edit_audiofx_vc_play_bt",
    NvEditAudioFxVCViewKey = "edit_audiofx_vc_view",
    NvEditAudioFxPanelAudioFxCellKey = "edit_audiofx_panel_audiofx_cell",
    NvEditAudioFxPanelAudioFxCellSelectedKey = "edit_audiofx_panel_audiofx_cell_selected",
    NvEditAudioFxPanelBottomVolumeBtKey = "edit_audiofx_panel_bottom_volume_bt",
    NvEditAudioFxPanelBottomRecordBtKey = "edit_audiofx_panel_bottom_record_bt",
    NvEditAudioFxPanelBottomLineViewKey = "edit_audiofx_panel_bottom_line_view",
    NvEditAudioFxPanelBottomViewKey = "edit_audiofx_panel_bottom_view",
    NvEditVolumePanelTopSliderTitleLabelKey = "edit_volume_panel_top_slider_title_label",
    NvEditVolumePanelTopSliderKey = "edit_volume_panel_top_slider",
    NvEditVolumePanelBottomSliderTitleLabelKey = "edit_volume_panel_bottom_slider_title_label",
    NvEditVolumePanelBottomSliderKey = "edit_volume_panel_bottom_slider",
    NvEditCaptionViewSetKey = "edit_caption_view_set",
    NvEditRecordPanelOriginalBtKey = "edit_record_panel_original_bt",
    NvEditRecordPanelRecordBtKey = "edit_record_panel_record_bt",
    NvEditRecordPanelDeleteBtKey = "edit_record_panel_delete_bt",
    NvEditRecordPanelSliderKnobViewKey = "edit_record_panel_sliderKnob_view",
    NvEditRecordPanelRecordLableKey = "edit_record_panel_record_lable",
    NvEditRecordPanelTimeLableKey = "edit_record_panel_time_lable",
    NvEditEffectTimeRangeViewSetKey = "edit_effect_time_range_view_set",
    NvEditCompilePanelViewKey = "edit_compile_panel_view",
    NvEditCompilePanelInfoLabelKey = "edit_compile_panel_info_label",
    NvEditCompilePanelBackBtKey = "edit_compile_panel_back_bt",
    NvEditCompilePanelProgressSliderKey = "edit_compile_panel_progress_slider",
    NvEditVideoTrackViewSetKey = "edit_pro_edit_video_track_view_set",
    NvProEditVCCenterLineViewKey = "edit_pro_edit_vc_center_line_view",
    NvProEditVCAddBtKey = "edit_pro_edit_vc_add_bt",
    NvProEditVCDeleteBtKey = "edit_pro_edit_vc_delete_bt",
    NvProEditVCBackBtKey = "edit_effect_vc_back_bt",
    NvProEditVCPlayBtKey = "edit_pro_edit_vc_play_bt",
    NvProEditVCViewKey = "edit_pro_edit_vc_view",
    NvEditRecognitionVcBackBtKey = "edit_recognition_vc_back_bt",
    NvEditRecognitionVcDoneBtKey = "edit_recognition_vc_done_bt",
    NvEditRecognitionVcPlayBtKey = "edit_recognition_vc_play_bt",
    NvEditRecognitionVcViewKey = "edit_recognition_vc_view",
    NvEditRecognitionWorkingViewKey = "edit_recognition_working_view",
    NvEditRecognitionWorkingViewProgressLabelKey = "edit_recognition_working_view_progress_label",
    NvEditRecognitionWorkingViewTipLabelKey = "edit_recognition_working_view_tip_label",
    NvEditRecognitionWorkingViewLoadingImageViewKey = "edit_recognition_working_view_loading_image_view",
    NvEditRecognitionWorkingViewCancelBtKey = "edit_recognition_working_view_cancel_bt",
    NvEditRecognitionWorkingViewErrorLabelKey = "edit_recognition_working_view_error_label",
    NvEditRecognitionWorkingViewErrorTipLabelKey = "edit_recognition_working_view_error_tip_label",
    NvEditRecognitionWorkingViewRetryBtKey = "edit_recognition_working_view_retry_bt",
    NvEditRecognitionWorkingViewExamineBtKey = "edit_recognition_working_view_examine_bt",
    NvEditRecognitionViewDeleteBtKey = "edit_recognition_view_delete_bt",
    NvEditRecognitionViewStyleBtKey = "edit_recognition_view_style_bt",
    NvEditRecognitionViewEditBtKey = "edit_recognition_view_edit_bt",
    NvEditRecognitionViewCellKey = "edit_recognition_view_cell",
    NvEditRecognitionViewCellSelectedKey = "edit_recognition_view_cell_selected",
    NvEditRecognitionCaptionPanelViewKey = "edit_recognition_caption_panel_view",
    NvEditRecognitionCaptionPanelTitleLabelKey = "edit_recognition_caption_panel_title_label",
    NvEditRecognitionViewPanelLineViewKey = "edit_recognition_view_panel_line_view",
    NvEditRecognitionStylePanelViewKey = "edit_recognition_style_panel_view",
    NvEditRecognitionStylePanelTitleLabelKey = "edit_recognition_style_panel_title_label",
    NvEditRecognitionStylePanelRightBtKey = "edit_recognition_style_panel_right_bt",
    NvEditRecognitionStylePanelLineViewKey = "edit_recognition_style_panel_line_view",
    NvEditRecognitionEditPanelViewKey = "edit_recognition_edit_panel_view",
    NvEditRecognitionEditPanelTitleLabelKey = "edit_recognition_edit_panel_title_label",
    NvEditRecognitionEditPanelRightBtKey = "edit_recognition_edit_panel_right_bt",
    NvEditRecognitionEditPanelLineViewKey = "edit_recognition_edit_panel_line_view",
    NvEditRecognitionEditCellKey = "edit_recognition_edit_cell",
    NvEditRecognitionEditCellSelectedKey = "edit_recognition_edit_cell_selected",
    /*! \if ENGLISH
     *  \brief
     *  \else
     *  \brief 封面
     *  \endif
    */
    NvEditCoverTopHeaderViewKey = "edit_cover_topHeader_view",
    NvEditCoverTopHeaderBackBtKey = "edit_cover_topHeader_back_bt",
    NvEditCoverTopHeaderTitleLabelKey = "edit_cover_topHeader_title_label",
    NvEditCoverTopHeaderDoneBtKey = "edit_cover_topHeader_done_bt",
    NvEditCoverImageViewKey = "edit_cover_image_view",
    NvEditCoverThumbnailViewKey = "edit_cover_thumbnail_view",
    NvEditCoverThumbnailSelectViewKey = "edit_cover_thumbnailSelect_view",
    /*! \if ENGLISH
     *  \brief edit alert
     *  \else
     *  \brief 编辑Alert
     *  \endif
    */
    NvEditAlertViewKey = "edit_alert_view",
    NvEditAlertTitleLabelKey = "edit_alert_title_label",
    NvEditAlertMessageLabelKey = "edit_alert_message_label",
    NvEditAlertConfirmBtKey = "edit_alert_confirm_bt",
    NvEditAlertCancelBtKey = "edit_alert_cancel_bt",
    NvEditAlertMessageCellKey = "edit_alert_message_cell",
    NvEditAlertMessageCancelBtKey = "edit_alert_message_cancel_bt",
    /*! \if ENGLISH
     *  \brief Album top area
     *  \else
     *  \brief 相册顶部区域
     *  \endif
    */
    NvAlbumHomeTopHeaderViewKey = "album_home_topHeader_view",
    NvAlbumHomeCloseBtKey = "album_home_close_bt",
    NvAlbumHomeTitleLabelKey = "album_home_title_label",
    /*! \if ENGLISH
     *  \brief Album top TAB
     *  \else
     *  \brief 相册顶部标签
     *  \endif
    */
    NvAlbumHomeTopTagViewKey = "album_home_topTag_view",
    NvAlbumHomeTopTagAllBtKey = "album_home_topTagAll_bt",
    NvAlbumHomeTopTagVideoBtKey = "album_home_topTagVideo_bt",
    NvAlbumHomeTopTagImageBtKey = "album_home_topTagImage_bt",
    NvAlbumHomeTopLineViewKey = "album_home_topLine_view",
    /*! \if ENGLISH
     *  \brief Album material
     *  \else
     *  \brief 相册素材
     *  \endif
    */
    NvAlbumHomeMaterialViewKey = "album_home_material_view",
    NvAlbumHomeMaterialCellKey = "album_home_material_cell",
    /*! \if ENGLISH
     *  \brief Normal style album, bottom view
     *  \else
     *  \brief 普通样式相册，底部视图
     *  \endif
    */
    NvAlbumHomeBottomViewKey = "album_home_bottom_view",
    NvAlbumHomeBottomNextBtKey = "album_home_next_bt",
    NvAlbumHomeBottomAutoCutBtKey = "album_home_autoCut_bt",
    NvAlbumHomeBottomCelley = "album_home_bottom_cell",
    NvAlbumHomeBottomCellSelectedKey = "album_home_bottom_cell_selected",
    /*! \if ENGLISH
     *  \brief Template style album, bottom view
     *  \else
     *  \brief 模版样式相册，底部视图
     *  \endif
    */
    NvAlbumHomeTemplateBottomViewKey = "album_homeTemplate_bottom_view",
    NvAlbumHomeTemplateBottomNextBtKey = "album_homeTemplate_bottomNext_bt",
    NvAlbumHomeTemplateBottomNextBtSelectedKey = "album_homeTemplate_bottomNext_bt_selected",
    NvAlbumHomeTemplateBottomShowTipLabelKey = "album_homeTemplate_bottomShowTip_label",
    NvAlbumHomeTemplateBottomShowNumberLabelKey = "album_homeTemplate_bottomShowNumber_label",
    NvAlbumHomeTemplateBottomCellKey = "album_homeTemplate_bottom_cell",
    NvTemplateHomeCloseBtKey = "template_home_close_bt",
    NvTemplateHomeAutoCutBtKey = "template_home_autoCut_bt",
    NvTemplateHomeCategoryCellKey = "template_home_category_cell",
    NvTemplateHomeCategoryCellSelectedKey = "template_home_category_cell_selected",
    NvTemplateHomeListCellKey = "template_home_list_cell",
    NvTemplateHomeListDataErrorSetKey = "template_home_listDataError_set",
    NvTemplatePreviewBackBtKey = "template_preview_back_bt",
    NvTemplatePreviewApplyBtKey = "template_preview_apply_bt",
    NvTemplatePreviewUserLabelKey = "template_preview_user_label",
    NvTemplatePreviewDescriptionLabelKey = "template_preview_description_label",
    NvTemplatePreviewInfoLabelKey = "template_preview_info_label",
    NvTemplateEditCloseBtKey = "template_edit_close_bt",
    NvTemplateEditAddBtKey = "template_edit_add_bt",
    NvTemplateEditPublishBtKey = "template_edit_publish_bt",
    NvTemplateEditPlayBtKey = "template_edit_play_bt",
    NvTemplateEditTitleLabelKey = "template_edit_title_label",
    NvTemplateEditDescriptionLabelKey = "template_edit_description_label",
    NvTemplateEditListCellKey = "template_edit_list_cell",
    NvTemplateEditCompileViewKey = "template_edit_compile_view",
    NvTemplateEditCompileTitleLabelKey = "template_edit_compileTitle_label",
    NvTemplateEditCompileProgressLabelKey = "template_edit_compileProgress_label",
    NvTemplateEditCompileProgressViewKey = "template_edit_compileProgress_view",
    NvTemplateEditClipViewKey = "template_editClip_view",
    NvTemplateEditClipSectionSetKey = "template_editClip_section_set",
    NvTemplateEditClipReplaceBtKey = "template_editClip_replace_bt",
    NvTemplateEditClipVerifyBtKey = "template_editClip_verify_bt",
    NvTemplateEditClipPlayBtKey = "template_editClip_play_bt",
    NvTemplateEditClipTitleLabelKey = "template_editClip_title_label",
    NvTemplateEditClipStartLabelKey = "template_editClip_start_label",
    NvTemplateEditClipEndLabelKey = "template_editClip_end_label",
    NvTemplateLoadingViewKey = "template_loading_view",
    NvTemplateLoadingImageViewKey = "template_loading_imageView",
    NvTemplateLoadingTitleLabelKey = "template_loading_title_label",
    NvTemplateLoadingCancelBtKey = "template_loading_cancel_bt",
    NvTemplateAutoCutHomeCloseBtKey = "template_autoCut_homeClose_bt",
    NvTemplateAutoCutHomePlayBtKey = "template_autoCut_homePlay_bt",
    NvTemplateAutoCutHomePanelViewKey = "template_autoCut_homePanel_view",
    NvTemplateAutoCutHomePanelTemplateLabelKey = "template_autoCut_homePanelTemplate_label",
    NvTemplateAutoCutHomePanelCellKey = "template_autoCut_homePanel_cell",
    NvTemplateAutoCutHomePanelCellSelectedKey = "template_autoCut_homePanel_cell_selected",
    /*! \if ENGLISH
     *  \brief template alert
     *  \else
     *  \brief 模版Alert
     *  \endif
    */
    NvTemplateAlertViewKey = "template_alert_view",
    NvTemplateAlertTitleLabelKey = "template_alert_title_label",
    NvTemplateAlertMessageLabelKey = "template_alert_message_label",
    NvTemplateAlertConfirmBtKey = "template_alert_confirm_bt",
    NvTemplateAlertCancelBtKey = "template_alert_cancel_bt"
}
