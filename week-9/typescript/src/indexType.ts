type indexTypePerson = {
  name: string;
  skillLevel: "biggner" | "intermediate" | "Expert";
};

const indexPerson: indexTypePerson = {
  name: "shashi",
  skillLevel: "biggner",
};

function printSkillLevel(skillLevel: indexTypePerson["skillLevel"]) {
  console.log(skillLevel);
}

const a = {
  name: "sdjfs",
  age: 23,
  isProgrammer: false,
};

type b = (typeof a)[keyof typeof a];

type GroupBySkillLevels = {
  [index: indexTypePerson["name"]]: indexTypePerson[];
};

const skillLevelByGroup: GroupBySkillLevels = {
  biggner: [{ name: "shashi", skillLevel: "biggner" }],
};

const typeIndexArr = ["skldfd", true];

type TypeofArray = (typeof typeIndexArr)[number];

const typeIndexArr2: TypeofArray = "hkjg";
