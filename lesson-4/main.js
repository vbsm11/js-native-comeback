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