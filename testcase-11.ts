class A{
    static sayA(){
        console.log("A");
    }
}

class B extends A {
    static sayB(): void {
        super.sayA()
    }
}

export function test(){
    B.sayB();
}