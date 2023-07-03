/*
 * Copyright (C) 2023 Intel Corporation.  All rights reserved.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 */

interface IPerson{
    age: number;
    name: string;
}

export function any_as_interface() {
    let a: any = {age: 20, name: "Tom"};
    let b: IPerson = a as IPerson;
    console.log(b.age);
}