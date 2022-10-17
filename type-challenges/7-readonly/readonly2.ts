import { MyOmit } from './../3-omit/index';
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type MyReadonly2<T extends Object, U extends keyof T> = {
  readonly [readonlyK in U]: T[readonlyK];
} & MyOmit<T, U>;

export type test = MyReadonly2<Todo, 'title' | 'description'>;
const todo: test = {
  title: 'Hey',
  description: 'foobar',
  completed: false,
};

todo.title = 'Hello'; // Error: cannot reassign a readonly property
todo.description = 'barFoo'; // Error: cannot reassign a readonly property
todo.completed = true; // OK
