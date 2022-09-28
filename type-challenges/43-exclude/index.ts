type Result = MyExclude<'a' | 'b' | 'c', 'a'>; // except 'b' | 'c'
type Result2 = Exclude<'a' | 'b' | 'c', 'a'>; // except 'b' | 'c'

//
type MyExclude<T, P> = T extends P ? never : T;
