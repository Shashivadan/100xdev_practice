type Persontype = {
  name: string;
  age: number;
  readonly id: number;
};

const person1: Persontype = { name: "sjasi", age: 33, id: 567890 };

type NumberArrayType = readonly number[];
const NumberOfArrays: NumberArrayType = [1, 2, 34, 45];

type ReadOnlyTypePerson = Readonly<Persontype>;
