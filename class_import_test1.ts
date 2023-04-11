import B from './class_import1/class_import2'
import C from './class_import1/class_import3'

class A {
  
    testB(b:B) {
      return b.testB()
    }

    testC(c:C) {
      return c.testD()
    }
  
  }
