
"use strict";

/* -------------------------------------------------------------------------- */
console.log("--- 📁 Codewars Challenges");
/* -------------------------------------------------------------------------- */

// • 🧡: Main topic 
// • 📝: Notes 
// • 🔸: Subtopics 
// • 🔗: Sub-subtopics  
// • ⭐: Tips for easy understanding

/* -------------------------------------------------------------------------- */
// 🧡 Even or Odd (8 kyu) 

// -----------------
// 🔸 Question:
// 📝 Create a function that takes an integer as an argument and 
// returns "Even" for even numbers or "Odd" for odd numbers.

// -----------------
// 🔸 Solution:

function even_or_odd(para_num) {
    if (para_num % 2 === 0) {
        return console.log("Even");
    }
    else {
        return console.log("Odd");
    }
}
even_or_odd(50);

/* -------------------------------------------------------------------------- */
// 🧡 Century From Year (8 kyu):

// -----------------
// 🔸 Question:
/*
🔗 Introduction:
The first century spans from the year 1 up to and including the year 100, 
the second century - from the year 101 up to and including the year 200, etc.

🔗 Task:
Given a year, return the century it is in.

🔗 Examples:
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20

*/

// -----------------
// 🔸 Solution:

function century(year) {
    return Math.ceil(year / 100);
}
console.log(century(1601));

/* -------------------------------------------------------------------------- */
// 🧡 Number of People in the Bus (7 kyu):

// -----------------
// 🔸 Question:

/*
There is a bus moving in the city which takes and drops some people at each bus stop.
You are provided with a list (or array) of integer pairs. Elements of each pair represent 
the number of people that get on the bus (the first item) and the number of people that get off the bus 
(the second item) at a bus stop.

Your task is to return the number of people who are still on the bus after the last bus stop 
(after the last array). Even though it is the last bus stop, the bus might not be empty and some 
people might still be inside the bus, they are probably sleeping there :D
Take a look on the test cases.

Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. 
So the returned integer can't be negative.
The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.
*/

// -----------------
// 🔸 Solution (not_practical):

const people = [[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]];
let get_on_arr = [];
let get_off_arr = [];

var number = function(busStops) {
    // seperate people
    for(const item of busStops) {
        const [get_on, get_off] = item;
        get_on_arr.push(get_on);
        get_off_arr.push(get_off);
    }
    // total_get_on
    let sum_get_on = 0;
    for (let i = 0; i < get_on_arr.length; i++) {
        sum_get_on += get_on_arr[i];
    }
    // total_get_off
    let sum_get_off = 0;
    for (let i = 0; i < get_off_arr.length; i++) {
        sum_get_off += get_off_arr[i];
    }
    // final calculation
    return sum_get_on - sum_get_off;
}
// number(people);
console.log(number(people));

// -----------------
// 🔸 Solution (best practice):

const passengers = [[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]];

let passenger_calc = function(busStops){
	let totalPeople = 0;
    for (let i = 0; i < busStops.length; i++) {
    totalPeople += busStops[i][0];
    totalPeople -= busStops[i][1];
    }
    return totalPeople;
}
passenger_calc(passengers)

/* -------------------------------------------------------------------------- */
// 🧡 How many lightsabers do you own? (8 kyu):

// -----------------
// 🔸 Solution:

function howManyLightsabersDoYouOwn(name) {
  return name === "Zach" ? 18 : 0;
}
console.log(howManyLightsabersDoYouOwn("Zach"));

/* -------------------------------------------------------------------------- */
// 🧡 Reversed Strings (8 kyu):

// -----------------
// 🔸 Question:
// Complete the solution so that it reverses the string passed into it.

// -----------------
// 🔸 Solution (not very practical):

function solution(str) {
  const str_to_array = str.split("");
  const reverse_array = str_to_array.reverse();
  const array_to_str = reverse_array.join("");
  return array_to_str;
}
console.log(solution("Arif")); // firA

// -----------------
// 🔸 Solution (best practice):

const solution_2 = str => str.split('').reverse().join('');
console.log(solution_2("Arif")); // firA

/* -------------------------------------------------------------------------- */
// 🧡 Filter out the geese (8 kyu):

const birds =  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]

function gooseFilter(birds) {
    let geese =  ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
    return birds.filter(item => !geese.includes(item))
}
console.log(gooseFilter(birds));

/* -------------------------------------------------------------------------- */
// 🧡 Sum of positive (8 kyu):

// -----------------
// 🔸 Solution:

const num = [1,-2,3,4,5];

const positiveSum = function(para_num) {
    // filtered negative number
    const positive_num = para_num.filter(para_num_2 => para_num_2 > 0);
    // add all positive num
    let sum = 0;
    for (const item of positive_num) {
        sum += item;
    }
    return sum;
}
console.log(positiveSum(num));

/* -------------------------------------------------------------------------- */
// 🧡 Return Negative (8 kyu):

// -----------------
// 🔸 Question:

/*
In this simple assignment you are given a number and have to make it negative. 
But maybe the number is already negative?
*/

// -----------------
// 🔸 Solution:

const makeNegative = function (num) {
    return num >= 0 ? num * -1 : num;
}
console.log(makeNegative(2));

/* -------------------------------------------------------------------------- */
// 🧡 Keep Hydrated! (8 kyu):

