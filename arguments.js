
// Multiple arguments

let add = function (a, b, c) {
    return a + b + c
}


let result = add(10 , 1, 5)
console.log(result)



// Default arguments
// By making an argument = to soemthing it makes it default when printed, but when argument is used when calling function, default will be overwritten 
let getScoreText =  function (name = 'Anonymous', score = 0) {
        // console.log(name)
        // console.log(score)
        // template string 
        return `Name: ${name} - Score: ${score}` 
    }



// if undefined is provided for the first argument, then the default argument will be used,
let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

// Challenge area
// total, tipPercent .2

// Challenge Area
// A 25% tip on $40 would be $10
// template string at the return 
let getTip = function (total = 0, tipPercent = .2) {
    let percent = tipPercent * 100
    let tip = total * tipPercent
    return ` A ${percent}% tip on $${total} would be $${tip}`
}

let tip = getTip(40, .25);
console.log(tip)



