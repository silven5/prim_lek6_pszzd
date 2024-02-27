import { format, getFormat } from '../Decorator/format';

export class Greeter {
  @format('Привіт, %s')
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    let formatString = getFormat(this, 'greeting');
    return formatString.replace('%s', this.greeting);
  }
}
