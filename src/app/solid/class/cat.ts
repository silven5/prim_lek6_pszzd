import { IRun } from './../Interface/IRun';

import { ISpeak } from '../Interface/ISpeak';
import { Pet } from './pet';

export class Cat extends Pet implements IRun, ISpeak {
  speak() {
    console.log('Мяв-Мяв');
  }
  run() {
    console.log('Бігу  зі швидкістю 15 км/ч');
  }

  bringMouse() {
    console.log('Вмію ловити мишей');
  }
}
