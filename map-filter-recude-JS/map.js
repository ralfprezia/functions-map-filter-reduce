/*FUNÇÃO MAP = na iteração o map varre o array 
e retorna um novo array, com a mesma quantidade de elementos do array inicial.*/

const pets = [
    {
        name: 'rex',
        type: 'dog',
        age: 10,
        weight: 25
    },
    {
        name: 'mimi',
        type: 'cat',
        age: 9,
        weight: 20
    },
    {
        name: 'gulp',
        type: 'fish',
        age: 1,
        weight: 1
    },
    {
        name: 'bolinha',
        type: 'dog',
        age: 5,
        weight: 16
    },
    {
        name: 'mingau',
        type: 'cat',
        age: 3,
        weight: 10
    },   
]
console.log(pets)

//FUNÇÂO MAP => retornando um novo array com 5 elementos= nomes do array original
const petNames = pets.map((pets) => {
    return pets.name
})

console.log(petNames)
