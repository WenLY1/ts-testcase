/*
 * Copyright (C) 2023 Intel Corporation.  All rights reserved.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 */

export function anyCmp() {
    const a: any = 10,
        b: any = 10,
        b2: any = 11;
    const c: any = false,
        d: any = true,
        d2: any = false,
        e: any = '123',
        f: any = '123',
        f2: any = '234';

    console.log(c === d); // false
    console.log(c === d2); // true
    console.log(a === b); // true
    console.log(a === b2); // false
    console.log(a <= b); // true
    console.log(a > b); // false

    console.log(e > f); // false
    console.log(e < f2); // true
    console.log(e === f); // true
    console.log(e != f); // false
    console.log(e === f2); // false
}