// -----------------
// 🔸 Question:
/*

Nathan loves cycling.
Because Nathan knows it is important to stay hydrated, 

he drinks 0.5 litres of water per hour of cycling.
You get given the time in hours and you need to 
return the number of litres Nathan will drink, rounded to the smallest value.
*/

// -----------------
// 🔸 Solution:

const litres = function(para_time) {
    return Math.floor(para_time * 0.5)
}
console.log(litres(11.8));

/* -------------------------------------------------------------------------- */
// 🧡 Add Length (8 kyu):

// -----------------
// 🔸 Question:
/*
What if we need the length of the words separated by a space 
to be added at the end of that same word and have it returned as an array?

"apple ban" --> ["apple 5", "ban 3"]
*/

// -----------------
// 🔸 Solution (not very practical):

const addLength = function(str) {
    const new_word_arr = [];
    // convert arr to string
    const word_arr = str.split(" ");
    // add length in string & returned to array
    for (const item of word_arr) {
        new_word_arr.push(`${item} ${item.length}`);
    }
    return new_word_arr;
}
console.log(addLength("apple ban")); // ["apple 5", "ban 3"]

// -----------------
// 🔸 Solution (best practice):

const addLength_2 = function (str){
    return str.split(" ").map(s => `${s} ${s.length}`)
}
console.log(addLength("apple ban")); // ["apple 5", "ban 3"]

/* -------------------------------------------------------------------------- */
// 🧡 Convert a Boolean to a String (8 kyu):

// -----------------
// 🔸 Question:
/*
Implement a function which convert the given boolean value into its string representation.
Note: Only valid inputs will be given.
*/

// -----------------
// 🔸 Solution:

const booleanToString = function(para_boolean) {
    return String(para_boolean)
}
console.log(booleanToString(true));

/* -------------------------------------------------------------------------- */
// 🧡 Simple multiplication (8 kyu):

// -----------------
// 🔸 Question:
/*
This kata is about multiplying a given number by eight if it 
is an even number and by nine otherwise.
*/

// -----------------
// 🔸 Solution:

const simpleMultiplication = function(para_number) {
    return para_number % 2 === 0 ? para_number * 8 : para_number * 9;
}
console.log(simpleMultiplication(10));

/* -------------------------------------------------------------------------- */
// 🧡 Reversed Words (8 kyu):

// -----------------
// 🔸 Question:
/*
Complete the solution so that it reverses all of the words within the string passed in.
Words are separated by exactly one space and there are no leading or trailing spaces.

"The greatest victory" --> "victory greatest The"
*/

// -----------------
// 🔸 Solution:
const reverseWords = function(para_str) {
    return para_str.split(" ").reverse().join(" ");
}
console.log(reverseWords("The greatest victory"));

/* -------------------------------------------------------------------------- */
// 🧡 Quarter of the year (8 kyu):

// -----------------
// 🔸 Solution (not very practical):

const quarterOf = (para_month) => {
    if (para_month <= 3) {
        return 1;
    }
    if (para_month <= 6) {
        return 2;
    }
    if (para_month <= 9) {
        return 3;
    }
    if (para_month <= 12) {
        return 4;
    }
}
console.log(quarterOf(3));

// -----------------
// 🔸 Solution (best practice):

const quarterOf_2 = para_month => Math.ceil(para_month / 3);
console.log(quarterOf_2(3));

/* -------------------------------------------------------------------------- */
// 🧡 Sum a list but ignore any duplicates

// -----------------
// 🔸 Question:
// Please write a function that sums a list, but ignores any duplicate items in the list.
// For instance, for the list [3, 4, 3, 6] , the function should return 10.

// -----------------
// 🔸 Solution:
const num_2 = [2, 3, 4, 3, 6, 2];

const sumNoDuplicates = function(para_num) {
    const duplicate_num = para_num.filter( function(el, i, arr) {
        // console.log(arr.indexOf(el));
        return arr.indexOf(el) !== i;
    })
    const remove_duplicate_num = para_num.filter(el => !duplicate_num.includes(el));
    return remove_duplicate_num.reduce((acc, el) => acc + el);
}
console.log(sumNoDuplicates(num_2));

/* -------------------------------------------------------------------------- */
// 🧡 Remove consecutive duplicate words (7 kyu)

// -----------------
// 🔸 Question:
// Your task is to remove all consecutive duplicate words from a string, 
// leaving only first words entries. For example:

// -----------------
// 🔸 Solution:
const words = "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

const removeConsecutiveDuplicates = para_word => {
    return para_word.split(' ').filter((el ,i, arr)=> el !== arr[i+1]).join(' ')
}
console.log(removeConsecutiveDuplicates(words));

/* -------------------------------------------------------------------------- */
// 🧡 Ordered Count of Characters (7 kyu)


// const input = "abracadabra";

// const orderedCount = function(para_text) {
//     const all_letter_arr = para_text.split("");
//     const each_letter_arr = all_letter_arr.filter((el, i, arr) => i === arr.indexOf(el));
//     console.log(each_letter_arr); /// ['a', 'b', 'r', 'c', 'd']
//     const ouput_arr = each_letter_arr.map( el => {
//         let total_each_letter = 0;
//         for (let i = 0; i < all_letter_arr.length; i++) {
//             all_letter_arr.at(i) === all_letter_arr.at(i++) ? total_each_letter++ : total_each_letter;
//         }
//         return [el, total_each_letter];
//     })
//     return ouput_arr;
// }
// console.log(orderedCount(input));
