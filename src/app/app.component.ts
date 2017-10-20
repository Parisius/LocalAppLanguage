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

      smartAudio.preload('b', 'assets/audioLib/consonnes/b.mp3');
      smartAudio.preload('c', 'assets/audioLib/consonnes/c.mp3');
      smartAudio.preload('d', 'assets/audioLib/consonnes/d.mp3');
      smartAudio.preload('ɖ', 'assets/audioLib/consonnes/ɖ.mp3');
      smartAudio.preload('f', 'assets/audioLib/consonnes/f.mp3');
      smartAudio.preload('g', 'assets/audioLib/consonnes/g.mp3');
      smartAudio.preload('gb', 'assets/audioLib/consonnes/gb.mp3');
      smartAudio.preload('h', 'assets/audioLib/consonnes/h.mp3');
      smartAudio.preload('j', 'assets/audioLib/consonnes/j.mp3');
      smartAudio.preload('k', 'assets/audioLib/consonnes/k.mp3');
      smartAudio.preload('kp', 'assets/audioLib/consonnes/kp.mp3');
      smartAudio.preload('l', 'assets/audioLib/consonnes/l.mp3');
      smartAudio.preload('m', 'assets/audioLib/consonnes/m.mp3');
      smartAudio.preload('n', 'assets/audioLib/consonnes/n.mp3');
      smartAudio.preload('ny', 'assets/audioLib/consonnes/ny.mp3');
      smartAudio.preload('p', 'assets/audioLib/consonnes/p.mp3');
      smartAudio.preload('s', 'assets/audioLib/consonnes/s.mp3');
      smartAudio.preload('t', 'assets/audioLib/consonnes/t.mp3');
      smartAudio.preload('v', 'assets/audioLib/consonnes/v.mp3');
      smartAudio.preload('w', 'assets/audioLib/consonnes/w.mp3');
      smartAudio.preload('x', 'assets/audioLib/consonnes/x.mp3');
      smartAudio.preload('y', 'assets/audioLib/consonnes/y.mp3');
      smartAudio.preload('z', 'assets/audioLib/consonnes/z.mp3');
      

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
