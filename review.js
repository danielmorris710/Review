/* 
                     __ 
                  | /   
                  |(___ 
                  )    )
                _/  __/ 
                        
        __                       
       /  |           /          
      (___| ___         ___      
      |\   |___) \  )| |___)|   )
      | \  |__    \/ | |__  |/\/ 

*/

// Instructions: Follow the prompts and make sure to check your answer in the console. Some of the methods I am requiring for you to us we didn't do in class yet. That's on purpose, if you need assistance look back in lessons, and of course Google. :) 

// =================================================
//                     VARIABLES
// =================================================

// 1.) Declare a variable
let x = 5
console.log(x)

// 2.) Change the value of this variable
x = 12
console.log(x)

// 3.) Change the data type of this variable
x = 'string 12'
console.log(x)

// 4.) Create another variable and the one from above to concatenate
let y = ' is a string'
let z = x.concat(y)
console.log(z)

// 5.) Use any of the variables above or create new ones and print using string interpolation
let i = `${z}`
console.log(i)

// ================ Variable Names =================
/* 
    • Case-sentive! Try it out! :O
    • Can contain letters, digits, or the symbols $ and _
    • Can't start with 0-9
    • Can't use reserved keywords in JS such as var, function, return, etc. 
*/

// =================================================
//                      STRINGS
// =================================================

// Look up the following string methods!

// Using charAt(), print the letter i in Sabrina
let sabrina = 'Sabrina'
let findS = sabrina.charAt(4)
console.log(findS)

// Define Unicode in a comment, and get the Unicode using charCodeAt() of the third character in Teddy

// Unicode is a universal character set that gives every character a unique number //
let teddy = 'Teddy'
let findT = teddy.charCodeAt(2)
console.log(findT)

// Using fromCharCode() - make it readable for us :). You'll see!
let findD = String.fromCharCode(100)
console.log(findD)

// Take your first and last name and concat()
let firstName = 'Daniel'
let lastName = ' Morris'
let fullName = firstName.concat(lastName)
console.log(fullName)

// Create a string and make it return true using startsWith()
let random = 'Let this be what it may be'
console.log(random.startsWith('Let'))

// Now use any variable with endsWith() and return false
console.log(random.endsWith('Let'))

// Finish the following sentence. Use includes() and return true.
const ozgur = 'Once upon a time Ozgur looked up at the Moon, and saw his future'
console.log(ozgur.includes('future'))

// Help! I'm looking for my cow! Using indexOf() help Josh find his cow. What's the index of cow?
const joshHadALittleLambOopsCow = "Josh lives in a farm. Josh was overwhelmed with coding. Josh is stressed out. Josh fed the chickens this morning. He watered his plants. He took his cow Betsy on a walk. Josh went home without Betsy. Josh went to bed that night, and realized he went home alone."
console.log(joshHadALittleLambOopsCow.indexOf('cow'))

// Oh no! The alien doppelgangers are here. Let's use our laserbeam lastIndexOf() to shoot down the last alien named Vanessa in the String Universe.

const vanessa = "I am the Alpha Vanessa. I am the Omega Vanessa. We do not come in peace."
console.log(vanessa.lastIndexOf('Vanessa'))

// Can we use length for strings? I don't know, you tell me.
const noWeCantTeo = "but did you try it out though?"
console.log(noWeCantTeo.length)

// If only it was this easy to replace() my ex. Totally not joking, LOL. JK
const replaceGokuWithVegeta = "For my DBZ fans, we all know Goku is the best!"
console.log(replaceGokuWithVegeta.replace('Goku', 'Vegeta'))

// Josh has been forgetful lately. Let's help Josh by using search(), and find their right 'wifey'. 
const joshIsLookingForWifey = "WIFEY 1, wifey 2, WiFeY 3, Wifey 4"
console.log(joshIsLookingForWifey.search('wifey'))

// I guess we can share this pizza sentence. Use slice() to return the other half of pizza.
const pizzaSentence = "pizza, other half of pizza"
console.log(pizzaSentence.slice(7))

// Now using the pizza sentence, return only pizza (before the comma)
console.log(pizzaSentence.slice(0, -21))

// Okay, but who decided to go to this expensive restaurant? Yaz, Poornima, and Leshawn decided to split() the bill. Return an array separating Yaz, Poornima, and Leshawn.
const splitTheBill = "Yaz, Poornima, and Leshawn"
console.log(splitTheBill.split(' '))

// OH NO! The alien invaders from earlier were so against bill splitting so they decided to split() Yaz, Poornima, and Leshawn into pieces. Using splitTheBill, return an array separating all three by characters.
console.log(splitTheBill.split(''))

