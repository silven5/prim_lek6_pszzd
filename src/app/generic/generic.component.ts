import { Component } from '@angular/core';
import { Parrot } from '../solid/class/parrot';
import { Show_console } from '../solid/class/show_console';
import { Show_file } from '../solid/class/show_file';
import { Fish } from '../solid/class/fish';
import { Dog } from '../solid/class/dog';
import { Cat } from '../solid/class/cat';
import { PetCollection } from './class/PetCollection';
import { Pet } from '../solid/class/pet';

@Component({
  selector: 'app-generic',
  standalone: true,
  imports: [],
  templateUrl: './generic.component.html',
  styleUrl: './generic.component.css',
})
export class GenericComponent {
  logAndReturn<T>(arg: T): T {
    console.log(arg);
    return arg;
  }
  ras_generic1() {
    let result = this.logAndReturn('hello generics');
    let result1 = this.logAndReturn(25);
    let result2 = this.logAndReturn(Math.sin(2));
    let result3 = this.logAndReturn(true);
    let show = new Show_console();
    let parrot = new Parrot(
      'Папуга',
      'Попка',
      'Зелений',
      new Date(1996, 2, 2),
      show
    );
    let result4 = this.logAndReturn(parrot);
    let result5 = this.logAndReturn(show);
    let c = 25 + 3;
    let result6 = this.logAndReturn('Generic' + c);
    this.logAndReturn(33);
  }
  ras_generic2() {
    let show1 = new Show_file();
    let show = new Show_console();
    let collention: PetCollection<Pet> = new PetCollection();
    collention.add(
      new Fish('Рибка', 'Рада', 'Золота', new Date(2010, 4, 12), show1)
    );
    collention.add(
      new Dog('Собака', 'Рада2', 'Рижа', new Date(2019, 4, 12), show)
    );
    collention.add(
      new Cat('Кішка', 'Мурка', 'Рижа', new Date(2017, 2, 2), show)
    );
    let item = collention.getItemByName('Мурка');
    console.log(item);
    try {
      if (item as Dog) {
        let item1 = <Dog>item;
        if ('speak' in item1) item1.speak();
        if ('run' in item1) item1.run();
        // !Перевірка чи існує метод
        if ('guard' in item1) item1.guard();
      } else console.log('Це не собака');
    } catch {}
  }
}
