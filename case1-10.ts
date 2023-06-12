export default {}

// 在数组的 forEach 不支持使用 map.set
function testMap(){
    let map: any = new Map()
    let arr = new Array<number>()
    for(let i=0;i<5;i++) {
        arr.push(i)
    }
    arr.forEach((item)=>{
        map.set(item, item)
    })
}
testMap()