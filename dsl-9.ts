function test(): A{
    return new A();
}

class A{
    constructor(){
        console.log("A");
    }
}