/*
 * Copyright (C) 2023 XiaoMi Corporation.  All rights reserved.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
*/

function *genIterator(){
    yield 1;
    yield 2;
    yield 3;
}

export function yield_test()
{
  let iterator = genIterator();
  console.log(iterator.next())
  console.log(iterator.next().value)
  console.log(iterator.next().value)
  console.log(iterator.next().done)
}
