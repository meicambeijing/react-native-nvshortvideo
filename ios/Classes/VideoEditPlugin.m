//
//  VideoEditPlugin.m
//  Runner
//
//  Created by 美摄 on 2021/10/15.
//

#import "VideoEditPlugin.h"
#import <NvShortVideoCore/NvShortVideoCore.h>
#import "NvHttpRequest.h"
#import <YYModel/YYModel.h>

#if __has_include("NvSpeechRecognizer.h")
#import "NvSpeechRecognizer.h"
#endif

#import <Network/Network.h>

@interface VideoEditPlugin() <NvModuleManagerDelegate, NvModuleManagerCompileStateDelegate>

@property (nonatomic, strong) NvModuleManager* moduleManager;

@property (nonatomic, assign) bool hasListeners;

@property (nonatomic, strong) UINavigationController* videoEditNavigationController;
//@property (nonatomic, strong)MBProgressHUD *hud;

@end

@implementation VideoEditPlugin

RCT_EXPORT_MODULE();

+ (BOOL)requiresMainQueueSetup {
  return true;
}

- (dispatch_queue_t)methodQueue {
  return dispatch_get_main_queue();
}

- (instancetype)init {
    self = [super init];
    if(self){
        NSString* licPath = [[NSBundle mainBundle] pathForResource:@"meicam_licence.lic" ofType:nil];
        if (![NvsStreamingContext verifySdkLicenseFile:licPath]) {
            NSLog(@"[Error] ❤️: NvsStreamingContext verifySdkLicenseFile error");
        }
        self.moduleManager = NvModuleManager.sharedInstance;
        self.moduleManager.delegate = self;
        self.moduleManager.compileDelegate = self;
        
        self.moduleManager.netDelegate = [NvHttpRequest sharedInstance];
        [self.moduleManager prepareDownloadFolders];
        
#if __has_include("NvSpeechRecognizer.h")
        NSObject<NvVoiceRecognizer> *fileRecognizer = [[NvSpeechRecognizer alloc] init];
        moduleManager.voiceRecognizer = fileRecognizer;
#endif
        
        [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(handleDraftListNotification:) name:NvDraftManager_Draft_Save_Notification object:nil];
        [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(handleDraftListNotification:) name:NvDraftManager_Draft_Delete_Notification object:nil];
    }
    return self;
}

- (NSArray<NSString *> *)supportedEvents {
    return @[VideoEditDraftChangeMethodChannel, VideoEditCallbackMethodChannel, VideoEditMethodChannel]; //这里返回的将是你要发送的消息名的数组。
}

-(void)handleDraftListNotification:(NSNotification*)notification{
  [self sendEventWithName:VideoEditDraftChangeMethodChannel body:@{@"method": DraftListUpdate}];
}

- (void)networkState{
    // 联网后，请求、下载模型文件
    // After networking, request and download the model file
    nw_path_monitor_t monitor = nw_path_monitor_create();
    nw_path_monitor_set_queue(monitor, dispatch_get_main_queue());
    nw_path_monitor_set_update_handler(monitor, ^(nw_path_t path) {
        if (nw_path_get_status(path) == nw_path_status_satisfied) {
            NvModuleManager* moduleManager = [NvModuleManager sharedInstance];
            [moduleManager preloadedResource];
            nw_path_monitor_cancel(monitor);
        } else {
//            NSLog(@"Network not reachable");
        }
    });
    nw_path_monitor_start(monitor);
}

RCT_EXPORT_METHOD(sendMessageToNative:(NSDictionary *)dic resolve:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject) {
  NSString* method = dic[@"method"];
  NSDictionary* arguments = dic[@"arguments"];
  [self handleMethod:method arguments:arguments completion:^(NSObject * _Nullable response, NSError * _Nonnull error) {
        if (error) {
            reject([NSString stringWithFormat:@"%ld", error.code], error.localizedDescription, error);
        } else {
            if (response) {
                resolve(response);
            } else {
                resolve(@"suc");
            }
        }
    }];
}

