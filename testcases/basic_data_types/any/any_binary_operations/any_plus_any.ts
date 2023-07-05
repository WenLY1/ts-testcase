/*
 * Copyright (C) 2023 Intel Corporation.  All rights reserved.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 */

export function addAnyAny() {
    let a: any = 1;
    let b: any = 2;
    let c: any = a + b;
    console.log(c);

    let str1: any = "str11";
    let str2: any = "str22";
    let str3: any = str1 + str2;
    console.log(str3);
}