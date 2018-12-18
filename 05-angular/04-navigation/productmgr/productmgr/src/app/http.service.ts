import { Injectable } from '@angular/core';
import { HttpClient}  from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  createProduct(newProduct){
    return this._http.post('/products', newProduct);
  }

  getProducts(){
    return this._http.get('/products');
  }

  deleteProduct(ProductID){
    return this._http.delete(`/products/${ProductID}`)
  }

  editOne(productID, changedProduct){
    return this._http.put(`/products/${productID}`,changedProduct)
  }

  getOne(productID){
    return this._http.get(`/products/${productID}`)
  }
}
