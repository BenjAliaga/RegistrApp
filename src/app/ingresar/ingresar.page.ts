import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.page.html',
  styleUrls: ['./ingresar.page.scss'],
  
})
export class IngresarPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  valorDelInput: string = '';
  guardarEnLocalStorage() {
    localStorage.setItem('miDato', this.valorDelInput);
  }
  obtenerDesdeLocalStorage() {
    const valorGuardado = localStorage.getItem('miDato');
    if (valorGuardado) {
      this.valorDelInput = valorGuardado;
    }
  }
}
