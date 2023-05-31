class Test {
    private static _getbool(): boolean {
      return false
    }
  
    bool(): boolean {
      // console.log('~~~~~~~~~~~~Test._getbool()', Test._getbool())
      return Test._getbool()
    }
  
    val(): boolean {
      return true
    }
  }
  
  let t = new Test()
   
  //  ERR] load wasm module failed. error: WASM module load failed: type mismatch: expect heap object but got others
  if (t.bool()) {
    console.log('~~~~~~~~_getbool return true')
  } else {
    console.log('~~~~~~~~_getbool return false')
  }
  
  // ERR] load wasm module failed. error: WASM module load failed: type mismatch or constant expression required
  let res: boolean = t.val()
  
  if (res) {
    console.log('~~~~~~~~_getbool res return true')
  } else {
    console.log('~~~~~~~~_getbool res return false')
  }
  
  
  function getBool(): boolean {
    return true
  }
  
  
  let b: boolean = getBool()
  //    ERR] load wasm module failed. error: WASM module load failed: type mismatch or constant expression required
  console.log('~~~~~~~~~~~~b', b)
