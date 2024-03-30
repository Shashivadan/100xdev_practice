import { number, string } from "zod";

const recordPerson = {
  name: "dsfahld",
  id: 6546,
};

type groupPerson = {
  [x: string]: (typeof recordPerson)[];
};

type groupRecordType = Record<
  (typeof recordPerson)["name"],
  (typeof recordPerson)[]
>;
