import sleep from "https://raw.githubusercontent.com/jcc10/sleep/master/sleep.ts";

for(let i = 1; i <= 10; i++){
    console.log(i);
    await sleep(1000);
}