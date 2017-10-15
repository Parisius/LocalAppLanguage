import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlphabetPage } from '../alphabet/alphabet';
import { ChiffresPage } from '../chiffres/chiffres';
import { AlimentsPage } from '../aliments/aliments';
import { PartagerPage } from '../partager/partager';

@Component({
  selector: 'page-accueil',
  templateUrl: 'accueil.html'
})
export class AccueilPage {

  constructor(public navCtrl: NavController) {
  }
  goToAlphabet(params){
    if (!params) params = {};
    this.navCtrl.push(AlphabetPage);
  }goToChiffres(params){
    if (!params) params = {};
    this.navCtrl.push(ChiffresPage);
  }goToAliments(params){
    if (!params) params = {};
    this.navCtrl.push(AlimentsPage);
  }goToPartager(params){
    if (!params) params = {};
    this.navCtrl.push(PartagerPage);
  }
}
