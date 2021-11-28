
export const getFsImagePath = (name: string) => `src/public/cat/images/${name}`;
export const getImagePath = (name: string) => `/cat/images/${name}`

export const arrayRandom = <T extends any>(array: T[]) =>
  array[Math.floor(Math.random() * array.length)];
