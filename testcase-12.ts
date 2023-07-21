class BinaryTreeNode1{
    val: number = 1;
}
class BinaryTreeNode{
    val: number = 0;
    left?: BinaryTreeNode1 = new BinaryTreeNode1();
    right?: BinaryTreeNode1 =  new BinaryTreeNode1();
}



export function testRecursiveClass(){
    let root = new BinaryTreeNode();
    root.left = new BinaryTreeNode1();
    root.right = new BinaryTreeNode1();
    console.log(root.left);             // 输出[wasm object]
    console.log(root.left.val);         // 输出undefined
    root.left = root;
}