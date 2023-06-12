export default {}

class StrObj {
  a: string = 'a1'
  b: string = 'b2'
}

class Test {
  private _a:StrObj = new StrObj()

  constructor() {}

  get a(): StrObj {
    return this._a
  }

  log() {
    // [ERROR] console - Aborted(Assertion failed: isStruct(), at: /home/runner/work/binaryen.js/binaryen.js/binaryen/src/wasm/wasm-type.cpp,1330,getStruct). 
    console.log('~~~~~~~~~~~~a', this.a.a)
    // work
    console.log('~~~~~~~~~~~~_a', this._a.a)
  }
}

class T2 extends Test {
  log2() {
    // [ERROR] console - Aborted(Assertion failed: isStruct(), at: /home/runner/work/binaryen.js/binaryen.js/binaryen/src/wasm/wasm-type.cpp,1330,getStruct). 
    console.log('~~~~~~~~~~~~log2', this.a.b)
  }
}

let t: Test = new Test()

t.log()

let t2: T2 = new T2()

t2.log()
t2.log2()

