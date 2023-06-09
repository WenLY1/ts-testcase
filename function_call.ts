
type ReturnVoidFn = (evt?: any) => number
class VoidEvent {
  name: string = 'click'
  fn2: ReturnVoidFn | null = null
  bindFn() {
    this.fn2 = (evt?: any): number => {
      console.log(this.name)
      return 3;
    }
  }
}
let a: VoidEvent= new VoidEvent(); 
a.bindFn(); 
a.fn2!.call('aa')
