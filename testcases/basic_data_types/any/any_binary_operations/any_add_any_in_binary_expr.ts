/*
 * Copyright (C) 2023 Intel Corporation.  All rights reserved.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 */

export function addAnyInBinaryExpr() {
    let a: any = 1;
    let b: any;
    let c: any = 100;
    b = (a + 1) * c;
    console.log(b);
    
    let str1: any = "str11";
    let str2: any;
    let str3: any = "str33";
    str2 = (str1 + "a") + str3;
    console.log(str2);
}