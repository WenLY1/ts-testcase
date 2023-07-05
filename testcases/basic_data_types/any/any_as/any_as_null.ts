/*
 * Copyright (C) 2023 Intel Corporation.  All rights reserved.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 */

export function any_as_null() {
    let a: any = null;
    let b = a as null;
    console.log(b);
}