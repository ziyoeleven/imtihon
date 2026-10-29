import { users } from "./app.js";

function addUser(arr, name, lastName, age, job, email, password) {
  let newUser = {
    id: arr[arr.length - 1].id + 1,
    name,
    lastName,
    age,
    job,
    email,
    password,
  };
  arr.push(newUser);
  return newUser;
}

console.log(
  addUser(
    users,
    "Islombe",
    "Abdukarimov",
    19,
    "manager",
    "islom1234@gmail.com",
    "1234asl",
  ),
);
