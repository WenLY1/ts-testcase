// 纯数字枚举
enum Color {
  Red,
  Green,
  Blue
}

// 非纯数字枚举
enum Color1 {
  Red = '红',
  Green = '绿',
  Blue = '蓝'
}

console.log(Color.Red, Color1.Red)