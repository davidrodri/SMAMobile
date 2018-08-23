import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { ProductoProvider } from '../../providers/producto/producto';
import { IArticulo } from './articulo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  producto: IArticulo

  constructor(public navCtrl: NavController, private productoProvider: ProductoProvider) {

  }

  public buscarProducto(codigoBarra: string) {

    this.productoProvider.buscarProductoCodigoBarra(codigoBarra).subscribe((datos) => {
      this.producto = datos as IArticulo
      debugger
      if (datos.itemName == undefined) {
        this.producto = undefined;
      } else {
        
      }     
      console.log(this.producto);
    }),
      error => { console.log("Ocurrio un error:" + error) }

  }




};



