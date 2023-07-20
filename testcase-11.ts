class Animal{
    kind: number = 10;
    printKind(){
        console.log(this.kind);
    }
}

class Cat extends Animal{
    //kind: number = 0;
    printKind(){
        console.log(super.kind);
        //console.log(this.kind);
    }
}