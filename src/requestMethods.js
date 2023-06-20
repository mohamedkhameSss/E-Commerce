import axios from "axios";

const BASE_URL = process.env.URL_REACT + "/api/";

const user = JSON.parse(localStorage.getItem("prsist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  //   headers: { token: `Bearer ${TOKEN}` },
  headers: {
    token: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NWY4MzA3ZTkyOWM2N2Y5ZDY1ZmVkYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NDM2NjM0NiwiZXhwIjoxNjg0NjI1NTQ2fQ.QfgT4yeRYJcLzQ2xPEIbAUQQIsWCRancwlkdE4DZbTE`,
    "Access-Control-Allow-Origin": process.env.URL_REACT,
  },
});
