/*
 * Copyright (C) 2023 Intel Corporation.  All rights reserved.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 */

export function anyNullUndefinedCmp() {
    const n1: any = null,
        n2: any = null;
    const u1: any = undefined,
        u2: any = undefined;

    console.log(n1 == n2); // true
    console.log(n1 == u1); // false
    console.log(u1 == u2); // true

    console.log(u1 === undefined); // true
    console.log(u1 !== undefined); // false
    console.log(n2 === null); // true
    console.log(n2 !== null); // false
}