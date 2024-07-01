import CallAPI from "../config/api";

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = "api/v1";

export async function GetMemberOverview() {
  const url = `${ROOT_API}/${API_VERSION}/players/dashboard`;

  return CallAPI({
    url,
    method: "GET",
    token: true,
  });
}
export async function GetMemberTransactions(valueParams: string) {
  let params = "";
  if (valueParams === "all") {
    params = "";
  } else {
    params = `?status=${valueParams}`;
  }
  const url = `${ROOT_API}/${API_VERSION}/players/history${params}`;

  return CallAPI({
    url,
    method: "GET",
    token: true,
  });
}

export async function GetMemberTransactionsDetail(id: string, token: string) {
  const url = `${ROOT_API}/${API_VERSION}/players/history/detail/${id}`;

  return CallAPI({
    url,
    method: "GET",
    serverToken: token,
  });
}

export async function EditMemberProfile(data: FormData) {
  const url = `${ROOT_API}/${API_VERSION}/players/profile`;

  return CallAPI({
    url,
    method: "PUT",
    token: true,
    data,
  });
}
