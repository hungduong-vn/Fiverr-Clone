import { request } from "../configs/axios";

async function getUserByName(name) {
  return request({ method: "GET", url: `users/get-user-by-name/${name}` });
}

async function getUserByNameAuthApi(name) {
  return request({
    url: `users/get-user-by-name-author/${name}`,
    method: "GET",
  });
}

async function updateUser(data) {
  return request({ method: "PUT", url: `users/update-user`, data });
}

export { getUserByName, getUserByNameAuthApi, updateUser };
