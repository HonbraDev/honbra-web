export const getImagePath = (name: string) => `/cat/images/${name}`;
export const arrayRandom = <T extends any>(array: T[]) =>
  array[Math.floor(Math.random() * array.length)];
export const arrayLast = <T extends any>(array: T[]) => array[array.length - 1];
