const myMap = new Map()

myMap.set(1, 'a')
myMap.set(2, 'b')
myMap.set(3, 'c')

console.log(myMap.get(1))

myMap.set(1, 'd')
console.log(myMap.get(1))
console.log(myMap.has('a'))

myMap.delete('b')
console.log(myMap.size)

for (const [key, value] of myMap) {
  console.log(key + ' = ' + value)
}

for (const key of myMap.keys()) {
  console.log(key)
}

for (const [key, value] of myMap.entries()) {
  console.log(key + ' = ' + value)
}

myMap.forEach((value, key) => {
  console.log(key + ' = ' + value)
})