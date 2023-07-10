/*
 * Copyright (C) 2023 Xiaomi Corporation.  All rights reserved.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 */

enum Color {
    Red,
    Green,
    Blue
  }
  
enum Color1 {
    Red = '红',
    Green = '绿',
    Blue = '蓝'
}

export function digitEnum(){
    console.log(Color.Red);
}

export function stringEnum(){
    console.log(Color1.Red);
}
