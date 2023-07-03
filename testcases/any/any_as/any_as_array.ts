/*
 * Copyright (C) 2023 Intel Corporation.  All rights reserved.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 */

export function any_as_array() {
    let a: any = [1,2,3];
    let b: number[] = a as number[];
    console.log(b[0]);
}