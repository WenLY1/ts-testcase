/*
 * Copyright (C) 2023 Xiaomi Corporation.  All rights reserved.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 */

export function stringTemplate(){
    let a = 100;
    let str: string = `the value of a is: ${a}`;
    console.log(str);
}