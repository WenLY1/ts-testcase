interface Opt {
    val: string
  }
  
  class Test2 {
    private _a: Opt = {
      val: '_aaaa'
    }
  
    get a(): Opt {
      console.log('~~~~~~~~~getter')
      return this._a
    }
  
    set a(val: Opt) {
      console.log('~~~~~~~~~setter')
      this._a = val
    }
  }
  
  let test2: Test2 = new Test2()
  
  //  [ERROR] console - Aborted(Assertion failed: isStruct(), at: /home/runner/work/binaryen.js/binaryen.js/binaryen/src/wasm/wasm-type.cpp,1330,getStruct). Build with -sASSERTIONS for more info. 
  console.log(test2.a.val)
