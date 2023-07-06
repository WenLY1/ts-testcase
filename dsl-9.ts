// case 1
function test(): A{
    return new A();
}

class A{
    constructor(){
        console.log("A");
    }
}

// case 2
type newA = () => A;

class A{

}
