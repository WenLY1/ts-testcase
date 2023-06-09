export default {}

type AttrValue = string | number | boolean
interface AttrObject { [key: string]: AttrValue }
interface NoddOptions {
  attrs? : AttrObject
}
class VNode {
  opts: NoddOptions

  constructor(opts2: NoddOptions){
    this.opts = opts2
  }
}

function testFn(node: VNode) {
  // 问题1：运行时异常退出
  const attrs = node.opts.attrs
  console.log('-aaa-testFn--')
}

const opts: NoddOptions = {}
const node = new VNode(opts)
testFn(node)
