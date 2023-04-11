const getArray1 = <T>(value:T, counts:number=5):T[] => {
    return new Array(counts).fill(value)
}

console.log(getArray1<number>(4)) //[4, 4, 4, 4, 4]
console.log(getArray1<string>("hello")) //["hello", "hello", "hello", "hello", "hello"]

