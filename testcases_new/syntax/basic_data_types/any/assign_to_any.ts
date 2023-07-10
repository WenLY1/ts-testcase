/*
 * Copyright (C) 2023 Intel Corporation.  All rights reserved.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 */

export function boxBooleanWithBinaryExpr() {
    let a: any;
    a = true;
    return a as boolean;
}

export function boxBooleanWithVarStmt() {
    let a: any = true;
    return a as boolean;
}

export function boxNumberWithBinaryExpr() {
    let a: any;
    a = 1;
    return a as number;
}

export function boxNumberWithVarStmt() {
    let a: any = 1;
    return a as number;
}

export function boxEmptyObj() {
    let a: any = {};
    return a;
}

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

export function boxObjWithBooleanProp() {
    let obj: any;
    obj = {
        c: true,
    };
    return obj.c as boolean;
}

export function boxObjWithNumberProp() {
    let obj: any = {
        a: 1,
    };
    return obj.a as number;
}

export function boxStringWithBinaryExpr() {
    let a: any;
    a = 'hello';
    return a.length;
}

export function boxStringWithVarStmt() {
    let a: any = 'hello';
    return a.length;
}

export function boxUndefined() {
    let a: any = undefined;
    console.log(a);
}

export function boxAny() {
    let a: any = 1;
    let c: any;
    c = a;
    return c as number;
}

interface I {
    x: number;
    y: boolean;
}

export function boxInterface() {
    const i: I = { x: 1, y: true };
    const a: any = i;
    const c = (a as I).y;
    return c;
}

export function boxNull() {
    let a: any = null;
    console.log(a);
}