interface RouteCfgItem {
  [key: string]: string
}

let route: RouteCfgItem =  {
  key: 'Home',
  name: 'Home',
  path: '/',
  tplPath: '/Home'
}

function getRouteVal(key: string): void {
  console.log('~~~~~~~~~~~~getRouteVal key', key, 'val ', route[key])
}
// [   ERR] load wasm module failed. error: WASM module load failed: type mismatch: expect f64 but got other
getRouteVal('key')
getRouteVal('name')
getRouteVal('path')
getRouteVal('tplPath')
