/*
 * Copyright (C) 2023 Intel Corporation.  All rights reserved.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 */

export function any_as_string() {
    let a: any = 'hello world';
    let b: string = a as string;
    console.log(b);
}