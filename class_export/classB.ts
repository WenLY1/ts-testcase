import {A as AA}  from './libA/index'

class B extends AA
{
    b:number;
    constructor()
    {
        super();
        this.b = 16;
    }
}

export function test()
{
    let b = new B();
    console.log(b.a,b.b);
}