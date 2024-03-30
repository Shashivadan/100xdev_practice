async function wait(duriton: number) {
  const str = await setTimeout(() => {}, duriton);
  console.log(str);
}

wait(2000);

async function doSomethingforSomeTime() {
  return "jdhfajlds";
}

type doSomethingforSomeType = Awaited<
  ReturnType<typeof doSomethingforSomeTime>
>;
