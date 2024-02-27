import { IRun } from './../Interface/IRun';
import { ISpeak } from './../Interface/ISpeak';
import { IToy } from './../Interface/IToy';

import { Pet } from './pet';

export class Dog extends Pet implements IRun, IToy, ISpeak {
  speak() {
    console.log('Гав-гав');
  }

  run() {
    console.log('Бігу зі швидкістю 10 км/ч');
    return 'V=10';
  }
  bringToy(toy: string) {
    console.log('Моя улюблена іграшка ' + toy);
  }
  guard() {
    console.log('Вмію охраняти помешкання');
  }
}
