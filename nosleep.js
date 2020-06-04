export default function sleep(duration) {
  return Promise.resolve(null);
}

export async function sleepTimed(duration) {
  let start = Date.now();
  await sleep(duration);
  return Date.now() - start;
}