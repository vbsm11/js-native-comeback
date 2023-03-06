// const user = {  // #4567 (адрес объекта в ОПБ)
//     name: "Bob",
//     age: 26,
//     isMarried: true,
//     friends: ["Ales", "Bob", "John"]
// }

// const arr = [1,2,3,4,5];
//
// const copyUser = user;  // #4567 - тот же адрес
// не происходит создание объекта, нет {}
//  new Object() - вызов ф-ции контсруктора
//  Object.assign({}, user) - эквивалент {...user} - старомодно
//  [] - new Array(...0)
//
// user.name = "Anna";
// console.log(copyUser.name);
//
// const realCopyUser = {...user} // #5666
//  realCopyUser.name = user.name;
//  realCopyUser.age = user.age;
//  realCopyUser.isMarried = user.isMarried;
//
// const realCopyArr = [...arr];
//
// console.log(realCopyUser);
// console.log(realCopyUser === user); // false - лежат в разных местах памяти(разные ссылки)
// console.log(copyUser === user);
//
// realCopyUser.name = "Bob";
// console.log(user.name);

const user = {  // #4567 (адрес объекта в ОПБ)
    name: "Bob",
    age: 26,
    isMarried: true,
    friends: ["Ales", "Bob", "John"],
    address: {
        city: "Bobruisk",
        street: "Lenina"
    }
}

const copyUser = {...user};
copyUser.friends.push("Ann");
console.log(user);
console.log(user === copyUser); // false - разные объекты, оба раза созданы объекты {}
console.log(user.friends === copyUser.friends); // true!!!!

// const deepCopy = {...user, friends: [...user.friends]}
const deepCopy = {...user, friends: [...user.friends], address: {...user.address}};
console.log(deepCopy);
console.log(deepCopy === user);
console.log(deepCopy.address === user.address);

const students = [
    {name: "Bob"},
    {name: "Alex"},
    {name: "Ann"}
]

const copyStudents = [...students];

// const deepCopyStudents = [];
// for (let i = 0; i < students.length; i++) {
//     deepCopyStudents[i] = {...students[i]};
// }

const deepCopyStudents = students.map(student => {
    return {...student}
});

