import { ISpeak } from './../Interface/ISpeak';
import { IFly } from './../Interface/IFly';

import { Pet } from './pet';

export class Parrot extends Pet implements IFly, ISpeak {
  speak() {
    console.log('Попка дурак');
  }

  fly() {
    console.log('Я вмію літати');
  }
}
