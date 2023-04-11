type Type1 = string | number | boolean

type Type2 = string | string[]

type Type3 = number[] | string[]

interface A {
  name: string
  age: number
}

interface B {
  name: number
  id: string
}

type Union = A | B;
const c: Union = {
  id: 'abc001',
  name: 'tom',
  age: 30
}
