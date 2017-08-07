import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ProductsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ProductsProvider {

  products: any;
 
    constructor(public http: Http) {
    }
 
    load(){
 
        this.http.get('assets/data/products.json').map(res => res.json()).subscribe(data => {
            this.products = data.products;
        });
 
    }
}