// Use this toLowerCase()
const angry = "LOWER YOUR VOICE DOWN IF YOU AIN'T PAYING MY BILLS."
console.log(angry.toLowerCase())

// Tuan was angry today. Create a string with words that Tuan would yell out. Now lowercase it, to tell Tuan to chill out. 
let tuan = "YOU KNOW MY BANK ACCOUNT IS FROZEN."
console.log(tuan.toLowerCase())

// toUpperCase()
const jahlunSaidToPutSomeRespectToHisName = "jahlun"
console.log(jahlunSaidToPutSomeRespectToHisName.toUpperCase())

// substring()
// on the chopping block...

// Returns "ell"
const basicGreeting = "Hello World"
console.log(basicGreeting.substring(1, 4))

// Returns "JavaScript"
const ohReally = "JavaScript Substring"
console.log(ohReally.substring(0,10))

// Returns aol.com
const aslDays = "xXteoWuzHereXx@aol.com"
console.log(aslDays.substring(aslDays.length-7))

// trim()
// If only I can use this for my love handles...
// Create a variable with a string value with some extra loving on both sides.
let extra = "      love handles     "
console.log(extra.trim())
// =================================================
//                     BOOLEAN
// =================================================

// I just want my dreams to come true. 
// With the powers of logical and comparison operators, PRINT TRUE please!
// Replace the underscores.

const a = 5;
const b = 10;
const c = 15;
const d = "Keke"

console.log(a < b)
console.log(c > b)
console.log(d == d)
console.log(d != a)
console.log(a < 15)
console.log(a < b < c)
console.log(c > b > a != d)

// =================================================
//                     LOOPS
// =================================================

// Ken has a headache today and he said the room has been spinning like crazy. Make Ken's room spin 10 times using FOR LOOP. Make him print a sentence.
for(i = 0; i < 10; i++){  
}
console.log(`Ken's head spinned ${i} times.`)

// Harry said that was so mean of Teo to do Ken dirty like that. Make Teo's vision spin 20 times FOR LOOP.
for(i = 0; i < 20; i++){
}
console.log(`Teo's vision spinned ${i} times`)
// But wait! Lisa said, while Teo is spinning 20 times. Let's make him say "I'm sorry". Print I'm sorry 20 times using a WHILE loop.
let s = 0
while(s < 20){
  console.log('I\'m sorry.')
  s++
}

// For the next three, look for the syntax of FOR IN and FOR OF loop. Very easy to understand syntax, and very clean :) 

// To The Left! To The Left! Everything I want in the console to the left. Print thing1, thing2, thing 3 using (FOR IN LOOP)
const whateverQueenBeySaid = {
  thing1: 'shoes',
  thing2: 'clotes',
  thing3: 'gaming console'
}
for (let x in whateverQueenBeySaid){
  console.log(x)
}

// Using (FOR IN LOOP), print the indexes of the array.
const lana = ['l', 'a', 'n', 'a']
for(let x in lana){
  console.log(x)
}
// USE (FOR OF LOOP)!
const tia = ['teo', 'the', 'syntax', 'of', 'this', 'is', 'cleaner']
let t = 0;

for (let x of tia) {
console.log(t);
t++;
}

// Look into forEach() loop, it accepts a callback aka a function inside a function. 
// Swathi said don't forget each person. No person left behind! Use forEach() to iterate over the array perscholas. Inside the function, create a variable with the string "PS". Print their name in the console concatenated with the variable. 
const perscholas = ['Amira', 'Arely', 'Jonathan']
perscholas.forEach(function(perscholas){
  let x = "PS"
  console.log(perscholas +' '+ x)
})

// =================================================
//                     ARRAYS
// =================================================

// Look up the following: Make a note of what each one of these methods do
// push() adds an element to the end of the array 
// pop() removes the last element of the array 
// unshift() adds an element to the beginning of the array
// shift() removes the first element of the array
// concat() joins to arrays to form a new array / or item 
// splice() add new items to an array ina spot
// slice() extracts a section of a string or array 
// sort() puts arrays elements in acensing order a-z 1-10
// includes() checks to see if a string contains a specified string
// indexOf() find the firt index that contain a certain value 
// length returns length of a property

const fruits = ['apple', 'banana', 'orange']

// Print banana
fruits.splice()
console.log(fruits[1])

// Let's turn it up a notch. I won't tell you what array methods to use. 

// Join all the elements of the array into a string separated by a space.
console.log(fruits.join(` `))

// Remove orange
fruits.pop()
console.log(fruits)

