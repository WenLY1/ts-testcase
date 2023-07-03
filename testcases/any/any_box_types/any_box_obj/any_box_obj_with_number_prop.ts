/*
 * Copyright (C) 2023 Intel Corporation.  All rights reserved.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 */

export function boxObjWithNumberProp() {
    let obj: any = {
        a: 1,
    };
    return obj.a as number;
}
