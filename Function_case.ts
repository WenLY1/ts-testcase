function conditionFunc (): boolean {
  return true
}

function callback (value: string, key: number): void {
  console.log(value, key)
}

function testFunc1 (condition: Function) {
  if (condition) {
    const bool = condition.call(null)
    if (bool) {
      console.log('condition is true')
    }
  }
}

function testFunc2 (callbackFn: ((value: string, key: number) => void)): void {
  // const arr = ['a', 'b', 'c']
  // arr.forEach((v, i) => {
  //   callbackFn(v, i)
  // })
  callbackFn('abc', 123)
}

function testFunc3 (param: number = 3) {
  console.log(param)
}

testFunc1(conditionFunc)
testFunc2(callback)
testFunc3()
