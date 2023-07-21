
class A {
    test() {
        console.log('a');
    }
}

class B extends A {
    test() {
        console.log('b');
    }
}

class C extends B {
    test() {
        console.log("c");
    }
}

class D extends A {
    test() {
        console.log("d");
    }
}

class E extends A {
    test() {
        console.log("e");
    }
}

function foo(n: number) {
    let a = new A();
    if (n > 10) {
        a = new B();
    }
    if (n > 20) {
        a = new C();
    }
    if(n > 30 ) {
        a = new D();
    }
    if(n > 40 ) {
        a = new E();
    }
    return a;
}

export function bar() {
    let a = foo(1); // 输出a
    a.test();
    a = foo(20);    // 输出a，下同
    a.test();
    a = foo(30);
    a.test();
    a = foo(40);
    a.test();
    a = foo(50);
    a.test();
}
