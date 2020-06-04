export default function sleep(duration) {
  return new Promise((res) => {
    setTimeout(res, duration);
  });
}

export async function sleepTimed(duration) {
  let start = Date.now();
  await sleep(duration);
  return Date.now() - start;
}