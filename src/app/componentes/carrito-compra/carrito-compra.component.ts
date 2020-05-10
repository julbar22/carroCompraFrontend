import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { CarroServiceService } from 'src/app/services/carro-service.service';

@Component({
  selector: 'app-carrito-compra',
  templateUrl: './carrito-compra.component.html',
  styleUrls: ['./carrito-compra.component.css']
})
export class CarritoCompraComponent implements OnInit {

  public listaProductos: any = [];
  @Input("carroSeleccionado") public carroSeleccionado: any;
  @Output("seleccionCarro") seleccionCarro = new EventEmitter<any>()
  public listaProductosSeleccionados: Array<any> = [];
  public totalCompra: any = null;


  constructor(private carroService: CarroServiceService) { }


  ngOnInit() {
    this.carroService.listaProductos().subscribe(productos => {
      this.listaProductos = productos;
    });
  }

  agregarProducto(producto) {
    const indexProducto: number = this.listaProductosSeleccionados.findIndex(productoLista => productoLista.id == producto.id);
    if (indexProducto != -1) {
      this.listaProductosSeleccionados[indexProducto].cantidad++;
    } else {
      this.listaProductosSeleccionados.push({
        nombre: producto.nombre,
        valor: producto.valor,
        cantidad: 1,
        id: producto.id
      })
    }
  }

  eliminarProducto(producto) {
    const indexProducto: number = this.listaProductosSeleccionados.findIndex(productoLista => productoLista.id == producto.id);
    if (this.listaProductosSeleccionados[indexProducto].cantidad > 1) {
      this.listaProductosSeleccionados[indexProducto].cantidad--;
    } else {
      this.listaProductosSeleccionados.splice(indexProducto, 1);
    }
  }

  consultarTotal() {
   // this.carroService.
  }
}
