// Create a standalone function `bind` that is functionally equivalent to the method `Function.prototype.bind`
//
// function example() {
//   console.log(this)
// }
// const boundExample = bind(example, { a: true })
// boundExample.call({ b: true }) // logs { a: true }
//

type Example = (arg1: string, arg2: number, arg3?: number[]) => void

const example: Example = function(arg1, arg2, arg3 = []) {
  console.log(this)
  console.log(arg1)
  console.log(arg2)
  console.log(arg3)
}
const bind = function<T extends any[]>(func: Function, thisValue: any) {
  return (...args: T) => func.apply(thisValue, args)
}

const boundExample: Example = bind(example, { a: true })

boundExample.call({ b: true }) // logs { a: true }
boundExample("hello", 2)
boundExample("there", 3, [ 1, 2, 3 ])
boundExample("there", 3, [ 1, 2, 3 ])
