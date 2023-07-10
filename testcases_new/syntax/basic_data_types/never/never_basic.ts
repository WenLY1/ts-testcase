/*
 * Copyright (C) 2023 Xiaomi Corporation.  All rights reserved.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 */

type numberString = number & string;

function neverParam(n: never) {

}

declare let n: never;

export function neverBasic() {
    let ns: numberString;
    neverParam(n);
}