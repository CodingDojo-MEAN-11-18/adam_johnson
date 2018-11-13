function fib() {
  // Some variables here
  let num = 1;
  let before = 0;
  function nacci() {
    // do something to those variables here
    const temp = before;
    console.log(num);
    before = num;
    num = num + temp;
  }
  return nacci;
}
var fibCounter = fib();
fibCounter(); // should console.log "1"
fibCounter(); // should console.log "1"
fibCounter(); // should console.log "2"
fibCounter(); // should console.log "3"
fibCounter(); // should console.log "5"
fibCounter(); // should console.log "8"
