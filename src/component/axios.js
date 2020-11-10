import Axios from "axios";

export const axios = Axios.create({
  baseURL: "http://localhost:3781",
  // baseURL: "https://jsonplaceholder.typicode.com/users"
});
