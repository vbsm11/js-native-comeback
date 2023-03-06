// типы данных

// примитивы
// number, string, boolean, null, undefined, NaN, Symbol, BigInt

// объекты
// object, array, function

// отличия объектов от примитивов
// - более сложная структура
// - имеют свойства и методы
// - ссылочный тип данных

const user1 = { // new Object(); в переменной user1 хранится ссылка на объект
    name: 'Bob',
    age: 24,
    isStudent: false
} // литерал объекта

// const user2 = user1
//
// user2.name = 'Alex'
// console.log(user1.name)

// const user1Copy = {
//     name: user1.name,
//     age: user1.age,
//     isStudent: user1.isStudent
// }
//
// console.log(user1 === user1Copy)

const user1Copy = {...user1}

user1Copy.name = 'Alex'
console.log(user1)
console.log(user1 === user1Copy) // true or false

const users = [
    {
        id: 1,
        name: 'Bob',
        isStudent: true
    },
    {
        id: 2,
        name: 'Alex',
        isStudent: true
    },
    {
        id: 3,
        name: 'Ann',
        isStudent: true
    },
    {
        id: 4,
        name: 'Donald',
        isStudent: true
    },
]

// изменения данных в реакте производим иммутабельно
// создаем копию -> вносим изменения в копию -> изпользуем копию с изменениями

const usersCopy = [...users]
usersCopy.pop()

console.log(users)
console.log(usersCopy)

console.log(users === usersCopy) // false -> react увидит изменения и запустит перерисовку

// C(R)UD

// создание(добавление) нового элемента

const newUser = {
    id: 5,
    name: 'John',
    isStudent: true
}

const addUsers = [...users, newUser]

// выборочное изменение элемента
const upd1Users = addUsers.map(user => user.name === 'John'? {...user, isStudent: false} : user)
console.log(upd1Users)

// изменение всех элементов

const upd2Users = upd1Users.map(user => ({...user, isMarried: true}))
console.log(upd2Users)

// удаление элемента

const deleteUsers = upd2Users.filter(user => user.id !== 5)
console.log(deleteUsers)
console.log(deleteUsers === upd2Users)