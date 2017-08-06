import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Flashlight } from '@ionic-native/flashlight';
import { HeaderColor } from '@ionic-native/header-color';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private headerColor: HeaderColor, public navCtrl: NavController, private flashlight: Flashlight) {
  	this.headerColor.tint('#222');
  }

  ionViewWillEnter() {
  	this.lightOn();
  }

  lightOn(){
  	this.flashlight.switchOn();
  	var lightOn = document.getElementById('lightOn');
  	var lightOff = document.getElementById('lightOff');
    if (lightOn.style.display === 'none') {
        lightOn.style.display = 'block';
    } else {
        lightOn.style.display = 'none';
        lightOff.style.display = 'block';
    }
  }
  lightOff(){
  	this.flashlight.switchOff();
  	var lightOn = document.getElementById('lightOn');
  	var lightOff = document.getElementById('lightOff');
    if (lightOff.style.display === 'none') {
        lightOff.style.display = 'block';
    } else {
        lightOff.style.display = 'none';
        lightOn.style.display = 'block';
    }
  }
}
