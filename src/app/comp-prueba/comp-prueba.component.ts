import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-prueba',
  templateUrl: './comp-prueba.component.html',
  styleUrls: ['./comp-prueba.component.scss']
})
export class CompPruebaComponent implements OnInit {
  nombre: string;

  constructor() {
    this.nombre = 'Mundo';
   }

  ngOnInit(): void {
  }

}
