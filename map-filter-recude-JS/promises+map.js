//PROMISES
const items = [ 'a', 'b', 'c', 'd']

;(async function() {
    const promiseFunction = async (element) => {
        return new Promise((resolve, reject) => {
            return resolve(`${element} - promise`)
        })
    }

    //const itemMapped = promiseFunction('x')
    //console.log(itemMapped)//retorna uma promise

    const itemsMappedPromises = items.map(promiseFunction)
    const itemsMapped = await Promise.all(itemsMappedPromises)

    console.log(itemsMapped)
})()
//usado para chamadas assincronas
//retorna um array de promises iterado

