// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.
describe ("peopleArr", () => {
        it ("takes in an array of objects and returns an array with a sentence about each person with their name capitalized.", () => {
          const people = [
            { name: "ford prefect", occupation: "a hitchhiker" },
            { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
            { name: "arthur dent", occupation: "a radio employee" }]
        expect (peopleArr(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
        
        })
})

// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// I got RED 
//   ● peopleArr › takes in an array of objects and returns an array with a sentence about each person with their name capitalized.
// ReferenceError: peopleArr is not defined


// b) Create the function that makes the test pass. 

// make 'name' into an array 
  // capitalize the first letter of the index0
  // .charAt(0).toUpperCase() 
// return an array  
  // use .concat() to join the name and occupation arrays 


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe ("remainders", () => {
  it ("takes in a mixed data array and returns an array of only the remainders of the numbers when divided by 3", () => { 

    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]

    expect(remainders(hodgepodge1)).toEqual([2, 0, -1, 0 ])
    expect(remainders(hodgepodge2)).toEqual([ 2, 1, -1 ])

  })
})

// Expected output: [ 2, 0, -1, 0 ]
// Expected output: [ 2, 1, -1 ]

// I got RED  
// ● remainders › takes in a mixed data array and returns an array of only the remainders of the numbers when divided by 3
// ReferenceError: remainders is not defined

// b) Create the function that makes the test pass.

// use modulo 3 to divide the numbers 
// use filter and typeOf to get only the numbers out of the mixed array 
// all values should only be numbers 
// use .map() to iterate through the array 

const remainders = (array) => {
  let mixedArray = array.filter(value => typeof value === "number")
  return mixedArray.map(value => value % 3)
}

// I got GREEN  
// remainders
//     ✓ takes in a mixed data array and returns an array of only the remainders of the numbers when divided by 3 (3 ms)


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe ("cubedSum", () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
    const cubeAndSum1 = [2, 3, 4]
    const cubeAndSum2 = [0, 5, 10]
    expect(cubedSum(cubeAndSum1)).toEqual(99)
    expect(cubedSum(cubeAndSum2)).toEqual(1125)
    })
})
// Expected output: 99
// Expected output: 1125

// I got RED 
// ● cubedNum › takes in an array of numbers and returns the sum of all the numbers cubed
// ReferenceError: cubedSum is not defined

// b) Create the function that makes the test pass.

// use .map() to iterate through the array 
  // cubed is written as ** 3 
// I need a way to add the numbers as iterated 