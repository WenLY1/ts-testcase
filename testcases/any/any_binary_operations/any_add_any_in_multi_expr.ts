/*
 * Copyright (C) 2023 Intel Corporation.  All rights reserved.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 */

export function addAnyInMulExpr() {
    let a: any = 1;
    let c: any;
    c = 2 + a + 6;
    console.log(c);
    
    let str1: any = "str11";
    let str2: any;
    str2 = "a" + str1 + "c";
    console.log(str2);
}