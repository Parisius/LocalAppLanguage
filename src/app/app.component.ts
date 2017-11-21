import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { SmartAudioProvider } from '../providers/smart-audio/smart-audio';
import { AccueilPage } from '../pages/accueil/accueil';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
    rootPage:any = AccueilPage;

 constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, /*smartAudio: SmartAudioProvider*/) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
 
    });
    
  }

  
 // this.nativeAudio.play('uniqueId1');

  //this.nativeAudio.preloadSimple('uniqueId1', 'path/to/file.mp3').then(onSuccess, onError);
  //this.nativeAudio.preloadComplex('uniqueId2', 'path/to/file2.mp3', 1, 1, 0).then(onSuccess, onError);
  

  
  // can optionally pass a callback to be called when the file is done playing
 // this.nativeAudio.play('uniqueId1', () => console.log('uniqueId1 is done playing'));
  
  /* this.nativeAudio.loop('uniqueId2').then(onSuccess, onError);
  
  this.nativeAudio.setVolumeForComplexAsset('uniqueId2', 0.6).then(onSuccess,onError);
  
  this.nativeAudio.stop('uniqueId1').then(onSuccess,onError);
  
  this.nativeAudio.unload('uniqueId1').then(onSuccess,onError); */
  
}
