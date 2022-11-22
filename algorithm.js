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

// Better :
function digitize(n) {
  let reverse = n.toString().split("").reverse().join("");
  return parseInt(reverse);
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
const dividedBy = (number) => (other_number) =>
  Math.floor(other_number / number);

/* --------------------------------------------------------------------------------------------------------------------------- */

/*
  The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

  Examples
  "din"      =>  "((("
  "recede"   =>  "()()()"
  "Success"  =>  ")())())"
  "(( @"     =>  "))((" 
  Notes
  Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
*/

// My code
function duplicateEncode(word) {
  let letters = word.toLowerCase().split("");
  let result = "";
  letters.forEach((e, i) => {
    if (letters.indexOf(e) !== i) {
      result += ")";
    } else if (letters.lastIndexOf(e) !== i) {
      result += ")";
    } else result += "(";
  });

  return result;
}

// Best pratice
function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split("")
    .map(function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? "(" : ")";
    })
    .join("");
}

/* --------------------------------------------------------------------------------------------------------------------------- */

/*
  Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

  Note: a and b are not ordered!

  Examples (a, b) --> output (explanation)
  (1, 0) --> 1 (1 + 0 = 1)
  (1, 2) --> 3 (1 + 2 = 3)
  (0, 1) --> 1 (0 + 1 = 1)
  (1, 1) --> 1 (1 since both are same)
  (-1, 0) --> -1 (-1 + 0 = -1)
  (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

*/

// My code
function getSum(a, b) {
  if (a === b) return a;
  else {
    let min = a < b ? a : b;
    let max = a > b ? a : b;
    let sum = 0;

    for (let i = min; i <= max; i++) {
      sum += i;
    }

    return sum;
  }
}

// Best pratice
const GetSum = (a, b) => {
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  return ((max - min + 1) * (min + max)) / 2;
};

/* --------------------------------------------------------------------------------------------------------------------------- */

/*
  An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

  Example: (Input --> Output)

  "Dermatoglyphics" --> true
  "aba" --> false
  "moOse" --> false (ignore letter case)
*/

// My code
function isIsogram(str) {
  let counter = 0;
  str
    .toLowerCase()
    .split("")
    .map(function (a, i, w) {
      w.indexOf(a) == w.lastIndexOf(a) ? counter : (counter += 1);
    });

  return counter === 0 ? true : false;
}

// Best pratice
function isIsogram(str) {
  return new Set(str.toUpperCase()).size == str.length;
}

/* --------------------------------------------------------------------------------------------------------------------------- */

/*
  You will be given an array a and a value x. You need to do is check whether the provided array contains the value.

  Array can contain numbers or strings. X can be either.

  Return true if the array contains the value, false if not.
*/

// My code
function check(a, x) {
  return a.includes(x) ? true : false;
}

/* --------------------------------------------------------------------------------------------------------------------------- */

/*
  Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

  Your task is to write a function maskify, which changes all but the last four characters into '#'.

  Examples
  "4556364607935616" --> "############5616"
      "64607935616" -->      "#######5616"
                "1" -->                "1"
                  "" -->                 ""

  // "What was the name of your first pet?"

  "Skippy" --> "##ippy"

  "Nananananananananananananananana Batman!"
  -->
  "####################################man!"
*/

// My code
function maskify(cc) {
  let split = cc.split("");
  if (split.length > 4) {
    let newArray = [];
    split.forEach((number, index) => {
      if (
        index === split.length ||
        index === split.length - 1 ||
        index === split.length - 2 ||
        index === split.length - 3 ||
        index === split.length - 4
      )
        newArray.push(number);
      else newArray.push("#");
    });
    return newArray.join("");
  } else return split.join("");
}

// Best pratice
function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, "#") + cc.slice(-4);
}

/* --------------------------------------------------------------------------------------------------------------------------- */

/*
  Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

  For example:

  summation(2) -> 3
  1 + 2

  summation(8) -> 36
  1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
*/

// My code
var summation = function (num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
};

// Best pratices
const summation = (n) => (n * (n + 1)) / 2;

/* --------------------------------------------------------------------------------------------------------------------------- */

/*
  ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

  If the function is passed a valid PIN string, return true, else return false.

  Examples (Input --> Output)
  "1234"   -->  true
  "12345"  -->  false
  "a234"   -->  false
*/

// My code
function validatePIN(pin) {
  let fourDigits = /^[0-9]{4}$/.test(pin);
  let sixDigits = /^[0-9]{6}$/.test(pin);
  return fourDigits || sixDigits === true ? true : false;
}

// Best pratices
function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin);
}

/* --------------------------------------------------------------------------------------------------------------------------- */

