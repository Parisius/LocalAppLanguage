import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SmartAudioProvider } from '../../providers/smart-audio/smart-audio';

@Component({
  selector: 'page-alphabet',
  templateUrl: 'alphabet.html'
})
export class AlphabetPage {

  constructor(public navCtrl: NavController, public smartAudio: SmartAudioProvider) {
   
  }

  playe()
  {
    this.smartAudio.play('e');
  }
  playa()
  {
    this.smartAudio.play('a');
  }
  playan()
  {
    this.smartAudio.play('an');
  }
  playi()
  {
    this.smartAudio.play('i');
  }
  playin()
  {
    this.smartAudio.play('in');
  }
  playo()
  {
    this.smartAudio.play('o');
  }
  playon()
  {
    this.smartAudio.play('on');
  }
  playu()
  {
    this.smartAudio.play('u');
  }
  playun()
  {
    this.smartAudio.play('un');
  }
  playE()
  {
    this.smartAudio.play('ɛ');
  }
  playEn()
  {
    this.smartAudio.play('ɛn');
  }
  playN()
  {
    this.smartAudio.play('ɔ');
  }
  playNo()
  {
    this.smartAudio.play('ɔn');
  }

  
}
