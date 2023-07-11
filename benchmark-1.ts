class A {
    say() {
        console.log("A");
    }
}

class B {
    say() {
        console.log("B");
    }
}
function func(obj: A | B) {
    obj.say();
}

export function test() {
    func(new A());
}
