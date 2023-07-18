export function addAnyInBinaryExpr() {
    let str1: any = "str11";
    let str2: any;
    let str3: any = "str33";
    str2 = (str1 + "a") + str3; // unboxing any type to static type
    console.log(str2);
}