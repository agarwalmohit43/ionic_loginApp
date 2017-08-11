import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  @ViewChild('username') uname;
  @ViewChild('password') password;
  @ViewChild('password2') password2;

  constructor(private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams,  public alertCtrl: AlertController) {
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
    console.log('ionViewDidLoad RegisterPage');
  }

  registerUser(){
    this.fire.auth.createUserWithEmailAndPassword(this.uname.value, this.password.value).then(data => {
      // console.log('got data',data);
      this.alert('Registration','Success');
    }).catch(error => {
      //console.log('got an error',error);
      this.alert('Registration','Un-Success');
    });


  }

}
