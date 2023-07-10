/*
 * Copyright (C) 2023 Xiaomi Corporation.  All rights reserved.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 */

function stringAsParam(str: string): string {
    return str;
}

export function basicString() {
    let str: string = "hello";
    console.log(stringAsParam(str));
}