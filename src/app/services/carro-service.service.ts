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
}
