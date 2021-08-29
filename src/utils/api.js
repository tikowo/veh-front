import axios from "axios";
const API_URL = "https://api.chucknorris.io/jokes";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use((response) => {
  return response.headers["content-type"].includes("application/json")
    ? response.data
    : response;
});

export default api;
