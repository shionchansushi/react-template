import { SomeType } from '../types/SomeType';

const sample = [
  new SomeType(1, 'Jack'),
  new SomeType(2, 'John', 'Not "Jhon"'),
  new SomeType(3, 'Joseph'),
];

export const GetSomeDataAll = (): SomeType[] => {
  return sample;
};

export const GetSomeById = (id: number): SomeType | undefined => {
  return sample.find((s) => s.getId() === id);
};
