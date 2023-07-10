/*
 * Copyright (C) 2023 Xiaomi Corporation.  All rights reserved.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 */

type numberOrString = number | string;

export function unionTypeAlias() {
    let val: numberOrString = "hello";
    console.log(val);

    val = 10;
    console.log(val);
}