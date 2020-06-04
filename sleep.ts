export default function sleep(duration: number): Promise<null> {
    return new Promise((res)=> {
        setTimeout(res, duration);
    });
}

export async function sleepTimed(duration: number): Promise<number> {
    let start = Date.now();
    await sleep(duration);
    return Date.now() - start;
}