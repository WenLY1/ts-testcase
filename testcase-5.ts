export function lambdaWithSingleStmt() {
    let func = () => console.log(1);    
    func();         // 无任何输出
    let func1 = () => {console.log(1)};    
    func1();        // 输出1
}