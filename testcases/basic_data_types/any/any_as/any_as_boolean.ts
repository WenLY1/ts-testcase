/*
 * Copyright (C) 2023 Intel Corporation.  All rights reserved.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 */

export function any_as_boolean() {
    let a: any = true;
    let b: boolean = a as boolean;
    console.log(b);
}