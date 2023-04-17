class C {
    constructor(props: string) {
      console.log(props)
    }
  
    ccc(ctxId: number): void {
    
    }
}

class  B  extends C {
    constructor(props: string) {
      super(props);
    }
    
    bbb(ctxId: number): void {
    
    }
}

class A  extends B {
    constructor(props: string) {
      super(props);
    }
  
    aaa(ctxId: number): void {
    
    }
}

let a: A = new A('data')