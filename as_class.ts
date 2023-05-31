export default {}


class Comp {
  constructor() {

  }

  a(){
    console.log('~~~~~~~~~~~~~a')
  }
}

class Page extends Comp {
  constructor() {
    super()
  }

  b() {
    console.log('~~~~~~~~~~~~~b')
  }

  hook() {}
}

class Home extends Page {
  constructor (){
    super()
  }

  c() {
    console.log('~~~~~~~~~~~~~c')
  }

  hook() {
    console.log('~~~~~~~~~~hook')
  }
}


let home: Home = new Home()

home.c()

// 子类 as成父类或以上
// [ERROR] console - Static type doesn't support type assertion 
// 使用场景 框架中对页面实例进行类型提升放入框架数据集合
let p: Page = home as Page
let cp: Comp = home as Comp

// 父类或以上 as成子类
// 使用场景 框架中调用具体页面方法时获取页面实例类型 调用具体方法
// [ERROR] console - Static type doesn't support type assertion 
let child: Page = cp as Page
let child1: Home = p as Home
let child2: Home = cp as Home

child2.c()