- (void)handleMethod:(NSString*)methodName
           arguments:(NSDictionary*)arguments
          completion:(nullable void (^)(NSObject * _Nullable response, NSError * _Nullable error))completion {
    UIViewController* presentingVc = [NvSPUtils keyWindow].rootViewController;
    NSDictionary *configDic = arguments[@"config"];
    NvVideoConfig *videoConfig;
    if (configDic) {
        videoConfig = [NvVideoConfig yy_modelWithJSON:configDic];
    }
    if ([methodName isEqualToString:CaptureMethod]) {
        NvCaptionMusicInfo *musicInfo;
        NSDictionary *musicInfoDic = arguments[@"musicInfo"];
        if (musicInfoDic) {
            NSString *musicName = musicInfoDic[@"musicName"];
            NSString *musicFilePath = musicInfoDic[@"musicFilePath"];
            
            if (musicFilePath && musicFilePath.length > 0) {
                NvCaptionMusicInfo *info = [[NvCaptionMusicInfo alloc] init];
                info.musicName = musicName;
                info.musicFilePath = musicFilePath;
                musicInfo = info;
            }
        }
        [self.moduleManager startCaptureWithPresentViewController:presentingVc config:videoConfig music:musicInfo with:^{
            //
        }];
        completion(nil, nil);
    } else if([methodName isEqualToString:DualCaptureMethod]) {
        [self.moduleManager startDualCaptureWithPresentViewController:presentingVc config:videoConfig with:^{
            //
        }];
        completion(nil, nil);
    } else if([methodName isEqualToString:DualCaptureWithVideoMethod]) {
        NSFileManager* fm = [NSFileManager defaultManager];
        NSString* videoPath = arguments[@"videoPath"];
        if (videoPath && [fm fileExistsAtPath:videoPath]) {
            [self.moduleManager startDualCaptureWithPresentViewController:presentingVc config:videoConfig videoPath:videoPath with:^{
                //
            }];
            completion(nil, nil);
        }else{
            completion(nil, [NSError errorWithDomain:@"" code:-1 userInfo:@{NSLocalizedDescriptionKey:@"video file does not exist"}]);
        }
    } else if([methodName isEqualToString:EditMethod]) {
        [self.moduleManager startEditWithPresentViewController:presentingVc config:videoConfig with:^{
            //
        }];
        completion(nil, nil);
    } else if([methodName isEqualToString:ReeditMethod]) {
        NSString* projectId = arguments[@"projectId"];
        if (projectId && projectId.length > 0) {
            NSArray<NvEditProjectInfo*> * draftList = [NvModuleManager projectList];
            for (NvEditProjectInfo* draftModel in draftList) {
                if ([draftModel.projectId isEqualToString:projectId]) {
                    [self.moduleManager reeditProject:draftModel presentViewController:presentingVc config:videoConfig];
                    completion(nil, nil);
                    return;
                }
            }
        }
        completion(nil, [NSError errorWithDomain:@"" code:-1 userInfo:@{NSLocalizedDescriptionKey:@"projectId error, draft does not exist"}]);
    } else if([methodName isEqualToString:DraftListMethod]) {
        completion([self getProjectList], nil);
    } else if([methodName isEqualToString:DeleteDraftMethod]) {
        NSString* projectId = arguments[@"projectId"];
        if (projectId && projectId.length > 0) {
            if ([NvModuleManager deleteDraft:projectId]) {
                completion(nil, nil);
                return;
            }
        }
        completion(nil, [NSError errorWithDomain:@"" code:-1 userInfo:@{NSLocalizedDescriptionKey:@"projectId error, draft does not exist"}]);
    } else if([methodName isEqualToString:ExitVideoEditMethod]) {
        NSString* projectId = arguments[@"projectId"];
        if (projectId) {
            [self.moduleManager exitVideoEdit:projectId];
        }
        completion(nil, nil);
    } else if([methodName isEqualToString:ConfigServerInfo]) {
        //设置服务器参数 Setting server parameters
        NSString* host = arguments[@"host"];
        NSString* assetRequestUrl = arguments[@"assetRequestUrl"];
        NSString* assetCategoryUrl = arguments[@"assetCategoryUrl"];
        NSString* assetMusiciansUrl = arguments[@"assetMusiciansUrl"];
        NSString* assetFontUrl = arguments[@"assetFontUrl"];
        NSString* assetDownloadUrl = arguments[@"assetDownloadUrl"];
        NSString* assetPrefabricatedUrl = arguments[@"assetPrefabricatedUrl"];
        NSString* assetAutoCutUrl = arguments[@"assetAutoCutUrl"];
        NSString* assetTagUrl = arguments[@"assetTagUrl"];
        
        NSString* clientId = arguments[@"clientId"];
        NSString* clientSecret = arguments[@"clientSecret"];
        NSString* assemblyId = arguments[@"assemblyId"];
        NSInteger isAbroad = [arguments[@"isAbroad"] integerValue];
        
        if (!host || !assetRequestUrl || !assetCategoryUrl || !assetMusiciansUrl || !assetFontUrl || !assetDownloadUrl || !assetPrefabricatedUrl || !assetAutoCutUrl || !assetTagUrl) {
            completion(nil, [NSError errorWithDomain:@"" code:-1 userInfo:@{NSLocalizedDescriptionKey:@"Server Info error"}]);
            return;
        }

        NvHttpRequest *request = [NvHttpRequest sharedInstance];
        request.assetRequestUrl = [host stringByAppendingString:assetRequestUrl];
        request.assetCategoryUrl = [host stringByAppendingString:assetCategoryUrl];
        request.assetMusiciansUrl = [host stringByAppendingString:assetMusiciansUrl];
        request.assetFontUrl = [host stringByAppendingString:assetFontUrl];
        request.assetDownloadUrl = [host stringByAppendingString:assetDownloadUrl];
        request.assetPrefabricatedUrl = [host stringByAppendingString:assetPrefabricatedUrl];
        request.assetAutoCutUrl = [host stringByAppendingString:assetAutoCutUrl];
        request.assetTagUrl = [host stringByAppendingString:assetTagUrl];
        
        request.clientId = clientId;
        request.clientSecret = clientSecret;
        request.assemblyId = assemblyId;
        request.isAbroad = isAbroad;
        
        [self networkState];
        completion(nil, nil);
    } else if([methodName isEqualToString:SaveDraftMethod]) {
        NSString* infoString = arguments[@"draftInfo"];
        if ([self.moduleManager saveCurrentDraftWithDraftInfo:infoString]) {
            completion(nil, nil);
        } else {
            completion(nil, [NSError errorWithDomain:@"" code:-1 userInfo:@{NSLocalizedDescriptionKey:@"Save draft error"}]);
        }
    } else if([methodName isEqualToString:CompileVideoMethod]) {
        if ([self.moduleManager compileCurrentTimeline:arguments]) {
            completion(nil, nil);
        } else {
            completion(nil, [NSError errorWithDomain:@"" code:-1 userInfo:@{NSLocalizedDescriptionKey:@"Save draft error"}]);
        }
    } else if([methodName isEqualToString:SelectCoverImage]) {
        __weak typeof(self) weakSelf = self;
        [self.moduleManager selectCoverWithNavigationController:nil completionHandler:^(NSString * _Nonnull path) {
            [weakSelf sendEventWithName:VideoEditCallbackMethodChannel body:@{
              @"method":DidCoverImageChangedMethod,
              @"arguments":@{@"coverImagePath":path}
            }];
        }];
        completion(nil, nil);
    } else if([methodName isEqualToString:SaveImageMethod]) {
        NSString* coverImagePath = arguments[@"coverImagePath"];
        NSFileManager* fm = [NSFileManager defaultManager];
        if (coverImagePath && [fm fileExistsAtPath:coverImagePath]) {
            [self.moduleManager saveCover:coverImagePath with:^(BOOL success) {
                if (success) {
                    completion(nil, nil);
                } else {
                    completion(nil, [NSError errorWithDomain:@"" code:-1 userInfo:@{NSLocalizedDescriptionKey:@"save error"}]);
                }
            }];
        } else {
            completion(nil, [NSError errorWithDomain:@"" code:-2 userInfo:@{NSLocalizedDescriptionKey:@"coverPath error"}]);
        }
    } else if([methodName isEqualToString:DualTestVideoPathMethod]) {
        NSString* testFile = [[NSBundle mainBundle] pathForResource:@"IMG_1333.mp4" ofType:nil];
        completion(testFile, nil);
    } else if([methodName isEqualToString:DualTestImagePathMethod]) {
        NSString* testFile = [[NSBundle mainBundle] pathForResource:@"555.PNG" ofType:nil];
        completion(testFile, nil);
    } else if([methodName isEqualToString:TestJsonPathMethod]) {
        NSArray *paths = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES);
        NSString *documentsDirectory = [paths objectAtIndex:0];
        NSString *docPath = [documentsDirectory stringByAppendingPathComponent:@"Config"];
        NSFileManager *fm = [NSFileManager defaultManager];
        if (![fm fileExistsAtPath:docPath]) {
            [fm createDirectoryAtPath:docPath withIntermediateDirectories:NO attributes:nil error:nil];
        }
        NSString* testFile = [docPath stringByAppendingPathComponent:@"test.json"];
        completion(testFile, nil);
    } else {
        completion(nil, [NSError errorWithDomain:@"" code:-2 userInfo:@{NSLocalizedDescriptionKey:@"Method not implemented"}]);
    }
}


