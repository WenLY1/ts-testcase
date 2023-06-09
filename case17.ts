let str1:  string = 'start'
let str2: string = 'middle'


// work
console.log(1 + 2)

// [ERROR] console - operator doesn't support, 39 
console.log(str1 + str2)

// [ERROR] console - operator doesn't support, 39 
console.log('start' + 'middle')

// [ERROR] console - unexpected left expr type numberunexpected right expr type string
console.log(2001 + ': A Space Odyssey');