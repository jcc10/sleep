import {sleepTimed} from "https://raw.githubusercontent.com/jcc10/sleep/master/sleep.ts";

let off = 0;

for (let i = 1; i <= 10; i++) {
  console.log(i);
  off += await sleepTimed(1000) - 1000;
}

console.log("Sleep was off by: " + off + "ms")