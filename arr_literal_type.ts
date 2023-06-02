interface INode {
    id: string
    children: Array<string>
}
let node: INode = { id:'1', children:[] }
let node2: INode = { id:'2', children:[] }
node.children.push('node2')
console.log(node.children.length)
