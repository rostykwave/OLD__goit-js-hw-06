import users from "./users.js";

const calculateTotalBalance = users => {
  // твой код
    return users.map(user => user.balance).reduce((acc, number) => { return acc += number }, 0);
};

console.log(calculateTotalBalance(users)); // 20916