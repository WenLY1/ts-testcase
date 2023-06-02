    function mapiter(key:any,value:any)
    {
      console.log(key, value)
    }
    
    let m: any = new Map();
    m.set(2,2);
    m.set(3,3);
    m.set(4,2);
    m.set(5,3);
    m.forEach((key:any, value:any)=>{
        console.log(key, value)
    })

    m.forEach(mapiter)
