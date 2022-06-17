export const resolveAfter1Second = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 1000);
  });
};

export async function timeoutCall() {
  const wait = await resolveAfter1Second;
}
