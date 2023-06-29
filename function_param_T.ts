/*
 * Copyright (C) 2023 XiaoMi Corporation.  All rights reserved.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 */

type ForCallback<T> = (item: T) => void
export function test(){
    let func: ForCallback<number> = (item: number) => {console.log(1)}
    func(1);
}
