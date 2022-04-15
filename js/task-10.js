import users from "./users.js";

const getSortedUniqueSkills = users => {
  // твій код
    ////до sort
      const unsorted = [...users]
        .flatMap(user => user.skills);
    console.log(unsorted);

    
    ////до reduce
    const repeated = [...users]
        .flatMap(user => user.skills)
        .sort((a, b) => a.localeCompare(b));
    console.log(repeated);
    

    ///остаточне рішення
    return [...users]
        .flatMap(user => user.skills)
        .sort((a, b) => a.localeCompare(b))
        .reduce((acc, skill) => {
            if (!acc.some(a => a === skill)) {
                acc.push(skill);
            }
            return acc;
        },[]);
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]


/////Отримати масив всіх умінь всіх користувачів (поле skills), при цьому не має бути повторюваних умінь і вони повинні бути відсортовані в алфавітному порядку.