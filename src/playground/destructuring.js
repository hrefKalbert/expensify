console.log('des')

const person = {
  name: 'Andrew',
  age: 26,
  location: {
    city: 'Philidelphia',
    temp: 92
  }
}




console.log(`${person.name} is ${person.age} and is currently located in ${person.location.city} where it's ${person.location.temp} degrees`)

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
      name: 'Penguin'
    }
}



const {name: publisherName = 'Self-Published'} = book.publisher



console.log(publisherName)

const menu = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']

const [item, ,price] = menu

console.log(`A medium ${item} cost ${price}`)