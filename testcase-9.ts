class A {
    x = 10;
    static fooA() {
        return 10;
    }
}

function unionParam2(param: A | number){
    console.log((param as A).x);
}

export function testUnionParam2(){
    unionParam2(1);     // 期望输出是undefined，运行时报错Exception: unreachable
}