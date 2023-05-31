class RouteCfgItem {
  key: string = 'Home'
  name: string = 'Home'
  path: string = '/'
  tplPath: string = '/Home'
}


let route: RouteCfgItem = new RouteCfgItem()

console.log('~~~~~~~~~~~~before for in')

for (let key in route) {
  console.log('~~~~~~key', key)
}

console.log('~~~~~~~~~~~~after for in')

let obj: any = {
  a: 'aaa',
  b: 'bbb'
}


console.log('~~~~~~~~~~~~before for in any')

for (let key in obj) {
  console.log('~~~~~~key', key)
}

console.log('~~~~~~~~~~~~after for in any')
