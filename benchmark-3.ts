class D {
    public e: number;
    public f: string;
    public g: A;
    constructor(m: number, n: string, k: A) {
        this.e = m;
        this.f = n;
        this.g = k;
    }
}

interface A {
    a:number;
    b:string;
    C:D;
}