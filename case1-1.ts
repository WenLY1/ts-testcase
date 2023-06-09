export default {}
// 定义一个：具有一个可选参数，且无返回值的 函数类型
type ReturnVoidFn = (evt?: any) => void
// 定义类型 VoidEvent，内部属性 fn2 使用类型 ReturnVoidFn
class VoidEvent {
  name: string = 'click'
  fn2: ReturnVoidFn | null = null
}
// 定义变量 callFn， 
const callFn: ReturnVoidFn = (evt?: any): void => { 
  if (evt) {
    // 问题1：不支持 typeof evt
    let typeName = typeof evt
    console.log('----callFn evt type=', evt)
  }
  console.log('----callFn')
}
// 直接使用 callFn---ok
callFn(222)

const event = new VoidEvent()
// 问题2：编译时报错：Type mismatch in ExpressionStatement
event.fn2 = callFn
