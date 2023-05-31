let str1: string = ''
let str2: string = 'aaa'
let num1: number = 0
let num2: number = -0
let num3: number = 1
let nan: number = NaN
let bool1: boolean = false
let bool2: boolean = true
let empty1: undefined = undefined
let empty2: null = null


// bool

// [ERROR] console - operator doesn't support, 36 
console.log('bool1 === bool1',bool1 === bool1)
console.log('bool1 === false',bool1 === false)
console.log('bool2 === true',bool2 === true)

// empty1
// 编译通过运行崩溃
console.log('empty1 === undefined' ,empty1 === undefined)
console.log('empty1 === empty1', empty1 === empty1)

//  [ERROR] console - unexpected left expr type nullunexpected right expr type null 
console.log('empty2 === null', empty2 === null)
console.log('empty2 === empty2', empty2 === empty2)
console.log('empty1 === empty2', empty1 === empty2)
