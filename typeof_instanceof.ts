class Test {
    a: string = ''
  }
  
  interface Test1 {
    a: string 
  }

let str: string = 'aaaa'
let num: number = 1
let bool: boolean = true
let arr: Array<string> = ['abc']
let obj: Test1 = {a: 'aaa'}
let obj2: Test = new Test()
function fn():void {}

// union
let a: string | number

// [ERROR] console - unexpected expr kind FirstToken 
console.log('~~~~~~~~~typeof str', typeof str)
console.log('~~~~~~~~~typeof num', typeof num)
console.log('~~~~~~~~~typeof bool', typeof bool)
console.log('~~~~~~~~~typeof arr', typeof arr)
console.log('~~~~~~~~~typeof obj', typeof obj)
console.log('~~~~~~~~~typeof fn', typeof fn)

// // error TS2693: 'Function' only refers to a type, but is being used as a value here.
console.log('~~~~~~~~~~~~~~fn instanceof Function', fn instanceof Function)

// // error TS2693: 'Object' only refers to a type, but is being used as a value here.
console.log('~~~~~~~~~~~~~~fn instanceof Object', fn instanceof Object)
