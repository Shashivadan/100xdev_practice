import { tuple } from "zod";

let a1 = 1 as const;

const bconst: number = 33;

enum PersonEnum {
  skillLevel = "biggner",
}

const skills = ["begginer", "intermediate", "export"] as const;

type SkillLevelPerson = {
  skilllevel: (typeof skills)[number];
};

const asConstObject = {
  name: "Shashivadan",
  age: 21,
  address: {
    home: "4-6",
    city: "bhpl",
  },
} as const;

type ObjectKeyOf = typeof asConstObject;
type tuple = [string, number];
