/*
 * Copyright (C) 2023 XiaoMi Corporation.  All rights reserved.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 */

export function numberOct() {
    let a: number = 0o1234567;
    console.log("342391:", a);

    // arithmetic operation
    let c: number = 0o17012641 + 0o672345712;
    console.log("119923051:", c);
}

export function numberBin() {
    let a: number = 0b1010101010; // 10 bits binary number
    console.log("682:", a); // 682
    a = 0b10101010101010101010101010101010; // 32 bits binary number
    console.log("2863311530:", a); // 2863311530
    a = 0b1010101010101010101010101010101010101010101010101010101010101010; // 64 bits binary number
    console.log("12297829382473034000:", a); // 12297829382473034000
    a = -0b10101010101010101010101010101010; // neg binary number
    console.log("-2863311530", a); // -2863311530

    // arithmetic operation
    let c: number = 0b1010010 + 0b10100100000000;
    console.log("10578:", c); // 10578
    c = 0b1010010 - 0b10100100000000;
    console.log("-10414:", c); // -10414

    c = 0b011001001 * 0b1101101; //
    console.log("21909:", c);

    // logic operation
    c = 0b01101001 << 10;
    console.log("107520:", c);
    c = 0b01101001 >> 5;
}

export function numberHex() {
    let a: number = 0x123456789;
    console.log("4886718345:", a);
    a = 0x30e14a8fd9c389a;
    console.log("220136147829668000:", a);
    a = -0x30e14a8fd9c389a;
    console.log("-220136147829668000:", a);

    // arithmetic operation
    let c: number = 0x3f3f3f3f + 0xefefefef;
    console.log("5086588718:", c);
    c = 0x3e3e3e3e - 0xcccccccc;
    console.log("-2391707278:", c);

    // logic operation
    c = 0x4f << 10;
    console.log("80896:", c);
    c = 0xffffffff >> 5;
    console.log("-1:", c);
}