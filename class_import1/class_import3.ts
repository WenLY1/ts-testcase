import B from './class_import2'
export default class C extends B {
  
    testC(b:B) {
      b.testB()
    }

    testD() {
      return 1
    }
}
