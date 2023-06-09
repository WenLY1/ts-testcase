export default {}

const str: string = ''
// 问题1：运行时退出
const newStr: string = str || "444"
console.log('----aaa----', newStr)
