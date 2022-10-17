export interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

export type MyOmit<T extends Object, U extends keyof T> = {
  // [p in keyof T as p extends U ? never : p]: T[p];
  [p in Exclude<keyof T, U>]: T[p];
};
export type TodoPreview = MyOmit<Todo, 'description' | 'title'>;

const todo: TodoPreview = {
  completed: false,
};
