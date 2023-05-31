interface O {
  name: string,
  fn: (a?:string) => void
}

interface O2 {
  name: string
}


let obj: O = {
  name: 'Mike',
  fn(a?:string) {
    console.log(this.name, a)
  }
}

let obj2: O2 = {
  name: 'Alice'
}

obj.fn.call(obj2, 'obj2')

let obj3: O2 = {
  name: 'Bill'
}

let bindFn = obj.fn.bind(obj3, 'obj3')

bindFn()

let obj4: O2 = {
  name: 'Lily'
}

obj.fn.apply(obj4, ['obj4'])
