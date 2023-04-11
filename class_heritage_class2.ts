import A from './class_heritage_class1'

export default class B extends A {
    testB() {
        return this._b + 1;
    }
}