export function log(target: Object, key: string, value: any) {
  return {
    value: function (...args: any[]) {
      // конвертуємо список аргументів, що передані у метод , в рядок
      var a = args.map((a) => JSON.stringify(a)).join();
      // викликаємо функцію та отримуємо її результат
      var result = value.value.apply(this, args);
      // let result = value.value;
      // переводимо результат у рядок
      var r = JSON.stringify(result);
      // Відображаємо результат виклику у консолі
      console.log(`Call: ${key}(${a}) => ${r}`);
      // повертаємо результат виконання
      return result;
    },
  };
}
