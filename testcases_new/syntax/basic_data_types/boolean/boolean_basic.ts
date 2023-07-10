/*
 * Copyright (C) 2023 Intel Corporation.  All rights reserved.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 */

export function booleanBasic(b: boolean): boolean {
    const i1 = b;
    return i1;
}

export function booleanCmp(b: boolean) {
    const f1 = b;
    console.log(f1 !== false); // false
    console.log(f1 === false); // true
}