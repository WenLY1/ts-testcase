/*
 * Copyright (C) 2023 Intel Corporation.  All rights reserved.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 */

export function boxObjWithBooleanProp() {
    let obj: any;
    obj = {
        c: true,
    };
    return obj.c as boolean;
}