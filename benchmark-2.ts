class TreeNode {
    hash?: number;
    value?: number;
    left?: TreeNode;
    right?: TreeNode;

    check(): boolean {
        if (this.hash != undefined) {
            if (this.value != undefined) {
                return true
            } else if (this.left != undefined && this.right != undefined) {
                return this.left.check() && this.right.check();
            }
        }
        return false
    }
}