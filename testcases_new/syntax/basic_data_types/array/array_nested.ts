/*
 * Copyright (C) 2023 Intel Corporation.  All rights reserved.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 */

export function nestedArray() {
    const array1: Array<number[]> = new Array<number[]>(1);
    array1[0] = [100];
    return array1[0][0];
}

export function nestedLiteralArrayInOneLayer() {
    const array1 = [new Array<string>('hi')];
    array1[0][0] = 'hello';
    return array1;
}

export function nestedLiteralArrayInMulLayer() {
    const array1 = [new Array<Array<string>>(new Array<string>('hi'))];
    array1[0][0][0] = 'hello';
    return array1;
}

export function nestedLiteral() {
    const array1 = [
        [1, 2],
        [3, 4],
    ];
    return array1[1][0];
}