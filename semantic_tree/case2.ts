class A {
    x: number;
    constructor(xx: number) {
        this.x = xx;
    }
}

function helper(a: any) {
    const b: A = a;
    return b.x;     // 这个生成了dynamic get，是期望的行为吗？
}
