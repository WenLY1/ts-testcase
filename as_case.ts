
interface AA {
  id: number
  text: string
}

class A
{
    private a:number
}

class B extends A
{
    private b:number
    say()
    {
        console.log('hi')
    }
}

let a:A = new B();
(a as B).say();

const instance = { id: 1, text: 'test' } as AA;