- (void)publishWithProjectId:(nonnull NSString *)projectId
              coverImagePath:(nonnull NSString *)coverImagePath
                    hasDraft:(BOOL)hasDraft
                   videoPath:(NSString * _Nullable)videoPath
                 description:(NSString * _Nullable)description
videoEditNavigationController:(nonnull UINavigationController *)videoEditNavigationController {
    if (videoEditNavigationController.presentingViewController.presentingViewController) {
        UIViewController* presentingVc = [NvSPUtils keyWindow].rootViewController;
        [presentingVc dismissViewControllerAnimated:YES completion:^{
            [self sendEventWithName:VideoEditMethodChannel body:@{
                @"method":VideoEditResultEvent,
                @"arguments":@{@"coverImagePath":coverImagePath,
                               @"hasDraft":@(hasDraft),
                               @"draftInfo":description!=nil?description:@"",
                               @"projectId":projectId,
                               @"videoPath":videoPath!=nil?videoPath:@""}
            }];
        }];
    }else{
        [videoEditNavigationController dismissViewControllerAnimated:YES completion:^{
            [self sendEventWithName:VideoEditMethodChannel body:@{
                @"method":VideoEditResultEvent,
                @"arguments":@{@"coverImagePath":coverImagePath,
                               @"hasDraft":@(hasDraft),
                               @"draftInfo":description!=nil?description:@"",
                               @"projectId":projectId,
                               @"videoPath":videoPath!=nil?videoPath:@""}
            }];
        }];
    }
}

