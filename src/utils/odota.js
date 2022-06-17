export const resolveAfter1Second = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 5000);
  });
};

export async function odota() {
  const wait = await resolveAfter1Second;
}
