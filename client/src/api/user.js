import { BASE_URL } from "./utils";
import axios from "axios";

export default {
  register: (body) => axios.post(`${BASE_URL}/api/register`, body),
  login: (body) => axios.post(`${BASE_URL}/api/login`, body),
};
