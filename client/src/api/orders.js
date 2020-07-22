import { BASE_URL } from "./utils";
import axios from "axios";

export default {
  getOrders: (userId) => axios.get(`${BASE_URL}/api/getOrders/${userId}`),
  createOrder: (body) => axios.post(`${BASE_URL}/api/createOrder`, body),
};
