import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SmartAudioProvider } from '../../providers/smart-audio/smart-audio';
@Component({
  selector: 'page-chiffres',
  templateUrl: 'chiffres.html'
})
export class ChiffresPage {

  constructor(public navCtrl: NavController, public smartAudio: SmartAudioProvider) {
    smartAudio.preload('0', 'assets/audioLib/chiffre/0.mp3');
    smartAudio.preload('1', 'assets/audioLib/chiffre/1.mp3');
    smartAudio.preload('2', 'assets/audioLib/chiffre/2.mp3');
    smartAudio.preload('3', 'assets/audioLib/chiffre/3.mp3');
    smartAudio.preload('4', 'assets/audioLib/chiffre/4.mp3');
    smartAudio.preload('5', 'assets/audioLib/chiffre/5.mp3');
    smartAudio.preload('6', 'assets/audioLib/chiffre/6.mp3');
    smartAudio.preload('7', 'assets/audioLib/chiffre/7.mp3');
    smartAudio.preload('8', 'assets/audioLib/chiffre/8.mp3');
    smartAudio.preload('9', 'assets/audioLib/chiffre/9.mp3');
    smartAudio.preload('10', 'assets/audioLib/chiffre/10.mp3');
    smartAudio.preload('11', 'assets/audioLib/chiffre/11.mp3');
    smartAudio.preload('12', 'assets/audioLib/chiffre/12.mp3');
    smartAudio.preload('13', 'assets/audioLib/chiffre/13.mp3');
    smartAudio.preload('14', 'assets/audioLib/chiffre/14.mp3');
    smartAudio.preload('15', 'assets/audioLib/chiffre/15.mp3');
    smartAudio.preload('16', 'assets/audioLib/chiffre/16.mp3');
    smartAudio.preload('17', 'assets/audioLib/chiffre/17.mp3');
    smartAudio.preload('18', 'assets/audioLib/chiffre/18.mp3');
    smartAudio.preload('19', 'assets/audioLib/chiffre/19.mp3');
    smartAudio.preload('20', 'assets/audioLib/chiffre/20.mp3');
    smartAudio.preload('21', 'assets/audioLib/chiffre/21.mp3');
    smartAudio.preload('22', 'assets/audioLib/chiffre/22.mp3');
    smartAudio.preload('23', 'assets/audioLib/chiffre/23.mp3');
    smartAudio.preload('24', 'assets/audioLib/chiffre/24.mp3');
    smartAudio.preload('25', 'assets/audioLib/chiffre/25.mp3');
    smartAudio.preload('26', 'assets/audioLib/chiffre/26.mp3');
    smartAudio.preload('27', 'assets/audioLib/chiffre/27.mp3');
    smartAudio.preload('28', 'assets/audioLib/chiffre/28.mp3');
    smartAudio.preload('29', 'assets/audioLib/chiffre/29.mp3');
    smartAudio.preload('30', 'assets/audioLib/chiffre/30.mp3');
    smartAudio.preload('40', 'assets/audioLib/chiffre/40.mp3');
    smartAudio.preload('50', 'assets/audioLib/chiffre/50.mp3');
    smartAudio.preload('60', 'assets/audioLib/chiffre/60.mp3');
    smartAudio.preload('70', 'assets/audioLib/chiffre/70.mp3');
    smartAudio.preload('80', 'assets/audioLib/chiffre/80.mp3');
    smartAudio.preload('90', 'assets/audioLib/chiffre/90.mp3');
    smartAudio.preload('100', 'assets/audioLib/chiffre/100.mp3');
  }
  
  play0()
  {
    this.smartAudio.play('0');
  }

  play1()
  {
    this.smartAudio.play('1');
  }

  play2()
  {
    this.smartAudio.play('2');
  }

  play3()
  {
    this.smartAudio.play('3');
  }

  play4()
  {
    this.smartAudio.play('4');
  }
  play5()
  {
    this.smartAudio.play('5');
  }

  play6()
  {
    this.smartAudio.play('6');
  }

  play7()
  {
    this.smartAudio.play('7');
  }
  play8()
  {
    this.smartAudio.play('8');
  }

  play9()
  {
    this.smartAudio.play('9');
  }
  play10()
  {
    this.smartAudio.play('10');
  }
  play11()
  {
    this.smartAudio.play('11');
  }
  play12()
  {
    this.smartAudio.play('12');
  }
  play13()
  {
    this.smartAudio.play('13');
  }

  play14()
  {
    this.smartAudio.play('14');
  }
  play15()
  {
    this.smartAudio.play('15');
  }
  play16()
  {
    this.smartAudio.play('16');
  }
  play17()
  {
    this.smartAudio.play('17');
  }

  play18()
  {
    this.smartAudio.play('18');
  }
  play19()
  {
    this.smartAudio.play('19');
  }
  play20()
  {
    this.smartAudio.play('20');
  }
  play21()
  {
    this.smartAudio.play('21');
  }
  play22()
  {
    this.smartAudio.play('22');
  }
  play23()
  {
    this.smartAudio.play('23');
  }
  play24()
  {
    this.smartAudio.play('24');
  }
  play25()
  {
    this.smartAudio.play('25');
  }
  play26()
  {
    this.smartAudio.play('26');
  }
  play27()
  {
    this.smartAudio.play('27');
  }
  play28()
  {
    this.smartAudio.play('28');
  }
  play29()
  {
    this.smartAudio.play('29');
  }
  play30()
  {
    this.smartAudio.play('30');
  }
  play40()
  {
    this.smartAudio.play('40');
  }
  play50()
  {
    this.smartAudio.play('50');
  }
  play60()
  {
    this.smartAudio.play('60');
  }
  play70()
  {
    this.smartAudio.play('70');
  }
  play80()
  {
    this.smartAudio.play('80');
  }
  play90()
  {
    this.smartAudio.play('90');
  }
  play100()
  {
    this.smartAudio.play('100');
  }
  
}
