const students = [
    {
        name: 'Bob',
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: 'Alex',
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: 'Nick',
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: 'John',
        age: 19,
        isMarried: false,
        scores: 100
    },
]

// students => ['Bob', 'Alex', ...]

const getNames = (array) => {
    const result = []
    const getName = obj => obj.name
    for (let i = 0; i < array.length; i++) {
        const temp = getName(array[i])
        result[i] = temp
    }
    return result
}

console.log(getNames(students))

const stNames = getNames(students)
console.log(stNames === students) // false
console.log(students)

// scores +10

const addScores = (array) => {
    const result = []
    const addScoresForStudent = (obj) => {
        const copy = {...obj}
        copy.scores = obj.scores + 10
        return copy
    }
    for (let i = 0; i < array.length; i++) {
        const temp = addScoresForStudent(array[i])
        result[i] = temp
    }
    return result
}

console.log(addScores(students))

// self made map

const selfMadeMap = (array, func) => {
    const result = []

    for (let i = 0; i < array.length; i++) {
        const temp = func(array[i])
        result[i] = temp
    }
    return result
}

const getName = obj => obj.name

const addScoresForStudent = (obj) => {
    const copy = {...obj}
    copy.scores = obj.scores + 10
    return copy
}

console.log(selfMadeMap(students,getName))
console.log(selfMadeMap(students,addScoresForStudent))