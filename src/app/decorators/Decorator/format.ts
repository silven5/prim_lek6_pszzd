import 'reflect-metadata';
const formatMetadataKey = Symbol('format');
const requiredMetadataKey = Symbol('required');

/**
 Декоратор @format ("Привіт,% s") - це фабрика декораторів.
 Коли викликається @format ("Привіт,% s"), він додає запис метаданих для властивості
 за допомогою функції Reflect.metadata з бібліотеки reflect-metadata.
 Коли викликається getFormat, він читає значення метаданих для формату.
 */
export function format(formatString: string) {
  return Reflect.metadata(formatMetadataKey, formatString);
}
export function getFormat(target: any, propertyKey: string) {
  return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
}
