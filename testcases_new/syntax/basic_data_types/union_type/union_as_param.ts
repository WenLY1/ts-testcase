/*
 * Copyright (C) 2023 Xiaomi Corporation.  All rights reserved.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 */

interface IA{
    x: number;
}
class A {
    x = 10;
    static fooA() {
        return 10;
    }
}

function unionParam(parm: IA | A){
    console.log(parm.x);
}

export function testUnionParam(){
    let objA: A = new A();
    unionParam(objA);
}