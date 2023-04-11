const params = {
  p1: 123,
  p2: 'abc',
  p3: false
}

function testFunc (params: Object) {
  console.log(params)
}

testFunc(params)