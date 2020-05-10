import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormCreacionCarroComponent } from './componentes/form-creacion-carro/form-creacion-carro.component';
import { CarritoCompraComponent } from './componentes/carrito-compra/carrito-compra.component';

@NgModule({
  declarations: [
    AppComponent,
    FormCreacionCarroComponent,
    CarritoCompraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
