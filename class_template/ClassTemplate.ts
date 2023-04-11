class MObject<T> {
 name:T;
 constructor(name: T){
  this.name = name;
  console.log(name)
 }
 action<T>(say:T) {
   console.log(say)
 }
}

let cat = new MObject('cat')
cat.action('mimi')

let robot = new MObject(12345)
robot.action(54321)
