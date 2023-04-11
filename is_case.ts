function isString(value: any): value is string {
  return typeof value === 'string';
}

function doSometing(value: string | number) {
  if (isString(value)) {
    console.log('value is string')
  } else {
    console.log('value is number')
  }
}

doSometing('abc')