// Add strawberry, kiwi, and grapes at the end
fruits.push('strawberry', 'kiwi', 'grapes')
console.log(fruits)

// Remove apple
fruits.shift()
console.log(fruits)

// Add mango at the beginning of the array
fruits.unshift('mango')
console.log(fruits)

// Add lemon, and grapefruit between mango and banana
fruits.splice(1, 0, 'lemon','grapefruit')
console.log(fruits)

// Remove banana and strawberry
fruits.splice(3,2)
console.log(fruits)

// Create a new array called exoticFruits. Add 3 exotic fruits inside of this array. Create a new variable and assign it with the value of concatinating fruits array and exoticFruits array.
const exoticFruits = ['passion fruit', 'yellow watermelon', 'spanish limes']
let newFruits = fruits.concat(exoticFruits)
console.log(newFruits)

// Print the last two exotic fruits without altering the newly concatenated array.
console.log(exoticFruits.splice(-2,2))
console.log(newFruits)

// Monalissa said she needs help re-organizing her items in alphabetical order.
const monalissaIsMessy = ["pencil", "paper", "notebook", "computer"]
console.log(monalissaIsMessy.sort())

// Kevin accidentally stepped into the mirror world and needs help reversing his words.
const mirrorMirrorOnTheWall = ["all", "them", "of", "greatest", "the", "is", "who"]
console.log(mirrorMirrorOnTheWall.reverse())





// ===== HIGHER ORDER METHODS =====
// Rafael said he''s trying to stop cursing so much, and he wants to start with his text messages. Help him write code to eliminate the badword in his sentences. Must return a string sentence. Must use filter(). :) 
const RafaelNoBadWords = "I am so tired of this badword food. I do not want this badword badword food."    
const split_string = RafaelNoBadWords.split(" ");

let filtered = split_string.filter(function(value) {
  return value != 'badword'
})
console.log(RafaelNoBadWords)
console.log(filtered)
console.log(filtered.join(' '))


// Man math is hard. Let's make our computer do it for us. Use reduce() to find the total of the numbers in numbersToAddUp
const numbersToAddUp = [99, 5677, 232, 84, 2, 231]
let sum = numbersToAddUp.reduce(function (firstNum, secondNum) {
  return firstNum + secondNum;
});
console.log(sum);



// ===== SPREAD OPERATOR ===== 

// Create a variable and assign a value of a copied array using the spread operator
let newVar = [...numbersToAddUp]

// Create two arrays with any elements and connect both of them using the spread operator. Save the connected arrays into a new variable.
let one = [2,3,4]
let two = [5,6,7]
let three = [...one,...two]
console.log(three)

// Using the variable with the newly connected arrays, use spread operator to add something at the end.
let four = [ 8]
let five = [...three,...four]
console.log(five)

// Using the variable with the newly connected arrays, use spread operator to add something at the beginning.
let six = [1]
let seven = [...six,...three]
console.log(seven)

// ===== ACCESS =====

// Donut Shopping
const donutShop =[
  [
    'firecracker',
    'chocolate',
    'blueberry'
  ],
  [
    ['orange', 'applecrumble'],
    ['cream', 'peanutbutter', 'coconut']
  ],
  [
    [
      [
        [
          ['flavor of the week']
        ], ['ihatethis']
      ]
    ]
  ]
]

// Anthony wants applecrumble. Print please!
console.log(`Anthony wants a ${donutShop[1][0][1]}.`)

// Tosi wants ihatethis. :) Print!
console.log(`Tosi wants a ${donutShop[2][0][0][1]}.`)

// =================================================
//                     IF/ELSE
// =================================================

// Teo is a person. I would hope so...
let teo = 'person'
let teoSex = 'male'
let teoHungry = 'eh'
// Check if Teo is a person. If true, print 'Teo is a person!' if not then print 'Teo is not a person!'
if(teo == 'person'){
  console.log('Teo is a person')
}else{
  console.log('Teo is not a person')
}
// If Teo is a person, check to see if he is a male or a female. If male, print 'You got it right!' if not then print 'Wrong. Teo is going to remove you from the class.'.
if(teoSex == 'male'){
  console.log('You got it right!')
}else{
  console.log('Wrong. Teo is going to remove you from the class.')

}
  
// If male, check to see if Teo is hungry. If Teo is 'hungry' then print 'Let's buy Teo some tacos!'. If Teo is 'not hungry' then print 'He doesn't need to eat.'. Anything else, print 'If Teo is not hungry, am I hungry?'
if(teoSex == 'male' && teoHungry == 'hungry'){
    console.log('Let\'s buy Teo some tacos!')  
} else if(teoSex == 'male' && teoHungry == 'not hungry'){
    console.log('He doesn\'t need to eat.')
}else if( teoSex == 'male'){
  console.log('If Teo is not hungry, am I hungry?')
}

