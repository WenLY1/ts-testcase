class ParamsObject {
    key: string = ''
    val: string = ''
  }
  
  let pObj: ParamsObject = new ParamsObject()
  
  pObj.key = 'a'
  pObj.val = 'aaaa'
  
  console.log('~~~~~~pObj',pObj.key, pObj.val)
  
  let arr: Array<ParamsObject> = []
  
  // [  INFO] [09:51:35:966 - EDF3BB40]: [  INFO] warning: failed to link import function (env, strcmp)[  INFO] 
  // 已修复
  arr.push(pObj)
  
  
  class RouteInfo {
    package: string = ''
    path: string = ''
    // [ERROR] console - Type mismatch in ExpressionStatement 
    params: Array<ParamsObject> = []
  }
  
  let route: RouteInfo = new RouteInfo()
  
  // [ERROR] console - Aborted(Assertion failed: isStruct(), at: /home/runner/work/binaryen.js/binaryen.js/binaryen/src/wasm/wasm-type.cpp,1330,getStruct). Build with -sASSERTIONS for more info. 
  route.params.push(pObj)
  
  console.log('~~~~~~~~~route.params len', route.params.length)