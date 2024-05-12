importScripts("fib.js")
self.addEventListener("message", (e) => {
    let num = e.data.num
    let id = e.data.id
    let res = fib(num)
    console.log("w:", id, res);
    self.postMessage({ res, id })
})