import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoggedInPage} from "../logged-in/logged-in";

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('username') uname;
  @ViewChild('password') password;

  constructor(private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  alert(title,message){
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signinUser(){
    this.fire.auth.signInWithEmailAndPassword(this.uname.value, this.password.value).then(data =>
    {
     // console.log('got data',data);
      this.alert('Log-In','Success');
      this.navCtrl.setRoot(LoggedInPage);
    }).catch(error => {
      //console.log('got an error',error);
      this.alert('Log-In','Un-Success');
    });

  }
}
