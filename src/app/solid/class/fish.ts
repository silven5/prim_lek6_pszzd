import { ISwim } from './../Interface/ISweam';

import { Pet } from './pet';

export class Fish extends Pet implements ISwim {
  swim() {
    console.log('Я плаваю під водою');
  }
}
