export function mathMinWithOneOperation() {
    const a = Math.min(2);
    // 这里生成的是 OFFSET_CALL
    return a;
}

export function mathPowWithZero() {
    const a = Math.pow(3, 0);
    // 这里生成的是 SHAPE_CALL
    return a;
}
