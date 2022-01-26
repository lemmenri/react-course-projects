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


const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
    }
}

const { name: publisherName = 'Self-Published' } = book.publisher

console.log(publisherName)