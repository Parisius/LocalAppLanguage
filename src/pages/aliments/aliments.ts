import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SmartAudioProvider } from '../../providers/smart-audio/smart-audio';

@Component({
  selector: 'page-aliments',
  templateUrl: 'aliments.html'
})
export class AlimentsPage {

  constructor(public navCtrl: NavController, public smartAudio: SmartAudioProvider) {
  }
  
  playma()
  {
    this.smartAudio.play('ma');
  }

  playha()
  {
    this.smartAudio.play('ha');
  }

  playnp()
  {
    this.smartAudio.play('np');
  }

  plaync()
  {
    this.smartAudio.play('nc');
  }

  playig()
  {
    this.smartAudio.play('ig');
  }


  playpi()
  {
    this.smartAudio.play('pi');
  }

  playoe()
  {
    this.smartAudio.play('oe');
  }

  playga()
  {
    this.smartAudio.play('ga');
  }

  playgo()
  {
    this.smartAudio.play('go');
  }

  playgi()
  {
    this.smartAudio.play('gi');
  }
}
