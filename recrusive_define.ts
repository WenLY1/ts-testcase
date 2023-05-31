
// 字面量初始化复杂类型数据报错
class VNode1 {
  arr: Array<string>
  constructor(){
      // [ERROR] console - Type mismatch in ExpressionStatement 
      this.arr = []
  }
}

let node1: VNode1 = new VNode1()

console.log('~~~~~~~~~~node1.arr.length', node1.arr.length)

// class 申明中包含类型循环引用报错
class VNode2 {
    // 这里必须加 ? 不然会 Maximum call stack size exceeded 
    arr: Array<VNode2>
    constructor(){
        this.arr = new Array<VNode2>()
    }
    // 经测试：该方法会构建异常 Maximum call stack size exceeded 
    add(node: VNode2){
        if (this.arr != null)
        this.arr.push(node)
    }
}

let node2: VNode2 = new VNode2()
node2.add(node2)

console.log('~~~~~~~~~~node2.arr.length', node2.arr.length)
