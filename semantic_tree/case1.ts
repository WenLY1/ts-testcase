export function array_every_number() {
    let arr = [1, 2, 3, 4, 5, 6];
    let result = arr.every(num => num > 3);
    // 参数列表省略后面的实参报错:
    // cannot make cast value from "Function(ValueType[ValueTypeKind[22]](13),NUMBER(6)) : BOOLEAN(7)" to  "Function(ValueType[ValueTypeKind[22]](13),NUMBER(6),NUMBER(6),Array<NUMBER(6)(OBJECT)>(-1)) : BOOLEAN(7)"
    let result1 = arr.every((num, index, arr) => num > 3);
    // 参数列表写完整没问题
    console.log(result);
}
