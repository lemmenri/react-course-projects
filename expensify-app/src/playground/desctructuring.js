//
// Object destructuring
//

// const person = {
//     name: 'Rick',
//     age: 32,
//     location: {
//         city: 'Rijkevoort',
//         temp: 8
//     }
// }

// const { name: firstName = 'Anonymous', age } = person

// console.log(`${firstName} is ${age}`)

// const { city, temp: temperature } = person.location

// if (city && temperature) {
//     console.log(`It's ${temperature} degrees in ${city}`)
// }


// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//     }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher

// console.log(publisherName)

//
// Array destructuring
//

const address = ['1299 S juniper Street', 'Philadelphia', 'Pennsylvania', '19147']
const [, city, state = 'New York'] = address
console.log(`You are in ${city} ${state}`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']
const [product, , price] = item
console.log(`A medium ${product} costs ${price}`)