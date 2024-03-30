type PersonKey = {
  name: string;
  age: number;
  id: number;
};

function findPersonWithAgeKey(key: keyof PersonKey, personObject: PersonKey) {
  return personObject[key];
}

const singleperson: PersonKey = {
  name: "shashi",
  age: 33,
  id: 5678,
};

const age = findPersonWithAgeKey("age", singleperson);
