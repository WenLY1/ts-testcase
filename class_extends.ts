class C {
    constructor() {
      console.log("This is C.")
    }
  }
  
  class B extends C {
    constructor() {
      super()
      console.log("This is B.")
    }
  }
  
  class A extends B {
    constructor() {
      super()
      console.log("This is A.")
    }
  }
  
  const a = new A();
  