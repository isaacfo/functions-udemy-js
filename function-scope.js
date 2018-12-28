// Global scope (convertFahrenheitToCelsius, tempOnce, TempTwo)
    // Local Scope (fahrenheit, celsius)
        // Local Scope (isFreezing)


// arguemnts are bound to thier local scopes 





 let convertFahernheitToCelsuis = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5/9


    if(celsius <= 0) {
        let isFreezing= true
    }
    return celsius
 }

let tempOne = convertFahernheitToCelsuis(32)
let tempTwo = convertFahernheitToCelsuis(68)

console.log(tempOne)
console.log(tempTwo)