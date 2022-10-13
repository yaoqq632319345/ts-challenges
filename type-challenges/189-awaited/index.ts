export type ExampleType = Promise<string>;
export type Result = MyAwaited<ExampleType>; // string
export type Result2 = MyAwaited<Promise<ExampleType>>; // string
export type Result3 = MyAwaited<Promise<Promise<ExampleType>>>; // string

type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer X>
  ? X extends Promise<unknown>
    ? MyAwaited<X>
    : X
  : never;
