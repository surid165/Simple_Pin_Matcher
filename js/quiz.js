function generatePin(){ 
    return Math.floor(Math.random()*90000) + 10000; }

const pin = generatePin();
console.log(pin);