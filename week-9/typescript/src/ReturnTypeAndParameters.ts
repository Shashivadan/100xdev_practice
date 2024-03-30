function prirntsomeThing(name: string, age: number) {
  return name + age;
}

type PrirntSomeThing = ReturnType<typeof prirntsomeThing>;

type PrintSomeThingParameters = Parameters<typeof prirntsomeThing>;
