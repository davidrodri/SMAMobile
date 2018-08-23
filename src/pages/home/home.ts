import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private _productUrl ='./api/products/products.json';

  constructor(public navCtrl: NavController) {

  }

  
};



