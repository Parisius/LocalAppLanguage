import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SmartAudioProvider } from '../../providers/smart-audio/smart-audio';

@Component({
  selector: 'page-alphabet',
  templateUrl: 'alphabet.html'
})
export class AlphabetPage {

  constructor(public navCtrl: NavController, public smartAudio: SmartAudioProvider) 
  {
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
