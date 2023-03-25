function *calculator(){
    const num1  = yield `I calculate Numbers`;
    const num2 = yield  `I Add numbers perticulary`;
    console.log( `sum of ${num1} and ${num2} is = ${num1 + num2}`)
}
const result = calculator();

console.log(result.next())
console.log(result.next(3))
console.log(result.next(3))

/**
 * here we pass the values via the yield to the generator and use the values inside  the generator function when execution resumes
 */