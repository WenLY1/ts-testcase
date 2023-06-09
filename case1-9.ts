export default {}

// 不支持 switch 字符串变量，即便不调用，也会导致运行时异常
function test(tag: string) {
    switch(tag) {
        case 'aaa':
            console.log('-aaa-', tag)
        break;
        case 'bbb':
            console.log('-aaa-', tag)
        break;
        default:
            console.log('-aaa-', tag)
        break;
    }
}
