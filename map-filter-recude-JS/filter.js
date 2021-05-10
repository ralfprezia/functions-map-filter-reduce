//ARRAY
const pets = [
    {
        name: 'rex',
        type: 'dog',
        age: 10
    },
    {
        name: 'mimi',
        type: 'cat',
        age: 9
    },
    {
        name: 'gulp',
        type: 'fish',
        age: 1
    },  
]
console.log(pets)

//FILTER = a função será chamada uma vez para cada elemento.

/*const newPets = pets.filter((pet) => {
    return pet.age < 5//um novo array de acordo com a condição, sem modificar o array pets.
})*/

//REFATORANDO O FILTER
const eMenorQueCinco = (numero) => {
    return numero < 5
}
const newPets = pets.filter(({ age }) => eMenorQueCinco(age))
console.log(newPets)