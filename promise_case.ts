const myPromise: Promise<string>  = new Promise((resolve: (data: any) => void, reject: (data: any) => void) => {
  // setTimeout(() => {
    resolve("foo");
  // }, 300);
});

myPromise
  .then(function(res: string) {
    console.log('~~~~~~~~resolve', res)
  }, function(res: string) {
    console.log('~~~~~~~~reject', res)
  })
