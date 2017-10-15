import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SmartAudioProvider } from '../providers/smart-audio/smart-audio';
import { AccueilPage } from '../pages/accueil/accueil';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
    rootPage:any = AccueilPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, smartAudio: SmartAudioProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      smartAudio.preload('a', 'assets/audioLib/a.mp3');
      smartAudio.preload('an', 'assets/audioLib/an.mp3');
      smartAudio.preload('i', 'assets/audioLib/i.mp3');
      smartAudio.preload('ɔ', 'assets/audioLib/ɔ.mp3');
      smartAudio.preload('ɔn', 'assets/audioLib/ɔn.mp3');
      smartAudio.preload('e', 'assets/audioLib/e.mp3');
      smartAudio.preload('ɛ', 'assets/audioLib/ɛ.mp3');
      smartAudio.preload('ɛn', 'assets/audioLib/ɛn.mp3');
      smartAudio.preload('o', 'assets/audioLib/o.mp3');
      smartAudio.preload('on', 'assets/audioLib/on.mp3');
      smartAudio.preload('u', 'assets/audioLib/u.mp3');
      smartAudio.preload('un', 'assets/audioLib/un.mp3');
      smartAudio.preload('in', 'assets/audioLib/in.mp3');

      
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
