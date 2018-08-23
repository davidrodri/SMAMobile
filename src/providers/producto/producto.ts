import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IArticulo } from '../../pages/home/articulo';

import { Observable } from 'rxjs/Observable';

/*
  Generated class for the ProductoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductoProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ProductoProvider Provider');
  }

  buscarProductoCodigoBarra(codigoBarra:string): Observable<IArticulo>{
    return this.http.get<IArticulo>(`http://localhost:57111/api/producto/${codigoBarra}`);
  }

}
