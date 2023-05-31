class A {
  constructor(){

  }

  log() {
    console.log('~~~~~~~~log from A');
  }
  
}
class B extends A {
  constructor(){
    // [ERROR] console - unexpected expr kind FirstToken
    super()
  }

  log() {
    super.log()
  }
}

let b: B = new B()
b.log()
