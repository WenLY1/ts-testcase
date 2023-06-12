 map<U>(callbackfn: (value: T, index: number, array: T[]) => U): U[];
 
 let array: Array<number> = [1, 2];
 array.map(xxx)
 /*
 此时map这个成员变量的returnType应该是Array<number>
 但是实际上，semantic tree中存储的是Array<TypeParameter>
 */
