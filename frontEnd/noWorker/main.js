
import { fib } from "./fib.js";
console.time("test");
for (let i = 0; i < 10; i++) {
    let res = fib(40)
    console.log(res);
}

console.timeEnd("test");