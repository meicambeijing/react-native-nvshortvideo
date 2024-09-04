import React, {Component} from 'react';
import {
  Text,
  Image,
  SafeAreaView,
  TouchableHighlight,
  View,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import NvHomeIconImageArray from './NvHomeIconImageArray';
import {I18n} from './language/I18n';
import {serialize, deserialize} from 'json-typescript-mapper';
import {
  NvShortVideo,
  NvVideoEditEvent,
  NvVideoConfig,
  NvImageViewTheme,
  NvLabelTheme,
  NvEditConfig,
  NvThemeElementKey,
  NvButtonTheme,
  NvSliderTheme,
  NvTextFieldTheme,
  NvEditMenuItem,
  NvImageCaptionStyle,
  NvEditModeSource,
  NvEditMode,
  NvVideoCompileResolution,
  NvsCompileVideoBitrateGrade,
  NvTemplateConfig,
  NvViewTheme,
  NvRecordBtTheme,
  NvAlbumConfig,
  NvCaptureConfig,
  NvCaptureMenuItem,
  NvCaptureBottomMenuItem,
  NvVideoPreviewResolution,
  NvTimePair,
  NvBeautyConfig,
  NvBeautyCategorical,
  NvBeautyEffect,
  NvDualConfig,
  NvDualType,
  NvBubbleConfig,
  NvBubbleBgBlurStyle,
} from 'react-native-nvshortvideo';
import {NvModelConfig} from 'react-native-nvshortvideo/lib/VideoConfig/Config/NvModelConfig';

const RNFS = require('react-native-fs');

class HomeScreen extends Component {
  //构造函数
  constructor(props) {
    super(props);
    this.state = {
      flItems: ['Captrue', 'Dual', 'Edit', 'Draft'],
    };
    this.videoConfig = new NvVideoConfig();

    //服务器地址
    //Server url
    /// assetRequestUrl  素材列表请求 Material list request
    /// assetCategoryUrl 素材分类列表请求 Material category list request
    /// assetMusiciansUrl 音乐列表请求 Music list request
    /// assetFontUrl 字体列表请求 Font list request
    /// assetDownloadUrl 下载地址请求 Download address request
    /// assetPrefabricatedUrl 预制素材请求 Prefabricated material request
    /// assetAutoCutUrl 一键成片网络请求 AutoCut request
    /// assetTagUrl 模版标签列表请求 Template tag list request
    /// clientId clientId
    /// clientSecret clientSecret
    /// assemblyId assemblyId
    /// isAbroad 海外数据请求，0==全部，1==海外 Overseas data request, 0== all, 1== overseas
    let map = {
      host: 'https://mall.meishesdk.com/api/shortvideo/test/',
      assetRequestUrl: 'materialcenter/mall/custom/listAllAssemblyMaterial',
      assetCategoryUrl: 'materialcenter/appSdkApi/listTypeAndCategory',
      assetMusiciansUrl: 'materialcenter/appSdkApi/listMusic',
      assetFontUrl: 'materialcenter/listFont',
      assetDownloadUrl: 'materialcenter/mall/custom/materialInteraction',
      assetPrefabricatedUrl: 'materialcenter/beautyAssets/latest',
      assetAutoCutUrl: 'materialcenter/recommend/listTemplate',
      assetTagUrl: 'materialcenter/listTemplateTag',
      clientId: '7480f2bf193d417ea7d93d64',
      clientSecret: 'e4434ff769404f64b33f462331a80957',
      assemblyId: 'MEISHE_MATERIAL_LIST',
      isAbroad: 1,
    };
    let videoOperator = NvShortVideo.shareInstance();
    videoOperator.configServerInfo(map);
  }

  componentDidMount() {
    let videoOperator = NvShortVideo.shareInstance();
    videoOperator.setVideoEditEventHandler(
      this.handleVideoEditEvent.bind(this),
    );

    // this.fillTestTheme();
    this.loadTestConfigFile();
  }

  componentWillUnmount() {
    let videoOperator = NvShortVideo.shareInstance();
    videoOperator.setVideoEditEventHandler(null);
  }

  handleVideoEditEvent(event, info) {
    if (event == NvVideoEditEvent.publish) {
      this.props.navigation.navigate('VideoResult', {projectInfo: info});
    } else {
      //
    }
  }

  pushToVideoEditFunction(type) {
    let videoOperator = NvShortVideo.shareInstance();
    if (type == 'Captrue') {
      videoOperator.startVideoCaptrue(this.videoConfig);
    } else if (type == 'Edit') {
      videoOperator.startSeleteFilesForEdit(this.videoConfig);
    } else if (type == 'Draft') {
      videoOperator
        .getDraftList()
        .then(draftList => {
          this.props.navigation.navigate('DraftList', {
            draftDataList: draftList,
            videoConfig: this.videoConfig,
          });
        })
        .catch(error => {
          // 处理错误
          console.error(error);
        });
    } else if (type == 'Dual') {
      videoOperator.startVideoDualCaptrue(this.videoConfig);
    }
  }

  renderItem = item => {
    return (
      <TouchableHighlight
        key={item}
        onPress={() => this.pushToVideoEditFunction(item)}
        underlayColor="rgba(197, 197, 209, 0.40)"
        style={[
          {
            borderRadius: 20,
            alignSelf: 'stretch',
            height: 41,
            marginBottom: 20, // 设置控件之间的间距为20
            backgroundColor: 'rgba(197, 197, 209, 0.15)',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'justify-between',
            paddingHorizontal: 33,
          },
        ]}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            flex: 1,
          }}>
          <Image
            style={{
              height: 23,
              width: 23,
              marginRight: 20,
            }}
            source={NvHomeIconImageArray[item + 'Icon']}
            resizeMode={'contain'}
            onPress={() => this.pushToVideoEditFunction(item)}
          />
          <Text
            style={{
              lineHeight: 41,
              textAlign: 'left',
              fontSize: 15,
              color: 'white',
              flex: 1,
            }}>
            {I18n.t(item)}
          </Text>
          <Image
            style={{
              height: 5,
              width: 10,
              marginLeft: 20,
            }}
            source={require('./assets/home_arrow_right.png')}
            resizeMode={'contain'}
          />
        </View>
      </TouchableHighlight>
    );
  };

  render() {
    return (
      <LinearGradient
        colors={['#000000', '#2A313C']}
        start={{x: 0.0, y: 0.0}}
        end={{x: 1.0, y: 1.0}}
        locations={[0.0, 1.0]}
        style={{flex: 1}}>
        <SafeAreaView
          style={{
            flex: 1,
            flexDirection: 'column',
            marginHorizontal: 28,
          }}>
          <Text
            style={{
              lineHeight: 40,
              marginTop: 20,
              textAlign: 'left',
              fontSize: 29,
              color: 'white',
            }}>
            {I18n.t('new_materials')}
          </Text>
          <Image
            style={{
              marginTop: 20,
              aspectRatio: 2 / 1,
              borderRadius: 10,
            }}
            source={require('./assets/home_banner.png')}
            resizeMode={'cover'}
          />
          <View
            style={{
              marginTop: 25,
              overflow: 'hidden',
            }}>
            <LinearGradient
              colors={['#21272C', '#282F3B']}
              start={{x: 0.0, y: 0.0}}
              end={{x: 1.0, y: 1.0}}
              locations={[0.0, 1.0]}
              style={{
                borderRadius: 9,
                paddingHorizontal: 20,
              }}>
              <Text
                style={{
                  lineHeight: 20,
                  marginTop: 38,
                  textAlign: 'left',
                  fontSize: 15,
                  color: '#AAAAAA',
                }}>
                {I18n.t('select_function_noti')}
              </Text>
              <Text
                style={{
                  lineHeight: 33,
                  textAlign: 'left',
                  fontSize: 23.5,
                  fontWeight: 'bold',
                  color: 'white',
                }}>
                {I18n.t('function_list')}
              </Text>
              <View
                style={{
                  marginTop: 20,
                  marginBottom: 30,
                }}>
                {this.state.flItems.map(this.renderItem)}
              </View>
            </LinearGradient>
          </View>
          <View style={{flex: 1}} />
        </SafeAreaView>
      </LinearGradient>
    );
  }

  loadTestConfigFile = async () => {
    let testDir = RNFS.DocumentDirectoryPath + '/Config';
    RNFS.exists(testDir)
      .then(exists => {
        if (exists) {
          let jsonFilePath = testDir + '/test.json';
          this.readTestConfigJsonFile(jsonFilePath);
        } else {
          RNFS.mkdir(RNFS.DocumentDirectoryPath + '/Config');
        }
      })
      .catch(err => {
        console.log('check test dir error:', err);
      });
  };

  readTestConfigJsonFile(jsonFilePath) {
    RNFS.exists(jsonFilePath)
      .then(exists => {
        if (exists) {
          RNFS.readFile(jsonFilePath, 'utf8')
            .then(result => {
              try {
                const jsonData = JSON.parse(result);
                this.videoConfig = deserialize(NvVideoConfig, jsonData);
                console.log('deserialize suc:' + jsonFilePath);
              } catch (error) {
                console.error('Error parsing JSON:', error);
              }
            })
            .catch(err => {
              console.error('Error reading file:', err);
            });
        } else {
          console.log('测试文件不存在:', jsonFilePath);
        }
      })
      .catch(err => {
        console.log('check jsonFilePath error:', err);
      });
  }

  fillTestTheme() {
    this.videoConfig.primaryColor = '#0000FF';
    this.videoConfig.backgroundColor = '#00FA9A';
    this.videoConfig.panelBackgroundColor = '#000080';
    this.videoConfig.textColor = '#FFA500';
    this.videoConfig.secondaryTextColor = '#8A2BE2';
    this.videoConfig.enableLocalMusic = false;

    //相册配置 albumConfig
    this.videoConfig.albumConfig.type = 1;
    this.videoConfig.albumConfig.maxSelectCount = 5;
    this.videoConfig.albumConfig.useAutoCut = false;

    //拍摄配置 captureConfig
    this.videoConfig.captureConfig.captureMenuItems = [
      NvCaptureMenuItem.device,
      NvCaptureMenuItem.speed,
      NvCaptureMenuItem.beauty,
      NvCaptureMenuItem.original,
      NvCaptureMenuItem.filter,
    ];
    this.videoConfig.captureConfig.captureBottomMenuItems = [
      NvCaptureBottomMenuItem.image,
      NvCaptureBottomMenuItem.video,
    ];
    this.videoConfig.captureConfig.captureDeviceIndex = 0;
    this.videoConfig.captureConfig.resolution =
      NvVideoPreviewResolution.NvVideoPreviewResolution_720;
    this.videoConfig.captureConfig.ignoreVideoRotation = false;
    this.videoConfig.captureConfig.imageDuration = 6 * 1000;
    this.videoConfig.captureConfig.autoSavePhotograph = true;
    var pair1 = new NvTimePair(1 * 1000, 10 * 1000);
    var pair2 = new NvTimePair(0, 50 * 1000);
    this.videoConfig.captureConfig.timeRanges = [pair1, pair2];
    var pair3 = new NvTimePair(0, 30 * 1000);
    this.videoConfig.captureConfig.smartTimeRange = pair3;

    this.videoConfig.captureConfig.beautyConfig = new NvBeautyConfig();
    this.videoConfig.captureConfig.beautyConfig.categoricalArray = [
      NvBeautyCategorical.Skin,
      NvBeautyCategorical.MicroShape,
    ];
    this.videoConfig.captureConfig.beautyConfig.beautyEffectArray = [
      NvBeautyEffect.Standard,
      NvBeautyEffect.WhiteA,
      NvBeautyEffect.Rosy,
    ];

    this.videoConfig.captureConfig.dualMenuItems = [
      NvCaptureMenuItem.device,
      NvCaptureMenuItem.dualtype,
      NvCaptureMenuItem.original,
    ];
    this.videoConfig.captureConfig.dualConfig = new NvDualConfig();
    this.videoConfig.captureConfig.dualConfig.left = 50.0 / 375.0;
    this.videoConfig.captureConfig.dualConfig.top = 50.0 / 666.67;
    this.videoConfig.captureConfig.dualConfig.limitWidth = 200 / 375.0;
    this.videoConfig.captureConfig.dualConfig.defaultType = NvDualType.topDown;
    this.videoConfig.captureConfig.dualConfig.supportedTypes = [
      NvDualType.topDown,
      NvDualType.leftRight,
    ];
    this.videoConfig.captureConfig.dualConfig.autoDisablesMic = true;

    this.videoConfig.captureConfig.filterDefaultValue = 1.0;
    this.videoConfig.captureConfig.enableCaptureAlbum = true;
    this.videoConfig.captureConfig.autoDisablesMic = true;

    //编辑配置 albumConfig
    this.videoConfig.editConfig.editMenuItems = [
      NvEditMenuItem.release,
      NvEditMenuItem.download,
      NvEditMenuItem.text,
    ];
    this.videoConfig.editConfig.resolution =
      NvVideoPreviewResolution.NvVideoPreviewResolution_1080;
    this.videoConfig.editConfig.fps = 25;
    this.videoConfig.editConfig.minEffectDuration = 1000;
    this.videoConfig.editConfig.minAudioDuration = 3000;
    this.videoConfig.editConfig.captionColor = '#FFA500';
    this.videoConfig.editConfig.captionColorList = [
      '#FFFFFF',
      '#000000',
      '#0099F6',
      '#50C23B',
    ];
    this.videoConfig.editConfig.supportedCaptionStyles = [
      NvImageCaptionStyle.none,
      NvImageCaptionStyle.outline,
    ];
    this.videoConfig.editConfig.editModeSource = NvEditModeSource.firstAsset;
    this.videoConfig.editConfig.editMode = NvEditMode.NvEditMode9v16;
    this.videoConfig.editConfig.supportedEditModes = [
      NvEditMode.NvEditMode9v16,
      NvEditMode.NvEditMode16v9,
      NvEditMode.NvEditMode3v4,
      NvEditMode.NvEditMode4v3,
      NvEditMode.NvEditMode1v1,
      NvEditMode.NvEditMode18v9,
      NvEditMode.NvEditMode9v18,
      NvEditMode.NvEditMode8v9,
      NvEditMode.NvEditMode9v8,
    ];
    this.videoConfig.editConfig.bubbleConfig = new NvBubbleConfig();
    this.videoConfig.editConfig.bubbleConfig.titleTheme = new NvLabelTheme();
    this.videoConfig.editConfig.bubbleConfig.titleTheme.textColor = '#0000FF';
    this.videoConfig.editConfig.bubbleConfig.backgroundBlurStyle =
      NvBubbleBgBlurStyle.light;

    this.videoConfig.editConfig.filterDefaultValue = 1.0;
    this.videoConfig.editConfig.maxVolume = 1;

    //导出配置 compile Config
    this.videoConfig.compileConfig.resolution =
      NvVideoCompileResolution.NvVideoCompileResolution_720;
    this.videoConfig.compileConfig.fps = 25;
    this.videoConfig.compileConfig.bitrateGrade =
      NvsCompileVideoBitrateGrade.NvsCompileBitrateGradeHigh;
    this.videoConfig.compileConfig.bitrate = -1;
    this.videoConfig.compileConfig.autoSaveVideo = true;

    //模版配置 compile Config
    this.videoConfig.templateConfig.maxSelectCount = 5;
    this.videoConfig.templateConfig.useAutoCut = false;

    //模型配置 model Config
    // this.videoConfig.modelConfig.use240 = true;
    // this.videoConfig.modelConfig.face240 = "ms_face240_v2.0.8.model";

    //以”capture_capture_close_bt“为例
    let buttonTheme = new NvButtonTheme();
    buttonTheme.imageName = 'homepage_logo';

    //以”capture_duration_label“为例
    let labelTheme = new NvLabelTheme();
    labelTheme.textColor = '#FF0000';

    //以”capture_music_menu_view“为例
    let viewTheme = new NvViewTheme();
    viewTheme.backgroundColor = '#FF0000';

    //以”capture_capture_record_bt_set“为例
    let record = new NvRecordBtTheme();
    record.minimumTrackTintColor = '#FF0000';

    var customTheme = {
      [NvThemeElementKey.NvCaptureCloseBtKey]: buttonTheme,
      [NvThemeElementKey.NvCaptureDurationLabelKey]: labelTheme,
      [NvThemeElementKey.NvCaptureMusicMenuViewKey]: viewTheme,
      [NvThemeElementKey.NvCaptureRecordBtSetKey]: record,
    };
    this.videoConfig.captureConfig.customTheme = customTheme;
  }
}

export default HomeScreen;
