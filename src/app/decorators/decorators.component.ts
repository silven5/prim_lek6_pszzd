import { Component } from '@angular/core';
import { ExampleSqr } from './Class/ExampleSqr';
import { Person } from './Class/Person';
import { Greeter } from './Class/Greeter';

@Component({
  selector: 'app-decorators',
  standalone: true,
  imports: [],
  templateUrl: './decorators.component.html',
  styleUrl: './decorators.component.css',
})
export class DecoratorsComponent {
  ras() {
    var x = new ExampleSqr();
    var y = x.sqr(5); //  "Call: foo(23) => 46"
    var z = x.add(3, 5);
    let a = x.dob(1, 2, 3);
    let xx = x.div(8, 4);
    console.log(y);
    console.log(z);
    console.log(a);
  }
  //Приклад 5
  ras_decorator() {
    // let m = new Module()
    let p = new Person('Ola');
    p.print();
  }
  //Приклад 6
  ras_decorator_property() {
    let g = new Greeter('Олена');
    console.log(g.greet());
  }
}
