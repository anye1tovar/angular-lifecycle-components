import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { CouterExampleComponent } from '../couter-example/couter-example.component';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
})
export class ExampleComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input('name') name: string = '';
  @ViewChild('viewChildExample') counter: CouterExampleComponent =
    new CouterExampleComponent();
  changes: Array<string> = [''];

  constructor() {
    // Aquí inyectamos las dependencias que necesita el componente
    console.log('%c constructor executed', 'color: blue');
  }

  ngOnChanges(changes: SimpleChanges): void {
    /* Aquí podemos obtener el valor actual y anterior de las 
     propiedades (Input)
    Podemos aplciar lógica de detección de cambios desde el padre
    */
    console.log('%c ngOnChanges executed', 'color: purple');
    this.changes.push(JSON.stringify(changes));
  }

  ngOnInit(): void {
    // Aquí inicializamos la data del componente
    console.log('%c ngOnInit executed', 'color: red');
  }

  ngDoCheck(): void {
    /*
    Se ejecuta SIEMPRE que exista un cambio en las propiedades 
    del componente
    Aqui aplicamos lógica de detección de cambios desde el componente 
    actual y el padre
    */
    console.log('%c ngOnDoCheck executed', 'color: green');
  }

  ngAfterContentInit(): void {
    /* Aquí podemos aplicar lógica si necesitamos saber cuando 
    el ng-content esté totalmente inicializado
    */
    console.log('%c ngAfterContentInit executed', 'color: yellow');
  }

  ngAfterContentChecked(): void {
    /* Aquí podemos aplicar lógica si necesitamos saber cuando 
    el ng-content cambie
    */ console.log('%c ngAfterContentChecked executed', 'color: brown');
  }

  ngAfterViewInit(): void {
    /* Aquí podemos aplicar lógica si necesitamos saber cuando 
    el elemento #viewChildExample esté totalmente inicializado
    */
    console.log('%c ngAfterViewInit executed', 'color: darkblue');
  }

  ngAfterViewChecked(): void {
    /* Aquí podemos aplicar lógica si necesitamos saber cuando 
    el #viewChildExample cambie
    */
    console.log('ngAfterViewChecked executed');
  }

  ngOnDestroy(): void {
    /* Aqui es buena práctica desuscribirnos de los observables 
    o cualquier limpieza personalizada para evitar pérdida de memoria.
    */
    console.log('%c ngOnDestroy executed', 'color: red');
  }

  setName(): void {
    this.name = 'Chapter Frontend';
  }

  inc(): void {
    this.counter?.increment();
  }
  dec(): void {
    this.counter?.decrement();
  }
}
