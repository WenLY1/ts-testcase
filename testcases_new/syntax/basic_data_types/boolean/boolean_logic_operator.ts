/*
 * Copyright (C) 2023 Intel Corporation.  All rights reserved.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 */

export function logicOr(x: number, y: number): boolean {
    const j5 = x,
        j6 = y;
    const i7 = j5 > 200 || j6 > 200;
    return i7;
}

export function logicAnd(x: number, y: number): boolean {
    const j7 = x,
        j8 = y;
    const i8 = j7 > 200 && j8 < 200;
    return i8;
}

export function conditionExpr(x: number, y: number): number {
    const j11 = x,
        j12 = y;
    let i10 = j11 > j12 ? 1 : 2; // not support const type, for its union type.
    return i10;
}

export function notNumber(x: number): boolean {
    const j1 = x;
    const i4 = !j1;
    return i4;
}

export function notBoolean(b: boolean): boolean {
    const j2 = b;
    const i5 = !j2;
    return i5;
}

export function notWithLogicOperator(x: number, y: number): boolean {
    let i = x,
        j = y;
    let k = !(!i && !j);
    return k;
}