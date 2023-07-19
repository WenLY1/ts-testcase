class A{
    n: number = 10;
    say(){
        let anonymousFunc = ()=> console.log(this.n);
        anonymousFunc();
    }
}

export function testAnonymousFunction2() {
    let a: A = new A();
    a.say();
}