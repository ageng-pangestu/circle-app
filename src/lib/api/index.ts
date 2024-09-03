import axois from "axios";

export const api = axois.create({
  baseURL: import.meta.env.SERVER_URL || "https://express-delta-six.vercel.app/",
});

//ini untuk menerima token
export const setAuthToken = (token?: string) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};
