// Funciton input (argument), code, output (return value) 

// Return can only be used once in a function

let greetUser = function () {
    console.log('Welcome user!')
}

greetUser();
greetUser();
greetUser();


let square = function (num) {
    let result = num * num
    return result
    
}



// return value is set to value and otherValue 
let value = square(3);
let otherValue = square(23);

console.log(value)
console.log(otherValue)


// Challenger area

 let convertFahernheitToCelsuis = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5/9
    return celsius
 }

let tempOne = convertFahernheitToCelsuis(32)
let tempTwo = convertFahernheitToCelsuis(68)

console.log(tempOne)
console.log(tempTwo)


// Call a couple of times (32 -> 0) (68 -> 20)

// Print the converted values