/*
  Yesterday you found some shoes in your room. Each shoe is described by two values:

  type indicates if it's a left or a right shoe;
  size is the size of the shoe.
  Your task is to check whether it is possible to pair the shoes you found in such a way that each pair consists of a right and a left shoe of an equal size.

  Example
  For:

  shoes = [[0, 21], 
          [1, 23], 
          [1, 21], 
          [0, 23]]
  the output should be true;

  For:

  shoes = [[0, 21], 
          [1, 23], 
          [1, 21], 
          [1, 23]]
  the output should be false.

  Input/Output
  [input] 2D integer array shoes
  Array of shoes. Each shoe is given in the format [type, size], where type is either 0 or 1 for left and right respectively, and size is a positive integer.

  Constraints: 2 ≤ shoes.length ≤ 50,  1 ≤ shoes[i][1] ≤ 100.

  [output] a boolean value

  true if it is possible to pair the shoes, false otherwise.
*/

// My code
function pairOfShoes(shoes) {
  const leftShoes = shoes
    .filter((el) => el[0] === 0)
    .sort((a, b) => a[1] - b[1])
    .map((el) => el[1]);
  const rightShoes = shoes
    .filter((el) => el[0] === 1)
    .sort((a, b) => a[1] - b[1])
    .map((el) => el[1]);

  if (leftShoes.length !== rightShoes.length) return false;
  if (leftShoes.join("").includes(rightShoes.join(""))) return true;
  return false;
}

// Best practice
const pairOfShoes = (shoes) =>
  Object.values(
    shoes.reduce(
      (pre, val) => ((pre[val[1]] = (pre[val[1]] || 0) + (val[0] || -1)), pre),
      {}
    )
  ).every((val) => !val);

/* --------------------------------------------------------------------------------------------------------------------------- */

/*
  ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

  If the function is passed a valid PIN string, return true, else return false.

  Examples (Input --> Output)
  "1234"   -->  true
  "12345"  -->  false
  "a234"   -->  false
*/

// My code
function areYouPlayingBanjo(name) {
  let split = name.toLowerCase().split("");
  if (split[0] === "r") return name + " plays banjo";
  else return name + " does not play banjo";
}

// Best practice
function areYouPlayingBanjo(name) {
  return (
    name +
    (name[0].toLowerCase() == "r" ? " plays" : " does not play") +
    " banjo"
  );
}

/* --------------------------------------------------------------------------------------------------------------------------- */

/*
  Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

  Examples:
  Input: 42145 Output: 54421

  Input: 145263 Output: 654321

  Input: 123456789 Output: 987654321
*/

// My code
function descendingOrder(n) {
  return parseInt(n.toString().split("").sort().reverse().join(""));
}

// Best pratice
function descendingOrder(n) {
  return parseInt(String(n).split("").sort().reverse().join(""));
}

/* --------------------------------------------------------------------------------------------------------------------------- */

/*
  Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

  For example,

  [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]
  The correct answer would be 17.

  Hint: Don't forget to check for bad values like null/undefined
*/

// My code
function countSheeps(arrayOfSheep) {
  let count = 0;
  for (let array of arrayOfSheep) {
    if (array) {
      count += 1;
    }
  }
  return count;
}

// Best pratices
function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}

/* --------------------------------------------------------------------------------------------------------------------------- */

/*
  There is a bus moving in the city, and it takes and drop some people in each bus stop.

  You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

  Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D

  Take a look on the test cases.

  Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.

  The second value in the first integer array is 0, since the bus is empty in the first bus stop.
*/

// My code
var number = function (busStops) {
  let peopleIn = 0;
  let peopleOut = 0;
  for (let pair of busStops) {
    for (let i = 0; i < pair.length; i++) {
      if (i === 0) peopleIn += pair[i];
      else if (i === 1) peopleOut += pair[i];
    }
  }

  return peopleIn - peopleOut;
};

// Best pratice
var number = function (busStops) {
  var totalPeople = 0;
  for (var i = 0; i < busStops.length; i++) {
    totalPeople += busStops[i][0];
    totalPeople -= busStops[i][1];
  }
  return totalPeople;
};

/* --------------------------------------------------------------------------------------------------------------------------- */

/*
  Rock Paper Scissors
  Let's play! You have to return which player won! In case of a draw return Draw!.

  Examples(Input1, Input2 --> Output):

  "scissors", "paper" --> "Player 1 won!"
  "scissors", "rock" --> "Player 2 won!"
  "paper", "paper" --> "Draw!"
*/

// My code
const rps = (p1, p2) => {
  let p1Won = "Player 1 won!";
  let p2Won = "Player 2 won!";
  if (p1 === p2) return "Draw!";

  if (p1 === "rock" && p2 === "scissors") return p1Won;
  else if (p1 === "scissors" && p2 === "paper") return p1Won;
  else if (p1 === "paper" && p2 === "rock") return p1Won;
  else if (p2 === "rock" && p1 === "scissors") return p2Won;
  else if (p2 === "scissors" && p1 === "paper") return p2Won;
  else if (p2 === "paper" && p1 === "rock") return p2Won;
};

