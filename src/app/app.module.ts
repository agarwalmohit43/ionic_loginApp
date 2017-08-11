import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { LoginPage} from '../pages/login/login';
import {RegisterPage} from '../pages/register/register';
import {LoggedInPage} from "../pages/logged-in/logged-in";
import { AngularFireModule } from 'angularfire2';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireAuthModule } from 'angularfire2/auth';

const firebaseAuth ={
  apiKey: "AIzaSyBkG-1ExBENiGszKI_T_LYliA2fGk8J0_E",
  authDomain: "test-3efa2.firebaseapp.com",
  databaseURL: "https://test-3efa2.firebaseio.com",
  projectId: "test-3efa2",
  storageBucket: "",
  messagingSenderId: "962268141709"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    LoginPage,
    LoggedInPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    LoginPage,
    LoggedInPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
