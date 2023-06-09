
export default {}

interface PaintOptions {
  shape: string;
  xPos?: number;
  yPos?: number;
}
 // [   ERR] WasmModuleEngine::Instantiate wasm module failed. _module:0xee101890 error: WASM module instantiate failed: Exception: failed to call unlinked import function (env, strcmp)
function paintShape(opts: PaintOptions) {
  console.log('~~~~~~~shape', opts.shape)
}
 
paintShape({ shape: 'a' });
paintShape({  shape: 'b', xPos: 100 });
paintShape({  shape: 'c', yPos: 100 });
paintShape({  shape: 'd', xPos: 100, yPos: 100 });