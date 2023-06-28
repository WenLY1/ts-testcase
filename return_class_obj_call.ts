/*
 * Copyright (C) 2023 XiaoMi Corporation.  All rights reserved.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 */

class A{
    say(){
        console.log("A");
    }
}
class B extends A{
    say(): void {
        console.log("B");
    }
}

function createObj(): A{
    let obj: A = new B();
    obj.say();
    return obj;
}
export function test(){
    let b = createObj();
    b.say();
}
