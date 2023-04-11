interface A {
  x: number;
}

interface B {
  y: string;
}

function doStuff(q: A | B) {
  if ('x' in q) {
    console.log('x in A')
  } else {
    console.log('x not in A')
  }
}

doStuff({ x: 1 })
doStuff({ y: 1 })