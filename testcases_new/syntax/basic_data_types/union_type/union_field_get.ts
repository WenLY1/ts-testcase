/*
 * Copyright (C) 2023 Xiaomi Corporation.  All rights reserved.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 */

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
    return a.x;
}

export function unionClassNumber() {
    let a: A | number = new A();
    a = a.x + 10;
    return a;
}

export function unionClassClassNull() {
    let a: A | B | null = new A();
    let x = a.x;
    console.log(x);

    a = new B();
    let y = a.y;
    console.log(y);
}

export function unionClassClassString() {
    let a: A | B | string = new A();
    let x = a.x;
    console.log(x);

    a = new B();
    let y = a.y;
    console.log(y)

    a = "hello world";
    console.log(a);
}

function testAnyNull(): any | null {
    return null;
}

export function testFuncReturnAnyNull() {
    if (testAnyNull() === null) {
        console.log("is null");
    }
    else {
        console.log("not null");
    }
}