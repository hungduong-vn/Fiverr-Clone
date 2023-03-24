import { request } from "../configs/axios";

async function getUserByName(name) {
  return request({ method: "GET", url: `users/get-user-by-name/${name}` });
}

async function updateUser(data) {
  return request({ method: "PUT", url: `users/update-user`, data });
}

export { getUserByName, updateUser };
