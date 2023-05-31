class Test {
    arr: Array<string> = ['a', 'b', 'c', 'd']
    
    loopArrow() {
      let _this = this
      let a = 'aaa'
      this.arr.forEach(item => {
        console.log('~~~~~~item', item)
        // [ERROR] console - Program terminated with exit(1)
        console.log('~~~~~~~arr.len ' , this.arr.length)

      })
    }
  
    loopSimple() {
      let _this = this
      let a = 'bbb'
      this.arr.forEach(function(item) {
        console.log('~~~~~~item', item)
        // 符合预期
        // error TS2683: 'this' implicitly has type 'any' because it does not have a type annotation.
        // 'this' implicitly has type 'any' because it does not have a type annotation.
        // console.log('~~~~~~~arr.len ' , this.arr.length)
        // work
        console.log('~~~~~~~arr.len ' , _this.arr.length)
        // work
        console.log('~~~~~~~~~~a', a)
      })
    }
  }
  
  let t: Test = new Test()
  
  t.loopArrow()
  
  t.loopSimple()
