class A{
    say(){
        console.log("A");
    }
}
class B extends A{
    say(): void {
        console.log("B");
    }
}

function createObj(): A{
    let obj: A = new B();
    obj.say();
    return obj;
}
export function test(){
    let b = createObj();
    b.say();
}
