const mySet = new Set()

mySet.add(1)
mySet.add(5)
mySet.add(5)

console.log(mySet.has(5))

mySet.delete(5)
console.log(mySet.size)

for (let item of mySet) {
  console.log(item)
}

for (let item of mySet.keys()) {
  console.log(item)
}

for (let item of mySet.values()) {
  console.log(item)
}