import { number, string } from "zod";

type RecordPersonType = Record<number, { readonly name: string; id: number }>;

const recordPerson: RecordPersonType = {
  0: { name: "dsfahld", id: 6546 },
  1: { name: "dsfahld", id: 6546 },
  2: { name: "dsfahld", id: 6546 },
};

type groupPerson = {
  [key: string]: (typeof recordPerson)[];
};

// type groupRecordType = Record<
//   (typeof recordPerson)["0"],
//   (typeof recordPerson)[]
// >;
