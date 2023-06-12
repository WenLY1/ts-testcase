function array_concat_number() {
    let array1: number[] = [1, 2];
    let length: number = array1.concat(3, 4).length; // 访问length会生成DynamicGet 
    /* line3 会生成以下semantic value
    [DynamicGet length]
        [SHAPE_CALL Array<NUMBER(6)(OBJECT)>(-1)]
                [VarValue(LOCAL_VAR): Array<NUMBER(6)(OBJECT)>(-1) 2  ...
                [Literal NUMBER(6)  3]
                [Literal NUMBER(6)  4]
    */
    let len2 = array1.length;  // 访问length会生成ShapeGet 
    /* line11 会生成以下semantic value
    [ShapeGet 0]
               [VarValue(LOCAL_VAR): Array<NUMBER(6)(OBJECT)>(-1) 2  ...
    */
}
