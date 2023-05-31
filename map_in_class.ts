class VNode {
    private _data: any
    
    constructor(){
      const map: any = new Map()
      this._data = map
    }
}

let node: VNode = new VNode()

// [ERROR] console - Aborted(Assertion failed: *currp, at: /home/runner/work/binaryen.js/binaryen.js/binaryen/src/wasm-traversal.h,293,pushTask). Build with -sASSERTIONS for more info.
class VNode1 {
  private _data: any = new Map()
  
}

let node1: VNode1 = new VNode1()

// [ERROR] console - Aborted(Assertion failed: *currp, at: /home/runner/work/binaryen.js/binaryen.js/binaryen/src/wasm-traversal.h,293,pushTask). Build with -sASSERTIONS for more info. 
class VNode2 {
  private _data: any
  
  constructor() {
    this._data = new Map()
  }
}

let node2: VNode2 = new VNode2()
