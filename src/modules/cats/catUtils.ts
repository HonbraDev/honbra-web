export const getFsImagePath = (name: string) => `public/img/cats/${name}`;
export const getImagePath = (name: string) => `/img/cats/${name}`;

export const arrayRandom = <T extends any>(array: T[]) =>
  array[Math.floor(Math.random() * array.length)];
