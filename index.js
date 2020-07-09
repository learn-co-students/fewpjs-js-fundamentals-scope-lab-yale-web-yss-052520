const mAnimal = 'dog'
const yAnimal = 'cat'

function myAnimal() {
  return mAnimal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return yAnimal
}

function add2(n) {
  const two = 2
  return n + two
  // Feel free to move things around!
}