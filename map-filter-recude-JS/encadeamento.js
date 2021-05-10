//ENCADEAMNENTO
const pets = [
    {
        name: 'rex',
        type: 'dog',
        age: 10,
        weight: 10
    },
    {
        name: 'mimi',
        type: 'cat',
        age: 9,
        weight: 5
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
        weight: 12
    },
    {
        name: 'mingau',
        type: 'cat',
        age: 3,
        weight: 8
    }  
]

//Retorna somente a soma dos pesos dos cachorros
//const totalWeight = pets.reduce((total, pet) => {
//    if (pet.type !== 'dog') return total
//
//    return total + pet.weight
//}, 0)
//console.log(totalWeight)

/*//Retorna a soma total dos pesos de todos os elementos
const totalWeight = pets.reduce((total, pet) => {
    return total + pet.weight
}, 0)

console.log(totalWeight)
*/

//Retornar somente gatos
/*const cats = pets.filter((pet) => {
    return pet.type === 'cat'
})

console.log(cats)*/

//ENCADEAMENTO retornando um array com a soma do pesos dos gatos

const totalWeightCats = pets.filter((pet) => {
    return pet.type === 'cat'
}).reduce((total, pet) => {
    return total + pet.weight
},0)

console.log(totalWeightCats)

