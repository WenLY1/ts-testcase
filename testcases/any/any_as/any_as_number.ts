/*
 * Copyright (C) 2023 Intel Corporation.  All rights reserved.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 */

export function any_as_number() {
    let a: any = 1;
    let b: number = a as number;
    console.log(b);
}