class A1 {
    say() {

    }
}

class B1 {
    say() {

    }
}

function myfunc(objA?: A1) {
    if (objA != undefined) {
        objA.say();
    }

}

export function test() {
    myfunc(new A1());
}
