import { BASE_URL } from "./utils";
import axios from "axios";

export default {
  getMenu: () => axios.get(`${BASE_URL}/api/menu`),
};
