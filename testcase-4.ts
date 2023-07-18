class Person2 {
    name: string;
    constructor(public age: number, name: string){
        this.name = name;
    }
    printAge(){
        console.log(this.age);
    }
}