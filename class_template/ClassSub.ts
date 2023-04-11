import TemplateObject from './ClassTemplate'

class InstanceA extends TemplateObject<Number> {
    private _a: string
    constructor(value: Number) {
      super(value)
      this._a = "This is A Instance"
    }
}

class InstanceB extends TemplateObject<string> {
    private _b: string
    constructor(value: string) {
      super(value)
      this._b = "This is B Instance"
    }
}

var tempA = new InstanceA(999)
var tempB = new InstanceB("111")
