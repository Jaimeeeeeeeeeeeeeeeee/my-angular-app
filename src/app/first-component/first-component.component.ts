import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {
  nombre: string = 'Jaime';
  num1: number = 0;
  num2: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
