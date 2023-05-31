function a(a?: string): void {
  console.log('~~~~~~~~~~~~a ', a)

  // how to check a is not undefined?
  if(a === undefined) {
    console.log('~~~~~~~~~~ a is undefined')
  }
}

//runtime error WASM module load failed: type mismatch: expect f64 but got other
a()
a('b') 


let c: undefined = undefined


// compile error  Program terminated with exit(1)
let res: boolean = (c === undefined)
console.log('~~~~~~~~~~~res', res)

//runtime error WASM module load failed: type mismatch: expect f64 but got other
function t() {
  if(c === undefined) {
    console.log('~~~~~~~~~c is undefined')
  }
}
t()

