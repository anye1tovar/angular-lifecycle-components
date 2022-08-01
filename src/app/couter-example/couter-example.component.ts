import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-couter-example',
  templateUrl: './couter-example.component.html',
  styleUrls: ['./couter-example.component.scss'],
})
export class CouterExampleComponent implements OnInit {
  counter: number = 0;

  constructor() {}

  ngOnInit(): void {}

  increment(): void {
    this.counter++;
  }

  decrement(): void {
    this.counter--;
  }
}
