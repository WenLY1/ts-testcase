interface I2 {
    y: boolean;
    x: number;
    z: string;
}

export function infcAndInfc() {
    const i: I2 = { y: true, x: 10, z: 'str' };
    return i.x;      
    // 获取x之后本来就是number
    // 但是又会被包装成一个 [CastValue(ANY_CAST_VALUE) From "ANY(10)" To "NUMBER(6)"]
}
/*
[RETURN]
    [CastValue(ANY_CAST_VALUE) From "ANY(10)" To "NUMBER(6)"]
        [DynamicGet x]
            [VarValue(LOCAL_CONST): ...
*/
