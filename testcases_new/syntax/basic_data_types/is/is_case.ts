/*
 * Copyright (C) 2023 Xiaomi Corporation.  All rights reserved.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 */

function isString(value: any): value is string {
    return typeof value === 'string';
}

export function paramIsString(value: string | number) {
    if (isString(value)) {
        console.log('value is string')
    } else {
        console.log('value is number')
    }
}