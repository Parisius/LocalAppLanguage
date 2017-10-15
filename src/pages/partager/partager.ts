import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';
import { SocialSharing } from '@ionic-native/social-sharing';
import { ToastController } from 'ionic-angular';


@Component({
  selector: 'page-partager',
  templateUrl: 'partager.html'
})
export class PartagerPage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private sms: SMS,
    private socialSharing: SocialSharing, public toastCtrl: ToastController) 
    {
  
    }
    presentToast( messaget: string) {
      let toast = this.toastCtrl.create({
        message: messaget,
        duration: 3000
      });
      toast.present();
    }
  sendSMS( numero: string)
  {
     var options={
           replaceLineBreaks: false, // true to replace \n by a new line, false by default
         android: {
               intent: 'INTENT'  // Opens Default sms app
              //intent: '' // Sends sms without opening default sms app
           }//
    }
    this.sms.send(numero, 'Link to our app',options)
      .then(()=>{
       this.presentToast( "Success");
        //alert("success");
      },()=>{
        this.presentToast( "Echec");
      //alert("failed");
      });
  }

  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Envoyer le lien via SMS',
      message: "Numéro du destinataire",
      inputs: [
        {
          name: 'numero',
          placeholder: 'Numéro'
        },
      ],
      buttons: [
        {
          text: 'Annuler',
          handler: data => {
            console.log('Cancel clicked');
            console.log(data.numero);
          }
        },
        {
          text: 'Envoyer',
          handler: data => {
            console.log('Saved clicked');
          this.sendSMS(data.numero);
          }, 
        }
      ]
    });
    prompt.present();
  }

  regularShare()
  {
    // share(message, subject, file, url)
    this.socialSharing.share("Testing, sharing our app", null, null, 'default.link.com');
  }

 
}
