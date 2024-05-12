console.time("test");
let count = 0
for (let i = 0; i < 10; i++) {
    let worker = new Worker('worker.js')
    worker.postMessage({ num: 40, id: i })
    worker.addEventListener("message", (e) => {
        count++
        console.log(e.data);
        if (count == 10) {
            console.timeEnd("test");
        }
        worker.terminate()
    })
}