// Best pratice
function rps(p1, p2) {
  if (p1 === p2) return "Draw!";
  var rules = { rock: "scissors", paper: "rock", scissors: "paper" };
  if (p2 === rules[p1]) {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }
}

/* --------------------------------------------------------------------------------------------------------------------------- */

/*
  Écrivez un programme qui affiche la température la plus proche de 0 parmi les données d'entrée. Si deux nombres sont aussi proches de zéro, alors l'entier positif sera considéré comme étant le plus proche de zéro (par exemple, si les températures sont -5 et 5, alors afficher 5).

  Affichez 0 (zéro) si aucune température n'est fournie. Sinon, affichez la température la plus proche de 0
*/

// My code
function findTemperature(param) {
  let closestToZero = 10000;
  if (param.length === 0) return (closestToZero = 0);
  for (let number of param) {
    if (Math.abs(number) < Math.abs(closestToZero)) {
      closestToZero = number;
    } else if (Math.abs(number) === Math.abs(closestToZero)) {
      closestToZero = Math.abs(number);
    }
  }
  return closestToZero;
}

/* --------------------------------------------------------------------------------------------------------------------------- */

/*
  Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

  For instance:

  "hello case".camelCase() => HelloCase
  "camel case word".camelCase() => CamelCaseWord
*/

// My code
String.prototype.camelCase = function () {
  return this.split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join("");
};

/* --------------------------------------------------------------------------------------------------------------------------- */

/*
  Trolls are attacking your comment section!

  A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

  Your task is to write a function that takes a string and return a new string with all vowels removed.

  For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

  Note: for this kata y isn't considered a vowel.
*/

// My code
function disemvowel(str) {
  let split = str.split(" ");
  return (withoutVowel = split
    .map((l) => l.replace(/[aeiouAEIOU]/g, ""))
    .join(" "));
}

// Best pratice
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, "");
}

const vowels = "aeiou";
function disemvowel(str) {
  return str
    .split("")
    .filter((letter) => !vowels.includes(letter.toLowerCase()))
    .join("");
}

/* --------------------------------------------------------------------------------------------------------------------------- */

/*
  Story
  Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

  Task
  Write a function that returns both the minimum and maximum number of the given list/array.

  Examples (Input --> Output)
  [1,2,3,4,5] --> [1,5]
  [2334454,5] --> [5,2334454]
  [1]         --> [1,1]
  Remarks
  All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.
*/

// My code
function minMax(arr) {
  arr = arr.sort((a, b) => a - b);
  return [arr[0], arr[arr.length - 1]];
}

// Best pratice
function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

/* --------------------------------------------------------------------------------------------------------------------------- */

/*
  DESCRIPTION:
  Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

  For example:

  solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
  solution(null); // should return []
*/

// My code
function solution(nums) {
  return (nums && nums.length === 0) || nums === null
    ? []
    : nums.sort((a, b) => a - b);
}

// Best pratice
function solution(nums) {
  return nums !== null
    ? nums.sort(function (a, b) {
        return a - b;
      })
    : [];
}

/* --------------------------------------------------------------------------------------------------------------------------- */

/*
  In democracy we have a lot of elections. For example, we have to vote for a class representative in school, for a new parliament or a new government.

  Usually, we vote for a candidate, i.e. a set of eligible candidates is given. This is done by casting a ballot into a ballot-box. After that, it must be counted how many ballots (= votes) a candidate got.

  A candidate will win this election if he has the absolute majority.

  Your Task
  Return the name of the winner. If there is no winner, return null / nil / None depending on the language.

  Task Description
  There are no given candidates. An elector can vote for anyone. Each ballot contains only one name and represents one vote for this name. A name is an arbitrary string, e.g. "A", "B", or "XJDHD". There are no spoiled ballots.

  The ballot-box is represented by an unsorted list of names. Each entry in the list corresponds to one vote for this name. You do not know the names in advance (because there are no candidates).

  A name wins the election if it gets more than n / 2 votes (n = number of all votes, i.e. the size of the given list).

  Examples
  # 3 votes for "A", 2 votes for "B"  -->  "A" wins the election
  ["A", "A", "A", "B", "B"]  -->  "A"

  # 2 votes for "A", 2 votes for "B"  -->  no winner
  ["A", "A", "B", "B"]  -->  None / nil / null

  # 1 vote for each name --> no winner
  ["A", "B", "C", "D"]  -->  None / nil / null

  # 3 votes for "A", 2 votes for "B", 1 vote for "C"  -->  no winner, as "A" does not have more than n / 2 = 3 votes
  ["A", "A", "A", "B", "B", "C"] -->  None / nil / null
  Note
  Please keep in mind the list of votes can be large (n <= 1 200 000). The given list is immutable, i.e. you cannot modify the list (otherwise this could lead to vote rigging).

  Good luck and have fun.
*/

