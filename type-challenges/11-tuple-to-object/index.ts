const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const; // 推断为具体类型

type result = TupleToObject<typeof tuple>; // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

type TupleToObject<T extends readonly any[]> = {
  [P in T[number]]: P;
};
