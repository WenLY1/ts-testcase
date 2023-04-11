interface Person {
  name: string;
  age: number;
  phoneNum: number;
}


const obj: Person = {
  name: 'zhangsan',
  age: 33,
  phoneNum: 13300012345
}

console.log(obj['name'])
