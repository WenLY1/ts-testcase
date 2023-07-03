/*
 * Copyright (C) 2023 Intel Corporation.  All rights reserved.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 */

export function any_as_union_type() {
    let number_or_string : number | string = "a";
    let a: any = number_or_string;
    let b: number | string = a as number | string;
    console.log(b);
}