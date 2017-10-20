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
  /**
   * Voyelles
   */
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
/**
 * Consonnes
 */
  playdd()
  {
    this.smartAudio.play('ɖ');
  }

  playb()
  {
    this.smartAudio.play('b');
  }

  playc()
  {
    this.smartAudio.play('c');
  }

  playd()
  {
    this.smartAudio.play('d');
  }

  playf()
  {
    this.smartAudio.play('f');
  }

  playg()
  {
    this.smartAudio.play('g');
  }

  playgb()
  {
    this.smartAudio.play('gb');
  }

  playh()
  {
    this.smartAudio.play('h');
  }

  playj()
  {
    this.smartAudio.play('j');
  }

  playk()
  {
    this.smartAudio.play('k');
  }
  playkp()
  {
    this.smartAudio.play('kp');
  }

  playl()
  {
    this.smartAudio.play('l');
  }

  playm()
  {
    this.smartAudio.play('m');
  }

  playn()
  {
    this.smartAudio.play('n');
  }

  playny()
  {
    this.smartAudio.play('ny');
  }

  playp()
  {
    this.smartAudio.play('p');
  }

  plays()
  {
    this.smartAudio.play('s');
  }

  playt()
  {
    this.smartAudio.play('t');
  }

  playv()
  {
    this.smartAudio.play('v');
  }

  playw()
  {
    this.smartAudio.play('w');
  }

  playx()
  {
    this.smartAudio.play('x');
  }

  playy()
  {
    this.smartAudio.play('y');
  }

  playz()
  {
    this.smartAudio.play('z');
  }
}
