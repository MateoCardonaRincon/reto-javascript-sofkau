//Get a random int between two numbers.
function getRandomInt() {
    let min=0
    let max=4
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  export default getRandomInt