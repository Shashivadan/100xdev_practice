import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(
  email: string,
  fristname: string,
  lastname: string,
  password: string
) {
  const res = await prisma.users.create({
    data: {
      email,
      password,
      firstname: fristname,
      lastname,
    },
    select: {
      id: true,
      password: true,
    },
  });
  console.log(res);
}
// insertUser("example.email@gmail.com", "shshibdan", "vadan", "1f2345678");

interface UpdateParams {
  firstName: string;
  lastName: string;
}

async function updateUser(
  email: string,
  { firstName, lastName }: UpdateParams
) {
  const res = await prisma.users.update({
    where: {
      email,
    },
    data: {
      firstname: firstName,
      lastname: lastName,
    },
    select: {
      email: true,
      firstname: true,
      lastname: true,
    },
  });

  console.log(res);
}
// updateUser("example.email@gmail.com", {
//   firstName: "example.FirstName",
//   lastName: "example.lastName",
// });

async function getUser(email: string) {
  const res = await prisma.users.findUnique({
    where: {
      email,
    },
    select: {
      firstname: true,
      lastname: true,
      email: true,
    },
  });
  console.log(res);
}
getUser("example.email@gmail.com");
