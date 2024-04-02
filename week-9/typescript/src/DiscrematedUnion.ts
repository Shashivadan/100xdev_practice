type UserApiRes = {
  status: "susses" | "error";
  data?: { name: string; age: number };
  isError?: string;
};

function handleRes(res: UserApiRes) {
  if (res.status == "error") {
    return res.isError;
  }
  return res.data;
}
