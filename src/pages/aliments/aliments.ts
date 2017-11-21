import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SmartAudioProvider } from '../../providers/smart-audio/smart-audio';

@Component({
  selector: 'page-aliments',
  templateUrl: 'aliments.html'
})
export class AlimentsPage {

  constructor(public navCtrl: NavController, public smartAudio: SmartAudioProvider) {
    smartAudio.preload('ma', 'assets/audioLib/food/ma.mp3');
    smartAudio.preload('ha', 'assets/audioLib/food/ha.mp3');
    smartAudio.preload('np', 'assets/audioLib/food/np.mp3');
    smartAudio.preload('nc', 'assets/audioLib/food/nc.mp3');
    smartAudio.preload('ig', 'assets/audioLib/food/ig.mp3');
    smartAudio.preload('pi', 'assets/audioLib/food/pi.mp3');
    smartAudio.preload('oe', 'assets/audioLib/food/oe.mp3');
    smartAudio.preload('fe', 'assets/audioLib/food/fe.mp3');
    smartAudio.preload('go', 'assets/audioLib/food/go.mp3');
    smartAudio.preload('gi', 'assets/audioLib/food/gi.mp3');
    smartAudio.preload('ri', 'assets/audioLib/food/ri.mp3');
    smartAudio.preload('ba', 'assets/audioLib/food/ba.mp3');
    smartAudio.preload('ci', 'assets/audioLib/food/ci.mp3');
    smartAudio.preload('po', 'assets/audioLib/food/po.mp3');
    smartAudio.preload('cr', 'assets/audioLib/food/cr.mp3');
    smartAudio.preload('cre', 'assets/audioLib/food/cre.mp3');
    smartAudio.preload('poi', 'assets/audioLib/food/poi.mp3');
    smartAudio.preload('man', 'assets/audioLib/food/man.mp3');
    smartAudio.preload('oi', 'assets/audioLib/food/oi.mp3');
    smartAudio.preload('to', 'assets/audioLib/food/to.mp3');
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
    this.smartAudio.play('fe');
  }

  playgo()
  {
    this.smartAudio.play('go');
  }

  playgi()
  {
    this.smartAudio.play('gi');
  }

  playba()
  {
    this.smartAudio.play('ba');
  }
  playci()
  {
    this.smartAudio.play('ci');
  }
  playcr()
  {
    this.smartAudio.play('cr');
  }
  playcre()
  {
    this.smartAudio.play('cre');
  }
  playman()
  {
    this.smartAudio.play('man');
  }
  playoi()
  {
    this.smartAudio.play('oi');
  }
  playto()
  {
    this.smartAudio.play('to');
  }

  playpo()
  {
    this.smartAudio.play('po');
  }

  playpoi()
  {
    this.smartAudio.play('poi');
  }
  playri()
  {
    this.smartAudio.play('ri');
  }
}
