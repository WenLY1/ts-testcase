class A15 {
    static test() {
        return 1;
    }
    constructor() {}
}

export function staticMethodWithOverwrite() {
    return A15.test();
}

/*
A15.test() ===> DynamicCallValue
这个DynamicCallValue的funcType：
    argumentsType: ArrayType {kind: 13, typeId: -1, meta: ObjectDescription ...}
    returnType: PrimitiveType {kind: 10, typeId: 10}
存储在meta信息里的test成员的valueType：
    Function() : NUMBER(6)
*/
