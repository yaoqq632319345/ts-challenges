import { Equal } from '@type-challenges/utils';

export type isPillarMen = Includes<
  ['Kars', 'Esidisi', 'Wamuu', 'Santana'],
  'Dio'
>; // expected to be `false`
// your answers
type Includes<T extends readonly any[], U> = T extends [
  infer first,
  ...infer rest
]
  ? Equal<first, U> extends true
    ? true
    : Includes<rest, U>
  : false;
