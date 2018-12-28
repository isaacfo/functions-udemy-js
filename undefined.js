
// saying let name is declaring it, but not assiging anything to it means it is undefined 


// undefined for variables

let name ='Jen'


if (name === undefined) {
    console.log('Please provide a name')
} else {
    console.log(name)
}

// undefined for function arguments
// undefined as function return default value
let square = function (num) {
    console.log(num)
}


// if argument value is filled in function but leaving arguement value empty here makes it print undefined
// if result assigned but return isn't defined, it will print undefined
let result = square();


console.log(result)

// Null as assigned value c
let age = 27

age = null

console.log(age)
