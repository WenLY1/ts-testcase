/*
 * Copyright (C) 2023 Intel Corporation.  All rights reserved.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 */

class A {
    x = 10;
    static foo() {
        return 10;
    }
}

export function test1() {
    const c: number | null = null;
    console.log(c);
}

export function test2() {
    const c: number | null = 10;
    return c as number;
}

export function test3() {
    const a: A | null = new A();
    return a.x;
}

export function test4() {
    const a: A | null | null = null;
    console.log(a);
}