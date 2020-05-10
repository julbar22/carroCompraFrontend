import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CarroServiceService } from 'src/app/services/carro-service.service';


@Component({
  selector: 'app-form-creacion-carro',
  templateUrl: './form-creacion-carro.component.html',
  styleUrls: ['./form-creacion-carro.component.css']
})
export class FormCreacionCarroComponent implements OnInit {

  @Output("seleccionCarro") seleccionCarro = new EventEmitter<any>();
  constructor(private formBuilder: FormBuilder, private carritoService: CarroServiceService) { }

  public formGroup: FormGroup;
  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.formGroup = this.formBuilder.group({
      nombreUsuario: '',
      documentoUsuario: '',
      fechaCreacion: ''
    });
  }

  crearCarro() {
    const nombre = this.formGroup.controls['nombreUsuario'].value;
    const documento = this.formGroup.controls['documentoUsuario'].value;
    const fecha = this.formGroup.controls['fechaCreacion'].value;

    const request = {
      nombreUsuario: nombre,
      documentoUsuario: documento,
      fechaCreacion: fecha
    }
    this.carritoService.crearCarrito(request).subscribe(data => {
      this.seleccionCarro.emit(data);
    })


  }

}
