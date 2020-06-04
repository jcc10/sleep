export default function sleep(duration: number): Promise<null> {
  return Promise.resolve(null);
}

export async function sleepTimed(duration: number): Promise<number> {
  let start = Date.now();
  await sleep(duration);
  return Date.now() - start;
}