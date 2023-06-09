export default {}
// 定义一个：具有一个可选参数，且返回值位 number 的函数类型
type RetrunTypeFn = (evt?: any) => number
// 定义类型 TypeEvent，内部属性 fn2 使用类型 RetrunTypeFn
class TypeEvent {
  name: string = 'click'
  fn2: RetrunTypeFn | null = null
}
let fn2 = (evt?: any): number => {
  console.log('----callFn in Node event')
  return 1
}
let map: any = new Map()
map.set('fn', fn2)
let fn = map.get('fn')
console.log('----callFn 0')
if (fn) {
  console.log('----callFn 1')
  // 问题1：运行失败退出
  let fn22: RetrunTypeFn = fn as RetrunTypeFn
  // 问题2：直接调用时编译失败：funcType.getParamTypes is not a function
  fn()
  console.log('----callFn 2')
}

