class A {
    x = 10;
    static fooA() {
        return 10;
    }
}

class B {
    y = 20;
    static fooB() {
        return 20;
    }
}

export function unionClassNull() {
    const a: A | null = new A();
    return a.x;     // 10:f64
}

export function unionClassNumber() {
    let a: A | number = new A();
    return a.x;     // Exception: unreachable
}