let mmap = {a:10, b:20};
let arr = [1, 3, 5, 7, 9];
let c = -1;
export function forTest() {
  for (let k in mmap) {
    c = mmap[k];
  }
  // for .. of is optional
  // for (let k of arr) {
  //   c = k;
  // }
  return c;
}





// for (let i = 0; i < arr.length; i++) {
//   // TODO: diff 需要把本次已经没有的key从map里删除
//   childCallback(arr[i], i, node.id)
// }

// for (let [id, subscriber] of this.subscriberById_) {
//   // reactivityConsole.debug(`Id: ${id} -> ${subscriber['info'] ? subscriber['info']() : 'unknown'}`)
// }


// this._childComps.forEach(compId => {
//   const childComp = this.getChild(compId) as Component
//   if (childComp.needUpdate()) {
//     childComp.render()
//   }
// })

// ele.children.forEach(ele => {
//   printNode(ele, level)
// })

// for (const key in ele.opts) {
//   let v = ele.opts[key]
//   header += ` ${key}: ${typeof v === 'object' && v.isObserved() ? v.getRawValue() : v} `
// }
