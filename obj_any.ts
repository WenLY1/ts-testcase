// case 1

class Test {
    a: string = '111111'
    b: string = '222222'
  }
  
  let t = new Test()
  
  // waiot: ../deps/quickjs/quickjs.c:1983: JS_FreeRuntime: Assertion `list_empty(&rt->gc_obj_list)' failed.
  // let anyObj: any = {
  //   a: 'aaa',
  //   b: 'bbb'
  // }
  
  //  [ERROR] console - Semantic check error. 
  // t.a = anyObj.a
  
  console.log('~~~~~~~~~~t.a', t.a)
  
  // case 2
  
  function anyTest(): string {
    // work
    // let a: any = 1;
    // let a: any = 'eeee';
    let a: any;
    a = {b: '55555'};
    return a.b as string;
  }
  
  // // console.log('anyTest simple res:', anyTest())
  
  // [   ERR] WasmModuleEngine::Instantiate wasm module failed. _module:0xee101890 error: WASM module instantiate failed: Exception: unreachable
  console.log('anyTest ref res:', anyTest())
  
  // case3 ts-wasm/ts2wasm/tests/samples/any_box_obj.ts
  function boxNestedObj() {
    let obj: any;
    obj = {
        a: 1,
        c: true,
        d: {
            e: 1,
        },
    };
    return obj.d.e as number;
  }
  // waiot: ../deps/quickjs/quickjs.c:1983: JS_FreeRuntime: Assertion `list_empty(&rt->gc_obj_list)' failed.
  console.log('boxNestedObj res:', boxNestedObj())