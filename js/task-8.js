import users from "./users.js";

const getUsersWithFriend = (users, friendName) => {
  // твой код
  // return users.reduce((acc, user) => {
  
  //   if (user.friends.some(friend => friend === friendName)) {
  //     acc.push(user.name); 
  //   }

  // return acc;
  //  }, []);
  
  ///інший варіант
  return users
    .filter(
      user => user.friends
        .some(friend => friend === friendName))
    .map(user => user.name);

};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]