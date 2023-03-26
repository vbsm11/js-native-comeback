const todoListId1 = '23hf-76jh';
const todoListId2 = '98ik-ds';

const todoLists = [
    {
        id: todoListId1,
        title: 'What to learn',
        filter: 'all',
        // tasks: [
        //     {id: 1, title: 'HTML', isDone: false},
        //     {id: 2, title: 'CSS', isDone: false},
        //     {id: 3, title: 'JS', isDone: false},
        // ]
    },
    {
        id: todoListId2,
        title: 'What to buy',
        filter: 'all',
        // tasks: [
        //     {id: 4, title: 'Bread', isDone: false},
        //     {id: 5, title: 'Milk', isDone: false},
        //     {id: 6, title: 'Chicken', isDone: false},
        // ]
    },
]

const tasks = {
    [todoListId1]: [ // '23hf-76jh'
        {id: 1, title: 'HTML', isDone: false},
        {id: 2, title: 'CSS', isDone: false},
        {id: 3, title: 'JS', isDone: false},
    ],
    [todoListId2]: [ // '98ik-ds'
        {id: 4, title: 'Bread', isDone: false},
        {id: 5, title: 'Milk', isDone: false},
        {id: 6, title: 'Chicken', isDone: false},
    ],
    // [12+38]: ... === '50': ...
}

// console.log(tasks[todoLists[0].title])
// console.log(tasks[todoLists[0].title].filter(t => t.id !== 1))

console.log(tasks[todoListId1][1].title) // 'CSS'

// reduce - массив => одно значение

const nums = [2, 4, 6, 3, 5]

console.log(nums.reduce((acc, el) => {
    return acc + el
}, 0))

console.log(nums.reduce((acc, el) => acc > el ? acc : el
))

const students = [
    {
        id: 1,
        name: 'Bob',
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        id: 2,
        name: 'Alex',
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        id: 3,
        name: 'Nick',
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        id: 4,
        name: 'John',
        age: 19,
        isMarried: false,
        scores: 100
    }
]


//  Из массива хотим получить подобный объект:

// const newData = {
//     '1': {
//         name: 'Bob',
//         age: 22,
//         isMarried: true,
//         scores: 85
//     },
//     '2': {
//         id: 2,
//         name: 'Alex',
//         age: 21,
//         isMarried: true,
//         scores: 89
//     }
//         ...
// }

console.log(students.reduce((acc, el) => {
    acc[el.id] = {...el}
    delete acc[el.id].id
    return acc
}, {}))


// map => reduce

console.log(students.map(s => ({...s, scores: s.scores + 20})))

console.log(students.reduce((acc, el) => {
    acc.push({...el, scores: el.scores + 20})
    return acc
}, []))