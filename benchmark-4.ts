class A{
    say?: ()=>void;
    constructor(){
        this.say = ()=>{1+1};
    }
}

let a: A = new A();
if(a.say != undefined){
    a.say();
}