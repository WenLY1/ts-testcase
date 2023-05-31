interface O {
  a: string
}

let num: number = 15
let bool: boolean = true
let fn: ()=>void = function() {}
let arr: Array<string> = ['a']
let obj: O = {a: 'aaa'}

// error TS2339: Property 'toString' does not exist on type 'number'
console.log(num.toString())

// error TS2339: Property 'toString' does not exist on type 'true'.
console.log(bool.toString())

//  error TS2339: Property 'toString' does not exist on type '() => void'.
console.log(fn.toString())

// error TS2339: Property 'toString' does not exist on type 'string[]'.
console.log(arr.toString())

// error TS2339: Property 'toString' does not exist on type 'O'.
console.log(obj.toString())
