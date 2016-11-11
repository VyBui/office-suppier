import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import firebase from 'firebase';

import { HomePage } from '../pages/home/home';


@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = HomePage;

  constructor(platform: Platform) {
    var config = {
        apiKey: "AIzaSyD94CtGDpSqq4IY2qc7g_NTsCMxXakYPvQ",
        authDomain: "footballtime-de7d5.firebaseapp.com",
        databaseURL: "https://footballtime-de7d5.firebaseio.com",
        storageBucket: "footballtime-de7d5.appspot.com",
        messagingSenderId: "760113240995"
    };
    firebase.initializeApp(config);

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
