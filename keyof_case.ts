interface Person {
  name: string;
  age: number;
  phoneNum: number;
}

function getProperty(o: Person, key: keyof Person) {
  return o[key]
}

const obj: Person = {
  name: 'zhangsan',
  age: 33,
  phoneNum: 13300012345
}

console.log(getProperty(obj, 'name'))