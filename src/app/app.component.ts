import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CarritoFrontend';
  carritoCompras: any = null;

  /**
   * 
   * @param carrito 
   * Se usara para eliminar el carro cuando vuelva a null
   */
  seleccionCarro(carrito:any){
    this.carritoCompras = carrito;
  }
}



