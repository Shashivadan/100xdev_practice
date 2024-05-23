async function wait(duriton: number) {
  const str = await setTimeout(() => {}, duriton);
  console.log(str);
}

wait(2000);

async function doSomethingSomeTime() {
  return "jdhfajlds";
}

type doSomethingSomeType = Awaited<ReturnType<typeof doSomethingSomeTime>>;

// bonfire

// custodian
