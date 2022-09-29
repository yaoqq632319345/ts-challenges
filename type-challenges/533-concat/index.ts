export type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U];

export type Result = Concat<[1], [2]>; // expected to be [1, 2]
export type test = Concat<[1, 2, 'a'], ['b']>;
