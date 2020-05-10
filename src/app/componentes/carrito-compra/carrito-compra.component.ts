import { Component, OnInit, Output, Input } from '@angular/core';
import { CarroServiceService } from 'src/app/services/carro-service.service';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-carrito-compra',
  templateUrl: './carrito-compra.component.html',
  styleUrls: ['./carrito-compra.component.css']
})
export class CarritoCompraComponent implements OnInit {

  public listaProductos: any = [];
  @Input("carroSeleccionado") public carroSeleccionado: any;
  @Output("seleccionCarro") seleccionCarro: EventEmitter;


  constructor(private carroService: CarroServiceService) { }


  ngOnInit() {
    this.carroService.listaProductos().subscribe(productos => {
      this.listaProductos = productos;
    });
  }

  agregarProducto(producto){

  }

}
