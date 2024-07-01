import axios from "axios";
import CallAPI from "../config/api";
import { DataCheckoutTypes } from "./data-types";

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = "api/v1";

export async function GetFeaturedGame() {
  const URL = "players/landingpage";

  const res = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`);
  const axiosResponse = res.data;

  return axiosResponse.data;
}
export async function GetVoucherDetail(id: any) {
  const URL = `players/detailpage/${id}`;

  const res = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`);
  const axiosResponse = res.data;

  return axiosResponse.data;
}
export async function GetGameCategory() {
  const URL = `players/category`;

  const res = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`);
  const axiosResponse = res.data;

  return axiosResponse.data;
}
export async function SetCheckout(data: DataCheckoutTypes) {
  const url = `${ROOT_API}/${API_VERSION}/players/checkout`;

  return CallAPI({
    url,
    method: "POST",
    data,
    token: true,
  });
}
