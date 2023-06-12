class A {
    x = 10;
    static foo() {
        return 10;
    }
}

function test3() {
    const a: A | null = new A();    // A | null 类型应该被看作是A类型，不应该看作union
    return a.x;
}
