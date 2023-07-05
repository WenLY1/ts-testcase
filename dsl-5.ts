export class GenericClass<T> {
    private value_: T;
    test(t: T) {
        if (this.value_ == t) return;
    }
    constructor(t: T) {
        this.value_ = t
    }
}