import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AccueilPage } from '../pages/accueil/accueil';
import { AlphabetPage } from '../pages/alphabet/alphabet';
import { ChiffresPage } from '../pages/chiffres/chiffres';
import { AlimentsPage } from '../pages/aliments/aliments';
import { PartagerPage } from '../pages/partager/partager';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SMS } from '@ionic-native/sms';
import { SocialSharing } from '@ionic-native/social-sharing';
import { NativeAudio } from '@ionic-native/native-audio';
import { SmartAudioProvider } from '../providers/smart-audio/smart-audio';
@NgModule({
  declarations: [
    MyApp,
    AccueilPage,
    AlphabetPage,
    ChiffresPage,
    AlimentsPage,
    PartagerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AccueilPage,
    AlphabetPage,
    ChiffresPage,
    AlimentsPage,
    PartagerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SMS,
    SocialSharing,
    NativeAudio,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SmartAudioProvider
  ]
})
export class AppModule {}