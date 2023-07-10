/*
 * Copyright (C) 2023 Intel Corporation.  All rights reserved.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 */

export function anyAsNumber() {
    let a: any = 1;
    let b: number = a as number;
    console.log(b);
}

export function anyAsString() {
    let a: any = 'hello world';
    let b: string = a as string;
    console.log(b);
}

export function anyAsBoolean() {
    let a: any = true;
    let b: boolean = a as boolean;
    console.log(b);
}

export function anyAsArray() {
    let a: any = [1,2,3];
    let b: number[] = a as number[];
    console.log(b[0]);
}

class Person{
    age: number = 20;
    name: string = "Tom"
}

export function anyAsClass() {
    let a: any = new Person();
    let b: Person = a as Person;
    console.log(b.age);
}

interface IPerson{
    age: number;
    name: string;
}

export function anyAsInterface() {
    let a: any = {age: 20, name: "Tom"};
    let b: IPerson = a as IPerson;
    console.log(b.age);
}

export function anyAsNull() {
    let a: any = null;
    let b = a as null;
    console.log(b);
}

export function anyAsUndefined() {
    let a: any = undefined;
    let b = a as undefined;
    console.log(b);
}

export function anyAsUnionType() {
    let number_or_string : number | string = "a";
    let a: any = number_or_string;
    let b: number | string = a as number | string;
    console.log(b);
}

