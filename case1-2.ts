export default {}
// 定义一个：具有一个可选参数，且返回值位 number 的函数类型
type RetrunTypeFn = (evt?: any) => number
// 定义类型 TypeEvent，内部属性 fn2 使用类型 RetrunTypeFn
class TypeEvent {
  name: string = 'click'
  fn2: RetrunTypeFn | null = null
}
class Node {
  id: number = 0
  event: TypeEvent | null = null
  bindEvent() {
    const evt = new TypeEvent()
    let fn2 = (evt?: any): number => {
      // 问题：使用 this 会导致编译时报错：get context of closure failed, varNode is this
      console.log('----callFn in Node event', this.id)
      return 1
    }
    evt.fn2 = fn2
    this.event = evt
  }
}

const node = new Node()
node.bindEvent()
console.log('----bindEvent in 3')
if (node.event != null && node.event.fn2 != null) {
  console.log('----bindEvent in 4')
  node.event.fn2()
}
