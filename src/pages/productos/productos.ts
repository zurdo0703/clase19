import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';

@Component({
  selector: 'page-productos',
  templateUrl: 'productos.html'
})
export class ProductosPage {

  constructor(public navCtrl: NavController) {

  }

  openPage(page) {
  	console.log('hola',page);
  	switch (page) {
  		case "home":
  			this.navCtrl.push(HomePage);
  			break;
  			
  	}
  }

}
