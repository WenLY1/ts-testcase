/*
 * Copyright (C) 2023 Intel Corporation.  All rights reserved.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 */

export function boxBooleanWithBinaryExpr() {
    let a: any;
    a = true;
    return a as boolean;
}