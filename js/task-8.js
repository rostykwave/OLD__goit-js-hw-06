import users from "./users.js";

const getUsersWithFriend = (users, friendName) => {
  // твой код
  return users.reduce((acc, user) => {
  
    if (user.friends.some(friend => friend === friendName)) {
      acc.push(user.name); 
    }

  return acc;
   }, []);

};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]