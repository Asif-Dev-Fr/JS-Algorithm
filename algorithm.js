/*
Introduction
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.

Examples
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20
*/

function century(year) {
  return Math.ceil(year / 100);
}

/* --------------------------------------------------------------------------------------------------------------------------- */

/*
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/

function solution(str) {
  return str.split("").reverse().join("");
}

/* --------------------------------------------------------------------------------------------------------------------------- */

/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/

function solution(str, ending) {
  return str.endsWith(ending);
}

/* --------------------------------------------------------------------------------------------------------------------------- */

/*
    In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

    Examples
    highAndLow("1 2 3 4 5");  // return "5 1"
    highAndLow("1 2 -3 4 5"); // return "5 -3"
    highAndLow("1 9 3 4 -5"); // return "9 -5"
*/

function highAndLow(numbers) {
  let split = numbers.split(" ");
  let max = Math.max(...split);
  let min = Math.min(...split);
  return max + " " + min;
}

/* --------------------------------------------------------------------------------------------------------------------------- */

/*
Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
348597 => [7,9,5,8,4,3]
0 => [0]
*/

function digitize(n) {
  let array = [];
  let reverse = n.toString().split("").reverse();
  for (let int of reverse) {
    array.push(parseInt(int));
  }
  return array;
}

/* --------------------------------------------------------------------------------------------------------------------------- */

/*
  The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

  To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

  Input
  Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

  Output
  Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

  Example
  input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
  output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
*/

// My code
function openOrSenior(data) {
  let newArray = [];
  for (let member of data) {
    if (member[0] >= 55 && member[1] > 7) {
      newArray.push("Senior");
    } else newArray.push("Open");
  }
  return newArray;
}

// Best function
function openOrSenior(data) {
  return data.map(([age, handicap]) =>
    age > 54 && handicap > 7 ? "Senior" : "Open"
  );
}

/* --------------------------------------------------------------------------------------------------------------------------- */

/*
  Implement a function which convert the given boolean value into its string representation.

  Note: Only valid inputs will be given.
*/

// My code :
function booleanToString(b) {
  return b === true ? "true" : "false";
}

// Best solution :
function booleanToString(b) {
  return b.toString();
}

/* --------------------------------------------------------------------------------------------------------------------------- */

/* 
  In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

  The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

  Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

  You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

  The string has a length greater or equal to one and contains only letters from ato z.

  Examples:
  s="aaabbbbhaijjjm"
  printer_error(s) => "0/14"

  s="aaaxbbbbyyhwawiwjjjwwm"
  printer_error(s) => "8/22"
*/

// My code :
function printerError(s) {
  let maxLength = s.length;
  let error = 0;
  let split = s.split("");
  for (let letter of split) {
    // if not between "a" and "m"
    if (!/^[a-mA-M]+$/.test(letter)) error += 1;
  }
  return error + "/" + maxLength;
}

// Best pratice
function printerError(s) {
  // your code
  var count = 0;
  for (var i = 0; i < s.length; i++) {
    if (s[i] > "m") {
      count++;
    }
  }
  return count + "/" + s.length;
}

const printerError = (s) => `${s.replace(/[a-m]/gi, "").length}/${s.length}`;

const printerError = ($) =>
  [($.match(/[n-z]/g) || []).length, $.length].join("/");

/* --------------------------------------------------------------------------------------------------------------------------- */

/*
  Return the number (count) of vowels in the given string.

  We will consider a, e, i, o, u as vowels for this Kata (but not y).

  The input string will only consist of lower case letters and/or spaces.
*/

// My code
function getCount(str) {
  let vowels = str.match(/[aeiou]/gi);
  return vowels === null ? 0 : vowels.length;
}

/* --------------------------------------------------------------------------------------------------------------------------- */

/*
  Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

  Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
*/

// My code
function lovefunc(flower1, flower2) {
  return (flower1 + flower2) % 2 === 0 ? false : true;
}

/* --------------------------------------------------------------------------------------------------------------------------- */

/*
  Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

  For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

  [10, 343445353, 3453445, 3453545353453] should return 3453455.
*/

// My code
function sumTwoSmallestNumbers(numbers) {
  let sort = numbers.sort((a, b) => a - b);
  return sort[0] + sort[1];
}

/* --------------------------------------------------------------------------------------------------------------------------- */

/*
  In this kata you have to correctly return who is the "survivor", ie: the last element of a Josephus permutation.

  Basically you have to assume that n people are put into a circle and that they are eliminated in steps of k elements, like this:

  josephus_survivor(7,3) => means 7 people in a circle;
  one every 3 is eliminated until one remains
  [1,2,3,4,5,6,7] - initial sequence
  [1,2,4,5,6,7] => 3 is counted out
  [1,2,4,5,7] => 6 is counted out
  [1,4,5,7] => 2 is counted out
  [1,4,5] => 7 is counted out
  [1,4] => 5 is counted out
  [4] => 1 counted out, 4 is the last element - the survivor!
  The above link about the "base" kata description will give you a more thorough insight about the origin of this kind of permutation, but basically that's all that there is to know to solve this kata.

  Notes and tips: using the solution to the other kata to check your function may be helpful, but as much larger numbers will be used, using an array/list to compute the number of the survivor may be too slow; you may assume that both n and k will always be >=1.
*/

// My code
function josephusSurvivor(n, k) {
  let people = [];
  let p = 0;
  for (let i = 0; i < n; i++) {
    people.push(i + 1);
  }
  while (people.length > 1) {
    p = (p + k - 1) % people.length;
    people.splice(p, 1);
  }
  return people[0];
}

// Best pratice
function josephusSurvivor(n, k) {
  return n < 1 ? 1 : ((josephusSurvivor(n - 1, k) + --k) % n) + 1;
}

/* --------------------------------------------------------------------------------------------------------------------------- */

/*
  This time we want to write calculations using functions and get the results. Let's have a look at some examples:

  seven(times(five())); // must return 35
  four(plus(nine())); // must return 13
  eight(minus(three())); // must return 5
  six(dividedBy(two())); // must return 3
  Requirements:

  There must be a function for each number from 0 ("zero") to 9 ("nine")
  There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
  Each calculation consist of exactly one operation and two numbers
  The most outer function represents the left operand, the most inner function represents the right operand
  Division should be integer division. For example, this should return 2, not 2.666666...:
  eight(dividedBy(three()));
*/

// My code
const zero = (operation) => (!operation ? 0 : operation(0));
const one = (operation) => (!operation ? 1 : operation(1));
const two = (operation) => (!operation ? 2 : operation(2));
const three = (operation) => (!operation ? 3 : operation(3));
const four = (operation) => (!operation ? 4 : operation(4));
const five = (operation) => (!operation ? 5 : operation(5));
const six = (operation) => (!operation ? 6 : operation(6));
const seven = (operation) => (!operation ? 7 : operation(7));
const eight = (operation) => (!operation ? 8 : operation(8));
const nine = (operation) => (!operation ? 9 : operation(9));

const plus = (number) => (other_number) => other_number + number;
const minus = (number) => (other_number) => other_number - number;
const times = (number) => (other_number) => other_number * number;
const dividedBy = (number) => (other_number) => Math.floor(other_number / number);
