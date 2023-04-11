import C from './class_import3'

export default class B {
  
    testB() {
    }

    testC(c:C) {
        return c.testC(this);
    }
  
}