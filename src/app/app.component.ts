import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name: string = '';
  content: string = 'Element 1';
  hide: boolean = false;

  setGrandchild(): void {
    const n: number = parseInt(this.content.split(' ')[1], 10);
    this.content = 'Element ' + (n + 1);
  }

  hideChild(): void {
    this.hide = true;
  }
}
