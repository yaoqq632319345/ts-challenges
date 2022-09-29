type If<T extends boolean, U, P> = T extends true ? U : P;

type A = If<true, 'a', 'b'>; // expected to be 'a'
type B = If<false, 'a', 'b'>; // expected to be 'b'
