/* 
const key = generateKey(16, characters);
console.log(key); // eg599gb60q926j8i*/

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(length, characters) {
  let string = '';
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * characters.length);
    string += characters.charAt(index);
  }
  return string;
}

const key = generateKey(10, characters);
console.log(key);
