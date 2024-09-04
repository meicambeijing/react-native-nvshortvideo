import React, {Component} from 'react';
import {
  Text,
  TextInput,
  ImageBackground,
  Image,
  TouchableHighlight,
  View,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import {I18n} from './language/I18n';
import RNProgressHud from 'progress-hud';
import {NvShortVideo, NvVideoCompileEvent} from 'react-native-nvshortvideo';

const ProgressHUDMaskType = RNProgressHud.ProgressHUDMaskType;

class NvVideoResultComponent extends Component {
  constructor(props) {
    super(props);
    const {params} = this.props.route;
    this.state = {
      projectInfo: params.projectInfo,
      saveVideoShowPath: false,
      firstComplie: true,
      localImagePath: '',
      text: params.projectInfo.draftInfo,
    };
  }
  componentDidMount() {
    NvShortVideo.shareInstance().setVideoCompileEventHandler(
      this.handleEvent.bind(this),
    );
    this.setState({saveVideoShowPath: false}, () => {
      this.pushToVideoEditFunction('Compile');
    });
  }

  componentWillUnmount() {
    NvShortVideo.shareInstance().setVideoCompileEventHandler(null);
    NvShortVideo.shareInstance().exitEdit(this.state.projectInfo.projectId);
  }

  handleEvent(nMethod, nArguments) {
    // console.log('------->🌹  nMethod:', nMethod);
    if (nMethod == NvVideoCompileEvent.progress) {
      //更新进度
      //Update progress
    } else if (nMethod == NvVideoCompileEvent.complete) {
      RNProgressHud.dismiss();
      let errorCode = nArguments.errorCode;
      if (errorCode == 0) {
        //成功
        //Sucess
        let outputPath = nArguments.outputPath;
        if (outputPath) {
          this.setState({
            localImagePath: outputPath,
          });
        }
        if (this.state.saveVideoShowPath) {
          RNProgressHud.showInfoWithStatus(
            I18n.t('ResultFilePath') + outputPath,
            1,
          );
          // this.props.navigation.goBack();
        }
      } else if (errorCode == 1) {
        //取消
        //Cancel
        RNProgressHud.showInfoWithStatus(I18n.t('Cancelled'), 1);
      } else {
        //失败
        //Failed
        console.log('Completed error:', nArguments);
        RNProgressHud.showErrorWithStatus(I18n.t('Error') + errorCode, 1);
      }
      this.setState({
        firstComplie: false,
      });
    } else if (nMethod == NvVideoCompileEvent.coverImageSelected) {
      let imagePath = nArguments.coverImagePath;
      if (imagePath) {
        this.setState({
          projectInfo: {...this.state.projectInfo, coverImagePath: imagePath},
        });
      }
    }
  }
  pushToVideoEditFunction(type) {
    if (type == 'SaveDraft') {
      NvShortVideo.shareInstance()
        .saveDraft(this.state.text)
        .then(ret => {
          this.props.navigation.goBack();
        })
        .catch(error => {
          // 处理错误
          console.error(error);
        });
    } else if (type == 'SaveImage') {
      NvShortVideo.shareInstance()
        .saveImage(this.state.projectInfo.coverImagePath)
        .then(ret => {
          RNProgressHud.showSuccessWithStatus(I18n.t('Save_suc'), 0.5);
        })
        .catch(error => {
          // 处理错误
          console.error(error);
        });
    } else {
      RNProgressHud.showWithStatus(
        I18n.t('Compiling'),
        ProgressHUDMaskType.Clear,
      );
      NvShortVideo.shareInstance()
        .compileCurrentTimeline({})
        .then(ret => {
          //
        })
        .catch(error => {
          // 处理错误
          console.error(error);
          RNProgressHud.dismiss();
        });
    }
  }

  endTextEdit() {
    Keyboard.dismiss();
  }

  renderBottomBts = hasDraft => {
    var btArray = [];
    var btTitles = hasDraft
      ? ['SaveDraft', 'SaveImage', 'Compile']
      : ['Compile'];
    var btTypes = [0, 1];
    btTitles.forEach(item => {
      btArray.push(
        <TouchableHighlight
          key={item}
          onPress={() =>
            this.setState({saveVideoShowPath: true}, () => {
              this.pushToVideoEditFunction(item);
            })
          }
          style={{
            height: 50,
            width: 100,
            borderRadius: 11,
            backgroundColor: item == 'SaveDraft' ? '#2F2F2F' : '#FC3E5A',
            alignSelf: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              lineHeight: 18,
              fontSize: 14,
              paddingHorizontal: 5,
              fontWeight: 'bold',
              textAlign: 'center',
              textAlignVertical: 'center',
              color: 'white',
            }}
            numberOfLines={2}>
            {I18n.t(item)}
          </Text>
        </TouchableHighlight>,
      );
    });
    return (
      <View
        style={{
          height: 100,
          marginBottom: 30,
          flexDirection: 'row',
          alignItems: 'stretch',
          justifyContent: 'space-around',
        }}>
        {btArray}
      </View>
    );
  };

  render() {
    const {localImagePath, firstComplie} = this.state;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#141414',
          flexDirection: 'column',
          alignItems: 'stretch',
          justifyContent: 'flex-start',
        }}>
        <View
          style={{
            height: 160,
            marginTop: 35,
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
          }}>
          <TextInput
            style={{
              flex: 1,
              height: 160,
              fontSize: 15,
              marginLeft: 25,
              marginRight: 30,
              color: 'white',
              textAlignVertical: 'top',
            }}
            placeholder={I18n.t('PublishInfo')}
            placeholderTextColor="#808080"
            multiline={true}
            onChangeText={text => this.setState({text})}>
            {this.state.projectInfo.draftInfo}
          </TextInput>
          <ImageBackground
            style={{
              width: 82,
              height: 110,
              marginRight: 16,
              borderRadius: 7.5,
              backgroundColor: '#707070',
              overflow: 'hidden',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            source={{uri: this.state.projectInfo.coverImagePath}}
            resizeMode={'cover'}>
            {localImagePath ? (
              <>
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate('VideoPlayPreView', {
                      videoPath: localImagePath,
                    });
                  }}
                  style={{
                    position: 'absolute',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={require('./assets/video_play.png')}
                    style={{
                      width: 40,
                      height: 40,
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    NvShortVideo.shareInstance()
                      .selectCoverImage()
                      .then(ret => {})
                      .catch(error => {
                        // 处理错误
                        console.error(error);
                        RNProgressHud.dismiss();
                      })
                  }
                  style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: 0,
                  }}>
                  <Text
                    style={{
                      lineHeight: 15,
                      fontSize: 10,
                      paddingHorizontal: 5,
                      backgroundColor: 'rgba(0,0,0,0.7)',
                      textAlign: 'center',
                      color: 'white',
                    }}>
                    {I18n.t('selectCover')}
                  </Text>
                </TouchableOpacity>
              </>
            ) : firstComplie == false ? (
              <TouchableOpacity
                onPress={() =>
                  this.setState({saveVideoShowPath: false}, () => {
                    this.pushToVideoEditFunction('Compile');
                  })
                }
                style={{
                  position: 'absolute',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 60,
                  height: 30,
                  borderRadius: 10,
                  backgroundColor: 'rgba(47,47,47,0.7)',
                }}>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 'bold',
                    color: 'white',
                  }}>
                  {I18n.t('TryAgin')}
                </Text>
              </TouchableOpacity>
            ) : null}
          </ImageBackground>
        </View>
        <TouchableOpacity
          style={[
            {
              flex: 1,
              // backgroundColor: '#1461ff',
              // underlayColor: 'red',
              alignSelf: 'stretch',
            },
          ]}
          onPress={() => Keyboard.dismiss()}>
          <Text> </Text>
        </TouchableOpacity>
        {this.renderBottomBts(this.state.projectInfo.hasDraft)}
      </View>
    );
  }
}

export default NvVideoResultComponent;
