import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Platform } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';
 
/*
  Generated class for the SmartAudioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SmartAudioProvider {

  audioType: string = 'html5';
  sounds: any = [];
  constructor( public nativeAudio: NativeAudio, platform: Platform) {
    console.log('Hello SmartAudioProvider Provider');
    if(platform.is('cordova')){
      this.audioType = 'native';
  }
  }
  preload(key, asset) {
    
           if(this.audioType === 'html5'){
    
               let audio = {
                   key: key,
                   asset: asset,
                   type: 'html5'
               };
    
               this.sounds.push(audio);
    
           } else {
    
               this.nativeAudio.preloadSimple(key, asset);
    
               let audio = {
                   key: key,
                   asset: key,
                   type: 'native'
               };
    
               this.sounds.push(audio);
           }      
    
       }
       preloadN(key, asset) {
        
               if(this.audioType === 'html5'){
        
                   let audio = {
                       key: key,
                       asset: asset,
                       type: 'html5'
                   };
        
                   this.sounds.push(audio);
        
               } else {
        
                   this.nativeAudio.preloadSimple(key, asset);
        
                   let audio = {
                       key: key,
                       asset: key,
                       type: 'native'
                   };
        
                   this.sounds.push(audio);
               }      
        
           }
           playN(key){
            
                   let audio = this.sounds.find((sound) => {
                       return sound.key === key;
                   });
            
                   if(audio.type === 'html5'){
            
                       let audioAsset = new Audio(audio.asset);
                       audioAsset.play();
            
                   } else {
            
                       this.nativeAudio.play(audio.asset).then((res) => {
                           console.log(res);
                       }, (err) => {
                           console.log(err);
                       });
            
                   }
            
               }
    
       play(key){
    
           let audio = this.sounds.find((sound) => {
               return sound.key === key;
           });
    
           if(audio.type === 'html5'){
    
               let audioAsset = new Audio(audio.asset);
               audioAsset.play();
    
           } else {
    
               this.nativeAudio.play(audio.asset).then((res) => {
                   console.log(res);
               }, (err) => {
                   console.log(err);
               });
    
           }
    
       }

}