// My code
function getWinner(listOfBallots) {
  //Your code here
  let obj = {};
  let count = 0;
  let winner = "";
  let totalCount = 0;
  for (let candidate of listOfBallots) {
    if (obj[candidate]) {
      obj[candidate] += 1;
      totalCount = totalCount + 1;
    } else {
      obj[candidate] = 1;
      totalCount = totalCount + 1;
    }
  }
  for (candidate in obj) {
    if (count < obj[candidate]) {
      count = obj[candidate];
      winner = candidate;
    }
  }

  if (totalCount / 2 < count) return winner;
  else return null;
}

/* --------------------------------------------------------------------------------------------------------------------------- */

/*
  DESCRIPTION:
  You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

  For example:

  Let's say you are given the array {1,2,3,4,3,2,1}:
  Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

  Let's look at another one.
  You are given the array {1,100,50,-51,1,1}:
  Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

  Last one:
  You are given the array {20,10,-80,10,10,15,35}
  At index 0 the left side is {}
  The right side is {10,-80,10,10,15,35}
  They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
  Index 0 is the place where the left side and right side are equal.

  Note: Please remember that in most programming/scripting languages the index of an array starts at 0.

  Input:
  An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

  Output:
  The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

  Note:
  If you are given an array with multiple answers, return the lowest correct index.
*/

// My code
function findEvenIndex(arr) {
  let right = arr.reduce((a, b) => a + b);
  let left = 0;
  return arr.findIndex((i) => {
    right -= i;
    if (left == right) {
      return true;
    }
    left += i;
    return false;
  });
}

/* --------------------------------------------------------------------------------------------------------------------------- */

/*
  DESCRIPTION:
  After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

  You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

  Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

  Write a code that gives out the total amount for different days(d).
*/

// My code
function rentalCarCost(d) {
  let costTotal = 0;
  if (d < 3) {
    costTotal = d * 40;
  } else if (d > 2 && d < 7) {
    costTotal = d * 40 - 20;
  } else {
    costTotal = d * 40 - 50;
  }
  return costTotal;
}

// Best pratice
function baseCost(days, rate) {
  return days * rate;
}

function discountRate(days) {
  if (days >= 7) {
    return 50;
  } else if (days >= 3) {
    return 20;
  } else {
    return 0;
  }
}

function rentalCarCost(days) {
  return baseCost(days, 40) - discountRate(days);
}

/* --------------------------------------------------------------------------------------------------------------------------- */

/*
  DESCRIPTION:
  Very simple, given an integer or a floating-point number, find its opposite.

  Examples:

  1: -1
  14: -14
  -34: 34
*/

// My code
function opposite(number) {
  return -number;
}

// Alternative
function opposite(number) {
  return number * -1;
}

/* --------------------------------------------------------------------------------------------------------------------------- */

/*
  All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

  Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

  Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.
*/

// My code
function feast(beast, dish) {
  return (
    beast.split("")[0] === dish.split("")[0] &&
    beast.split("")[beast.split("").length - 1] ===
      dish.split("")[dish.split("").length - 1]
  );
}

// Best practice
function feast(beast, dish) {
  return (
    beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
  );
}

/* --------------------------------------------------------------------------------------------------------------------------- */

/*
  DESCRIPTION:
  Can you find the needle in the haystack?

  Write a function findNeedle() that takes an array full of junk but containing one "needle"

  After your function finds the needle it should return a message (as a string) that says:

  "found the needle at position " plus the index it found the needle, so:

  Example(Input --> Output)

  ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 

*/

// My code
function findNeedle(haystack) {
  return "found the needle at position " + haystack.indexOf("needle");
}

/* --------------------------------------------------------------------------------------------------------------------------- */

/*
  DESCRIPTION:
  Make a program that filters a list of strings and returns a list with only your friends name in it.

  If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

  Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

  i.e.

  friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
  Note: keep the original order of the names in the output.

*/

// My code
function friend(friends) {
  let newArray = [];
  friends.map((friend) => {
    if (friend.length === 4) newArray.push(friend);
  });
  return newArray;
}

// Best pratices
function friend(friends) {
  return friends.filter((n) => n.length === 4);
}

/* --------------------------------------------------------------------------------------------------------------------------- */

/*
  DESCRIPTION:
  Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

  For example, if this array were passed as an argument:

  ["Telescopes", "Glasses", "Eyes", "Monocles"]

  Your function would return the following array:

  ["Eyes", "Glasses", "Monocles", "Telescopes"]

  All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

*/

// My code
function sortByLength(array) {
  return array.sort((a, b) => a.length - b.length);
}