- (void)didCompileFloatProgress:(float)progress {
//  self.hud.progress = progress;
  
  [self sendEventWithName:VideoEditCallbackMethodChannel body:@{
    @"method":DidCompileProgressMethod,
    @"arguments":@{@"progress":@(progress)}
  }];
}

- (void)didCompileCompleted:(NSString*)outputPath error:(NSError*)error {
    NSMutableDictionary* mutDic = [NSMutableDictionary dictionary];
    if (outputPath) {
      mutDic[@"errorCode"] = @(0);
        mutDic[@"outputPath"] = outputPath;
    }
    if (error) {
        mutDic[@"errorCode"] = @(error.code);
        mutDic[@"errorString"] = error.localizedDescription;
    }
//  [MBProgressHUD hideHUDForView:self.videoEditNavigationController.view animated:YES];
//  [self.videoEditNavigationController dismissViewControllerAnimated:YES completion:^{
//    self.videoEditNavigationController = nil;
//    self.hud = nil;
//  }];
    NSLog(@"---> 🌹");
  [self sendEventWithName:VideoEditCallbackMethodChannel body:@{
    @"method":DidCompileCompletedMethod,
    @"arguments":mutDic
  }];
}

- (NSMutableArray<NSDictionary*>*)getProjectList {
    NSArray<NvEditProjectInfo*> * draftList = [NvModuleManager projectList];
    NSMutableArray* mutArray = [NSMutableArray array];
    for (NvEditProjectInfo* draftModel in draftList) {
        NSString* imagePath = draftModel.coverImagePath?:@"";
        [mutArray addObject:@{@"projectId": draftModel.projectId,
                              @"coverImagePath": imagePath,
                              @"draftInfo": draftModel.projectDescription ? draftModel.projectDescription:@""}];
    }
    return mutArray;
}

@end
