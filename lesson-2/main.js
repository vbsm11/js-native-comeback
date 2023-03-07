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

// self made filter

const selfMadeFilter = (array, func) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
        if (func(array[i]) === true) {
            result.push(array[i])
        }
    }
    return result
}

console.log(selfMadeFilter(students, st => st.scores >= 100))

// self made find

const selfMadeFind = (array, func) => {
    for (let i = 0; i < array.length; i++) {
        if (func(array[i]) === true) {
            return array[i]
        }
    }
}

console.log(selfMadeFind(students, st => st.name === 'Alex'))

// self made slice

const selfMadeSlice = (array, start, end) => {
    const result = []
    const endIt = end ?
        end < array.length ? end : array.length
        : array.length
    for (let i = start; i < endIt; i++) {
        result.push(array[i])
    }
    return result
}

console.log(selfMadeSlice(students, 0, 3))
console.log(selfMadeSlice(students, 0))
console.log(selfMadeSlice(students, 0, 6))

//

console.log(Array.prototype)

Array.prototype.hi = function () {
    alert('hi!!')
}

const arr = []
arr.hi()


Array.prototype.selfMadeMap = function (func) {
    const result = []

    for (let i = 0; i < this.length; i++) {
        const temp = func(this[i])
        result[i] = temp
    }
    return result
}

arr.selfMadeMap()

console.log(arr.__proto__ === Array.prototype)

console.log(students.selfMadeMap(getName))