// Create a if/else ternary to check if Gustavo is the coolest. If coolest, print 'You got that right!', else print 'James wants to argue. He says he's the best!'
let coolest = 'Gustavo'

if(coolest == 'Gustavo'){
  console.log('You got that right!')
}else{
  console.log('James wants to argue. He says he\'s the best!')
}




// =================================================
//                     FUNCTIONS
// =================================================

// Don't forget to call your functions :)

// Create a function called sayGreeting and PRINT 'Hello, ma'amsir!'
function sayGreeting(){
  console.log('Hello, ma\'amsir !')
}
  sayGreeting()

// Create a function that takes a string as a parameter. PRINT 'This is my (STRING)'. Please replace the (STRING) with the parameter. Don't play with me haha. 
function print(string) {
  console.log('This is my ' + string)
}
print('function')
print('Don\'t play with me haha.')

// Create a function called add that takes in three number parameters. Create 3 variables and assign numerical values to them. Invoke your add() and pass in those three variables as arguments.
function add(param1, param2, param3) {
  console.log (param1 + param2 + param3)
  }

const example1 = 5
const example2 = 2
const example3 = 3

add(example1, example2, example3)


// Create a function called fightClub() that accepts a name parameter.  If the name:
// 'Teo' RETURN '1st rule: You do not talk about Fight Club.'
// 'Manara' RETURN '2nd rule: YOU DO NOT TALK ABOUT FIGHT CLUB.'
// 'Liv' RETURN '3rd rule: If someone yells "Stop!", goes limp, taps out, the fight is over.'
// 'Devin' RETURN '4th rule: Only two guys to a fight.'
// Anything else, RETURN 'No shirts
function fightClub(name){
  if (name == 'Teo'){
    console.log('1st rule: You do not talk about Fight Club.')
  }else if( name == 'Manara'){
    console.log('2nd rule: YOU DO NOT TALK ABOUT FIGHT CLUB.')
  }else if( name == 'Liv'){
    console.log('3rd rule: If someone yells "Stop!", goes limp, taps out, the fight is over.')
  }else if( name == 'Devin'){
    console.log('4th rule: Only two guys to a fight.')
  }else{
    console.log('No shirts.')
  }
}

fightClub('Teo')
fightClub('Manara')
fightClub(teo)



// Create a function called hello() that prints 'Hello'. Return an anonymous function inside hello() and have it print 'Goodbye'. Invoke your hello function in some way to see Hello and Goodbye in the console.
function hello(greet = 'Goodbye'){
  console.log('Hello '+ greet)
}
hello()

// Create a function expression with your first name as the variable and then print your first and last name
let Daniel = function(){
  console.log( 'Daniel Morris' )
}
Daniel()

// Create an arrow function that accepts a number and have it return that number doubled
let double = (a) => a*2
console.log(double(6))



// =================================================
//                     OBJECTS
// =================================================

// Create an object and call it human. Add a name, age, and location property. Give the properties values.
const human = {
  name: "Daniel",
  age: 30,
  location : "NYC",
}



// Access the name using dot notation
console.log(human.name)

// Access the age using square brackets
console.log(human['age'])

// Use object destructuring to access location
 const {name, age, location}= human
 console.log(location)

// ACCESS Granted
const bulbasaur = {
  name: 'Bulbasaur',
  abilities: [
    {
      ability: 'overgrow'
    },
    {
      ability: 'chlorophyll'
    }
  ],
  moves: ['razor-wind', 'swords-dance', 'cut'],
  sound: function () {
    console.log('Bulbahhhh!!!!!')
  }
}

// Print overgrow
console.log(bulbasaur.abilities[0])

// Print cut
console.log(bulbasaur.moves[2])

// Print Bulbahhhh!!!!!
bulbasaur.sound()

// Add a height of 7 to bulbasaur using the dot notation. (Don't change bulbasaur object manually) 
bulbasaur.height = 7
console.log(bulbasaur.height)       

// Add a property called order and assign it a value of 1 using the square brackets. (Don't change bulbasaur object manually)
bulbasaur['order'] = 1
console.log(bulbasaur.order)

// Print an array that contains every single properties in bulbasaur
const myArray = Object.keys(bulbasaur)
console.log(myArray)

// Print every single properties one by one in the console
Object.keys(bulbasaur).forEach(prop => console.log(prop))

// Print an array that contains every single values in bulbasaur
const myArrays = Object.values(bulbasaur)
console.log(myArrays)