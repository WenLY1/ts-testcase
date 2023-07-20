class Car {
    isNew? : boolean;
    // constructor() {
    //     this.isNew = undefined;
    // }
}

let c = new Car();
export function testClassDecl() {
    console.log(c.isNew);
    c.isNew = true;
    console.log(c.isNew);
}