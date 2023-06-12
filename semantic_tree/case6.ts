class A {
    static a = 10;
}

function getStatic() {
    return A.a;   
    // 应该是一个number类型，但会返回[CastValue(ANY_CAST_VALUE) From "ANY(10)" To "NUMBER(6)"]
}
/*
[CastValue(ANY_CAST_VALUE) From "ANY(10)" To "NUMBER(6)"]
    [DynamicGet a]
            [VarValue(GLOBAL_CONST): ...
*/
