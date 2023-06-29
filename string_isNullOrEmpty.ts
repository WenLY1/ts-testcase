/*
 * Copyright (C) 2023 XiaoMi Corporation.  All rights reserved.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 */

export function isNullOrEmpty(val: string) {
    return !val || val.length == 0;
}
