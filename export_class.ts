// app.ts
export class App {
    _id: number =  -1
  
    constructor() {
    }
  }
  
  
  // index
  export { App } from './framework/app'
  
  // app use 
  import { App } from './index'
  
  export default class Samples extends App {
  
    onCreate(): void {
      console.log('--- app created ---')
    }
  
    onShow(): void {
      console.log('--- app show ---')
    }
  
    onHide(): void {
      console.log('--- app hide ---')
    }
  
    onDestroy(): void {
      console.log('--- app destroy ---')
    }
  }