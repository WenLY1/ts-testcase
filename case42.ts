export default {}

let res: any = {
  code: 0,
  msg: '',
  data:  {
    "_bind1_": "rgb(0, 0, 50)",
    "_bind2_": {
      "backgroundColor":"rgb(255, 0, 0)",
      "width":"35px",
      "height":"35px"
    }
  }
}

let jres1: string = JSON.stringify(res) as string

// ~~~~~~~~~~~~~~jres1 {"code":0,"msg":"","data":{"\"_bind1_\"":"rgb(0, 0, 50)","\"_bind2_\"":{"\"backgroundColor\"":"rgb(255, 0, 0)","\"width\"":"35px\u0003","\"height\"":"35px\u0003"}}} 
console.log('~~~~~~~~~~~~~~jres1', jres1)