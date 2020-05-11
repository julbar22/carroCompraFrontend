import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarroServiceService {

  urlBase: String = 'http://localhost:8080/carroCompras'
  constructor(private http: HttpClient) { }

  crearCarrito(request: any): Observable<any> {
    return this.http.post(this.urlBase + '/crear', request);
  }

  listaProductos(): Observable<any>{
    return this.http.get(this.urlBase+'/productos');
  }

  valorTotal(request: any): Observable<any>{
    return this.http.post(this.urlBase+'/consultarTotal',request);
  }

  comprar(request: any): Observable<any>{
    return this.http.post(this.urlBase+'/comprar',request);
  }

  eliminarCarro(idCarrito:string): Observable<any>{
    return this.http.delete(this.urlBase+'/eliminarCarrito/'+idCarrito);
  }
}
