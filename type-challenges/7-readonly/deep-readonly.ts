export type X = {
  x: {
    a: 1;
    b: 'hi';
  };
  y: 'hey';
};

export type Expected = {
  readonly x: {
    readonly a: 1;
    readonly b: 'hi';
  };
  readonly y: 'hey';
};

type DeepReadonly<T> = T extends Object
  ? {
      readonly [key in keyof T]: DeepReadonly<T[key]>;
    }
  : T;

export type Todo = DeepReadonly<X>; // should be same as `Expected`
