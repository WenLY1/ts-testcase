/*
 * Copyright (C) 2023 Xiaomi Corporation.  All rights reserved.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 */

class A {
    constructor() {

    }

    a() {
        console.log('a')
    }
}

class B extends A {
    constructor() {
        super()
    }

    b() {
        console.log('b')
    }

    hook() { }
}

class C extends B {
    constructor() {
        super()
    }

    c() {
        console.log('c')
    }

    hook() {
        console.log('hook')
    }
}

export function asClass() {
    let objc: C = new C()

    objc.c()

    let p: B = objc as B
    let cp: A = objc as A

    let child: B = cp as B
    let child1: C = p as C
    let child2: C = cp as C

    child2.c()
}
