import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Flashlight } from '@ionic-native/flashlight';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private flashlight: Flashlight) {

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
