export default {}

class Node {
  id: number = 0
  // 问题1：编译时报错 Maximum call stack size exceeded
  children: Array<Node> = []
  // 问题2：编译时报错 Maximum call stack size exceeded
  addChild(child: Node) {

  }
  child: Node | undefined
}
