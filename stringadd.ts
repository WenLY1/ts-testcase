class RouteCfgItem {
  name: string = ''
  path: string = ''
  tplPath: string = ''
}

const relPathSep: string = '/'
const TPL_EXT: string = '.json'
let obj: any = {
  Home: {
    component: 'index'
  }
}

let routerInst = new RouteCfgItem()

routerInst.name = relPathSep + 'Home' 
routerInst.path = routerInst.name + relPathSep + (obj.Home.component as string)
routerInst.tplPath = routerInst.path + TPL_EXT

console.log('~~~~~~~~~~routerInst.name', routerInst.name, ' routerInst.path',  routerInst.path, ' routerInst.tplPath',  routerInst.tplPath)
