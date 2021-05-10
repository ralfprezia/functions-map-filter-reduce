//REDUCE executa uma função para cada elemento retornando um único valor
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
//Qual o peso de todos os animais somados?

//REDUCE - tem que receber um valor inicial, neste caso = 0
/*const totalWeight = pets.reduce((total, pet) => {
    return total + pet.weight
}, 0)
console.log(totalWeight)*/

//retornando um objeto com REDUCE
/*const totalWeight = pets.reduce((total, pet) => {
    return {
        totalAge: total.totalAge + pet.age,
        totalWeight: total.totalWeight + pet.weight
    }
}, { totalAge: 0, totalWeight: 0 })
console.log(totalWeight)*/

//Retorna somente a soma dos pesos dos cachorros
const totalWeight = pets.reduce((total, pet) => {
    if (pet.type !== 'dog') return total

    return total + pet.weight
}, 0)
console.log(totalWeight)
