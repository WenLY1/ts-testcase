/*
 * Copyright (C) 2023 Intel Corporation.  All rights reserved.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 */

export function boxNestedObj() {
    let obj: any;
    obj = {
        a: 1,
        c: true,
        d: {
            e: 1,
        },
    };
    return obj.d.e as number;
}