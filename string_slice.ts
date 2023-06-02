export function stringSliceWithTwoNegativeNumber() {
    const a: string = 'hello';
    const b: string = a.slice(-1, -3);
    return b;
}

export function stringSliceWithTwoPositiveNumber() {
    const a: string = 'hello';
    const b: string = a.slice(1, 3);
    return b;
}

export function stringSliceWithTwoUndefind() {
    const a: string = 'hello';
    const b: string = a.slice(undefined, undefined);
    return b;
}

let a: string = stringSliceWithTwoNegativeNumber()
let b: string = stringSliceWithTwoPositiveNumber()
let c: string = stringSliceWithTwoUndefind()

console.log('abcdefg'.slice(0, 3))