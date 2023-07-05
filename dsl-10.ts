// case 1
function func1() : number | string{
    return 1;
}
class A{
    static func(): number | string{
        return func1();
    }
}

// case2
class A2{
    num?: number;
    constructor(num? :number){
        this.num = num;
    }
}