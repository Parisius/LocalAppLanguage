import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SmartAudioProvider } from '../../providers/smart-audio/smart-audio';
@Component({
  selector: 'page-chiffres',
  templateUrl: 'chiffres.html'
})
export class ChiffresPage {

  constructor(public navCtrl: NavController, public smartAudio: SmartAudioProvider) {
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
