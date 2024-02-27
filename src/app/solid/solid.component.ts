import { Component } from '@angular/core';
import { Parrot } from './class/parrot';
import { Fish } from './class/fish';
import { Cat } from './class/cat';
import { Dog } from './class/dog';
import { Show_console } from './class/show_console';

@Component({
  selector: 'app-solid',
  standalone: true,
  imports: [],
  templateUrl: './solid.component.html',
  styleUrl: './solid.component.css',
})
export class SolidComponent {
  //Приклад з попередньої лекції. Приклад1
  ras_interface() {
    let show = new Show_console();

    let dog = new Dog('Собака', 'Рада', 'Рижа', new Date(2019, 4, 12), show);
    dog.run();
    dog.speak();
    dog.bringToy('Кістка');
    dog.guard();
    let cat = new Cat('Кішка', 'Мурка', 'Рижа', new Date(2017, 2, 2), show);
    cat.run();
    cat.speak();
    cat.bringMouse();
    let parrot = new Parrot(
      'Папуга',
      'Попка',
      'Зелений',
      new Date(1996, 2, 2),
      show
    );
    parrot.fly();
    parrot.speak();
    let fish = new Fish('Рибка', 'Дорі', 'Золота', new Date(2020, 2, 2), show);
    fish.swim();
  }
}
