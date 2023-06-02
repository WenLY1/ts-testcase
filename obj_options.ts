interface PaintOptions {
    shape: string;
    xPos?: number;
    yPos?: number;
  }
   
  function paintShape(opts: PaintOptions) {
    console.log('~~~~~~~shape', opts.shape)
  }
   
  paintShape({ shape: 'a' });
  paintShape({  shape: 'b', xPos: 100 });
  paintShape({  shape: 'c', yPos: 100 });
  paintShape({  shape: 'd', xPos: 100, yPos: 100 });