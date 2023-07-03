/*
 * Copyright (C) 2023 Intel Corporation.  All rights reserved.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 */

class Person{
    age: number = 20;
    name: string = "Tom"
}

export function any_as_class() {
    let a: any = new Person();
    let b: Person = a as Person;
    console.log(b.age);
}