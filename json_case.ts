const json = '{"result":true, "count":42}'
const obj = JSON.parse(json)

JSON.stringify({ x: 5, y: 6 })

JSON.stringify([new Number(3), new String('false'), new Boolean(false)])

JSON.stringify({ x: [10, undefined, function(){}, Symbol('')] })

JSON.stringify(new Date(2006, 0, 2, 15, 4, 5))
