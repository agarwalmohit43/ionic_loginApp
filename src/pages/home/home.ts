import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { LoginPage} from '../login/login';
import {RegisterPage} from '../register/register';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {



  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }


  signin(){

   // console.log(this.uname.value,this.password.value);

   /* if(this.uname.value == "admin" && this.password.value == "admin")
    {
      let alert = this.alertCtrl.create({
        title: 'Login Successful!',
        subTitle: 'You are logged in!',
        buttons: ['OK']
      });
      alert.present();

    }*/

   this.navCtrl.push(LoginPage);
  }
  regiter(){
  this.navCtrl.push(RegisterPage);
  }
}
