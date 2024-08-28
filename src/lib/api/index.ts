import axois from "axios";

export const api = axois.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
});

//ini untuk menerima token
export const setAuthToken = (token?: string) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};
