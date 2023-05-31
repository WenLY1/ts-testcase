let notANumber: number = NaN
if (notANumber) { // ~~~~~~~~~test1 if condition true NaN
  console.log('~~~~~~~~~test1 if condition true NaN') 
} else {
  console.log('~~~~~~~~~test1 if condition false NaN')
}

if (!notANumber) { // ~~~~~~~~~test2 if condition false NaN 
  console.log('~~~~~~~~~test2 if condition true NaN')
} else {
  console.log('~~~~~~~~~test2 if condition false NaN')
}
