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

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/

function solution(str) {
  return str.split("").reverse().join("");
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/

function solution(str, ending) {
  return str.endsWith(ending);
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

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

/* ---------------------------------------------------------------------------------------------------------------------------*/

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

/* ---------------------------------------------------------------------------------------------------------------------------*/

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

// Alternative
function openOrSenior(data) {
  return data.map(([age, handicap]) =>
    age > 54 && handicap > 7 ? "Senior" : "Open"
  );
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  Implement a function which convert the given boolean value into its string representation.

  Note: Only valid inputs will be given.
*/

// My code :
function booleanToString(b) {
  return b === true ? "true" : "false";
}

// Alternative
function booleanToString(b) {
  return b.toString();
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

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

// Alternative
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

/* ---------------------------------------------------------------------------------------------------------------------------*/

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

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

  Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
*/

// My code
function lovefunc(flower1, flower2) {
  return (flower1 + flower2) % 2 === 0 ? false : true;
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

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

/* ---------------------------------------------------------------------------------------------------------------------------*/

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

// Alternative
function josephusSurvivor(n, k) {
  return n < 1 ? 1 : ((josephusSurvivor(n - 1, k) + --k) % n) + 1;
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

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

/* ---------------------------------------------------------------------------------------------------------------------------*/

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

// Alternative
function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split("")
    .map(function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? "(" : ")";
    })
    .join("");
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

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

// Alternative
const GetSum = (a, b) => {
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  return ((max - min + 1) * (min + max)) / 2;
};

/* ---------------------------------------------------------------------------------------------------------------------------*/

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

// Alternative
function isIsogram(str) {
  return new Set(str.toUpperCase()).size == str.length;
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  You will be given an array a and a value x. You need to do is check whether the provided array contains the value.

  Array can contain numbers or strings. X can be either.

  Return true if the array contains the value, false if not.
*/

// My code
function check(a, x) {
  return a.includes(x) ? true : false;
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

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

// Alternative
function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, "#") + cc.slice(-4);
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

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

// Alternative
const summation = (n) => (n * (n + 1)) / 2;

/* ---------------------------------------------------------------------------------------------------------------------------*/

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

// Alternative
function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin);
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

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

// Alternative
const pairOfShoes = (shoes) =>
  Object.values(
    shoes.reduce(
      (pre, val) => ((pre[val[1]] = (pre[val[1]] || 0) + (val[0] || -1)), pre),
      {}
    )
  ).every((val) => !val);

/* ---------------------------------------------------------------------------------------------------------------------------*/

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

// Alternative
function areYouPlayingBanjo(name) {
  return (
    name +
    (name[0].toLowerCase() == "r" ? " plays" : " does not play") +
    " banjo"
  );
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

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

// Alternative
function descendingOrder(n) {
  return parseInt(String(n).split("").sort().reverse().join(""));
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

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

// Alternative
function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

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

// Alternative
var number = function (busStops) {
  var totalPeople = 0;
  for (var i = 0; i < busStops.length; i++) {
    totalPeople += busStops[i][0];
    totalPeople -= busStops[i][1];
  }
  return totalPeople;
};

/* ---------------------------------------------------------------------------------------------------------------------------*/

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

// Alternative
function rps(p1, p2) {
  if (p1 === p2) return "Draw!";
  var rules = { rock: "scissors", paper: "rock", scissors: "paper" };
  if (p2 === rules[p1]) {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

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

/* ---------------------------------------------------------------------------------------------------------------------------*/

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

/* ---------------------------------------------------------------------------------------------------------------------------*/

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

// Alternative
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

/* ---------------------------------------------------------------------------------------------------------------------------*/

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

// Alternative
function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

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

// Alternative
function solution(nums) {
  return nums !== null
    ? nums.sort(function (a, b) {
        return a - b;
      })
    : [];
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

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

/* ---------------------------------------------------------------------------------------------------------------------------*/

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

/* ---------------------------------------------------------------------------------------------------------------------------*/

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

// Alternative
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

/* ---------------------------------------------------------------------------------------------------------------------------*/

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

/* ---------------------------------------------------------------------------------------------------------------------------*/

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

// Alternative
function feast(beast, dish) {
  return (
    beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
  );
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

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

/* ---------------------------------------------------------------------------------------------------------------------------*/

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

// Alternative
function friend(friends) {
  return friends.filter((n) => n.length === 4);
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

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

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  Build Tower
  Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

  For example, a tower with 3 floors looks like this:

  [
    "  *  ",
    " *** ", 
    "*****"
  ]
  And a tower with 6 floors looks like this:

  [
    "     *     ", 
    "    ***    ", 
    "   *****   ", 
    "  *******  ", 
    " ********* ", 
    "***********"
  ]

*/

// My code
function towerBuilder(nFloors) {
  // build here
  let array = [];
  let sign = "*";
  let space = " ";
  for (let i = 0; i < nFloors; i++) {
    array.push(
      space.repeat(nFloors - i - 1) +
        sign.repeat(i * 2 + 1) +
        space.repeat(nFloors - i - 1)
    );
  }
  return array;
}

// Alternative
function towerBuilder(n) {
  return Array.from({ length: n }, function (v, k) {
    const spaces = " ".repeat(n - k - 1);
    return spaces + "*".repeat(k + k + 1) + spaces;
  });
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

  Examples (Input -> Output)
  * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
  * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
  * [42, 54, 65, 87, 0]             -> min = 0, max = 87
  * [5]                             -> min = 5, max = 5
  Notes
  You may consider that there will not be any empty arrays/vectors.
*/

// My code
var min = function (list) {
  return Math.min(...list);
};

var max = function (list) {
  return Math.max(...list);
};

// Alternative
var min = function (list) {
  list.sort((a, b) => a - b);
  return list[0];
};

var max = function (list) {
  list.sort((a, b) => b - a);
  return list[0];
};

const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

  Examples (input -> output)
  6, "I"     -> "IIIIII"
  5, "Hello" -> "HelloHelloHelloHelloHello"
*/

// My code
const repeatStr = (n, s) => s.repeat(n);

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

  #Examples:

  Kata.getMiddle("test") should return "es"

  Kata.getMiddle("testing") should return "t"

  Kata.getMiddle("middle") should return "dd"

  Kata.getMiddle("A") should return "A"
*/

// My code
function getMiddle(s) {
  let middle = s.length / 2;
  if (middle % 1 === 0) {
    return s[middle - 1] + s[middle];
  } else {
    return s[middle - 0.5];
  }
}

// Alternative
function getMiddle(s) {
  var middle = s.length / 2;
  return s.length % 2
    ? s.charAt(Math.floor(middle))
    : s.slice(middle - 1, middle + 1);
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

  For example (Input --> Output):

  39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
  999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
  4 --> 0 (because 4 is already a one-digit number)
*/

// My code
function persistence(num) {
  let persistentNumber = 0;
  let split = num.toString().split("");

  while (split.length !== 1) {
    persistentNumber++;
    split = split.reduce((a, b) => a * b);
    split = split.toString().split("");
  }
  return persistentNumber;
}

// Alternative
function persistence(num) {
  var times = 0;

  num = num.toString();

  while (num.length > 1) {
    times++;
    num = num
      .split("")
      .map(Number)
      .reduce((a, b) => a * b)
      .toString();
  }

  return times;
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  Count the number of Duplicates
  Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

  Example
  "abcde" -> 0 # no characters repeats more than once
  "aabbcde" -> 2 # 'a' and 'b'
  "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
  "indivisibility" -> 1 # 'i' occurs six times
  "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
  "aA11" -> 2 # 'a' and '1'
  "ABBA" -> 2 # 'A' and 'B' each occur twice
*/

// My code
function duplicateCount(text) {
  let duplicates = 0;
  if (text.length === 0) return 0;
  else {
    let obj = {};
    for (let letter of text.toLowerCase()) {
      if (obj[letter]) {
        obj[letter] += 1;
      } else {
        obj[letter] = 1;
      }
    }
    for (let occurence in obj) {
      if (obj[occurence] > 1) {
        duplicates += 1;
      }
    }
    return duplicates;
  }
}

// Alternative
function duplicateCount(text) {
  return (
    text
      .toLowerCase()
      .split("")
      .sort()
      .join("")
      .match(/([^])\1+/g) || []
  ).length;
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  Nathan loves cycling.

  Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

  You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

  For example:

  time = 3 ----> litres = 1

  time = 6.7---> litres = 3

  time = 11.8--> litres = 5
*/

// My code
function litres(time) {
  return Math.floor(time * 0.5);
}
// Math.ceil(7.004) = 8

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  There is an array with some numbers. All numbers are equal except for one. Try to find it!

  findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
  findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
  It’s guaranteed that array contains at least 3 numbers.

  The tests contain some very huge arrays, so think about performance.
*/

// My code
function findUniq(arr) {
  let obj = {};
  for (let list of arr) {
    if (obj[list]) {
      obj[list]++;
    } else {
      obj[list] = 1;
    }
  }
  let single;
  for (let count in obj) {
    if (obj[count] === 1) {
      single = count;
    }
  }
  return single % 1 === 0 ? parseInt(single) : parseFloat(single);
}

// Alternative
function findUniq(arr) {
  arr.sort((a, b) => a - b);
  return arr[0] == arr[1] ? arr.pop() : arr[0];
}

function findUniq(arr) {
  return arr.find((n) => arr.indexOf(n) === arr.lastIndexOf(n));
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

  Examples
  Input: [1, 5.2, 4, 0, -1]
  Output: 9.2

  Input: []
  Output: 0

  Input: [-2.398]
  Output: -2.398

  Assumptions
  You can assume that you are only given numbers.
  You cannot assume the size of the array.
  You can assume that you do get an array and if the array is empty, return 0.
*/

// My code
function sum(numbers) {
  if (numbers.length === 0) return 0;
  else return numbers.reduce((a, b) => a + b);
}

// Alternative
function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  Your task is to create a function that does four basic mathematical operations.

  The function should take three arguments - operation(string/char), value1(number), value2(number).
  The function should return result of numbers after applying the chosen operation.

  Examples(Operator, value1, value2) --> output
  ('+', 4, 7) --> 11
  ('-', 15, 18) --> -3
  ('*', 5, 5) --> 25
  ('/', 49, 7) --> 7
*/

// My code
function basicOp(operation, value1, value2) {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
    default:
      return null;
  }
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

  Example
  createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
  The returned format must be correct in order to complete this challenge.

  Don't forget the space after the closing parentheses!
*/

// My code
function createPhoneNumber(numbers) {
  let indexArray = [];
  let firstPart = [];
  let secondPart = [];

  for (const [index, value] of numbers.entries()) {
    console.log(index, value);
    if (index < 3) {
      indexArray.push(value);
    } else if (index > 2 && index <= 5) {
      firstPart.push(value);
    } else secondPart.push(value);
  }

  let phoneNumber =
    "(" +
    indexArray.join("") +
    ")" +
    " " +
    firstPart.join("") +
    "-" +
    secondPart.join("");
  return phoneNumber;
}

// Alternative
function createPhoneNumber(numbers) {
  var format = "(xxx) xxx-xxxx";

  for (var i = 0; i < numbers.length; i++) {
    format = format.replace("x", numbers[i]);
  }

  return format;
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  Write Number in Expanded Form
  You will be given a number and you will need to return it as a string in Expanded Form. For example:

  expandedForm(12); // Should return '10 + 2'
  expandedForm(42); // Should return '40 + 2'
  expandedForm(70304); // Should return '70000 + 300 + 4'
  NOTE: All numbers will be whole numbers greater than 0.
*/

// My code
function expandedForm(num) {
  num = num.toString().split("");
  let newArray = [];
  while (num.length > 0) {
    if (num[0] === "0") {
      num.shift();
    } else {
      newArray.push(num[0] + "0".repeat(num.length - 1));
      num.shift();
    }
  }
  return newArray.join(" + ");
}

// Alternative
function expandedForm(num) {
  return String(num)
    .split("")
    .map((num, index, arr) => num + "0".repeat(arr.length - index - 1))
    .filter((num) => Number(num) != 0)
    .join(" + ");
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  Calculate the number of argument
  Example : args_count(1, 2, 3) -> 3
  args_count(1, 2, 3, 10) -> 4
*/

// My code
const args_count = (...args) => {
  let sum = 0;
  for (let i = 0; i <= args.length; i++) sum = i;
  return sum;
};

// Alternative
function args_count() {
  return arguments.length;
}

const args_count = (...args) => args.length;

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  For a given string s find the character c (or C) with longest consecutive repetition and return:

  [c, l]
  where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

  For empty string return:

  ["", 0]
  In JavaScript: If you use Array.sort in your solution, you might experience issues with the random tests as Array.sort is not stable in the Node.js version used by CodeWars. This is not a kata issue.

  Happy coding! :)
*/

// My code
function longestRepetition(s) {
  let obj = {};
  let letter = "";
  let repetation = 0;

  for (let letter of s) {
    if (obj[letter]) {
      obj[letter] += 1;
    } else {
      obj[letter] = 1;
    }
  }
  for (let result in obj) {
    if (repetation < obj[result]) {
      console.log(result, obj[result]);
      repetation = obj[result];
      letter = result;
    }
  }
  return [letter, repetation];
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

  Examples:

  spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
  spinWords( "This is a test") => returns "This is a test" 
  spinWords( "This is another test" )=> returns "This is rehtona test"
*/

// My code
function spinWords(string) {
  return string
    .split(" ")
    .map((word) =>
      word.length >= 5 ? word.split("").reverse().join("") : word
    )
    .join(" ");
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  Well met with Fibonacci bigger brother, AKA Tribonacci.

  As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. 

  So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

  [1, 1 ,1, 3, 5, 9, 17, 31, ...]
  But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

  [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
  Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

  Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)
*/

// My code
function tribonacci(signature, n) {
  var l = signature.splice(0, n);

  for (var i = 3; i < n; i++) l.push(l[i - 3] + l[i - 2] + l[i - 1]);

  return l;
}

// Alternative
function tribonacci(signature, n) {
  for (var i = 0; i < n - 3; i++) {
    // iterate n times
    signature.push(signature[i] + signature[i + 1] + signature[i + 2]); // add last 3 array items and push to trib
  }
  return signature.slice(0, n); //return trib - length of n
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

  Examples:

  * 'abc' =>  ['ab', 'c_']
  * 'abcdef' => ['ab', 'cd', 'ef']
*/

// My code
function solution(str) {
  str = str.split("");
  let array = [];
  while (str.length > 0) {
    let odd = str[1] ? str[1] : "_";
    let pair = str[0] + odd;
    array.push(pair);
    str.splice(0, 2);
  }
  return array;
}

// Alternative
function solution(s) {
  return (s + "_").match(/.{2}/g) || [];
}

function solution(str) {
  var i = 0;
  var result = new Array();
  if (str.length % 2 !== 0) {
    str = str + "_";
  }
  while (i < str.length) {
    result.push(str[i] + str[i + 1]);
    i += 2;
  }
  return result;
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  Task:
  Given a list of integers, determine whether the sum of its elements is odd or even.

  Give your answer as a string matching "odd" or "even".

  If the input array is empty consider it as: [0] (array with a zero).

  Examples:
  Input: [0]
  Output: "even"

  Input: [0, 1, 4]
  Output: "odd"

  Input: [0, -1, -5]
  Output: "even"
*/

// My code
function oddOrEven(array) {
  return array.reduce((a, b) => a + b, 0) % 2 === 0 ? "even" : "odd";
}

// Alternative
function oddOrEven(arr) {
  return arr.reduce((a, b) => a + b, 0) % 2 ? "odd" : "even";
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  Clock shows h hours, m minutes and s seconds after midnight.

  Your task is to write a function which returns the time since midnight in milliseconds.

  Example:
  h = 0
  m = 1
  s = 1

  result = 61000
*/

// My code
function past(h, m, s) {
  return 1000 * (h * 60 * 60 + m * 60 + s);
}

// Alternative
function past(h, m, s) {
  return (h * 3600 + m * 60 + s) * 1000;
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  Task
  You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

  Examples
  [7, 1]  =>  [1, 7]
  [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
  [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
*/

// My code
function sortArray(array) {
  const odds = array.filter((x) => x % 2).sort((a, b) => a - b);
  return array.map((x) => (x % 2 ? odds.shift() : x));
}

// Alternative
function sortArray(array) {
  var odds = [];
  //loop, if it's odd, push to odds array
  for (var i = 0; i < array.length; ++i) {
    if (array[i] % 2 !== 0) {
      odds.push(array[i]);
    }
  }
  //sort odds from smallest to largest
  odds.sort(function (a, b) {
    return a - b;
  });

  //loop through array, replace any odd values with sorted odd values
  for (var j = 0; j < array.length; ++j) {
    if (array[j] % 2 !== 0) {
      array[j] = odds.shift();
    }
  }

  return array;
}

function sortArray(array) {
  var odd = array.filter((elem) => elem % 2 !== 0).sort((a, b) => a - b);
  return array.map((elem) => (elem % 2 === 0 ? elem : odd.shift()));
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

  Examples:
  strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

  Concatenate the consecutive strings of strarr by 2, we get:

  treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
  folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
  trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
  blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
  abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

  Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
  The first that came is "folingtrashy" so 
  longest_consec(strarr, 2) should return "folingtrashy".

  In the same way:
  longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
  n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).

  Note
  consecutive strings : follow one after another without an interruption
*/

// My code
function longestConsec(strarr, k) {
  if (strarr.length == 0 || k > strarr.length || k <= 0) return "";

  let longStr = "";
  let newStr = "";

  for (let i = 0; i < strarr.length; i++) {
    newStr = strarr.slice(i, i + k);
    if (newStr.join("").length > longStr.length) {
      longStr = newStr.join("");
    }
  }

  return longStr;
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

/**
  問題1
  下のコードで関数isSameArray1を呼び出している箇所が4箇所あります。
  それぞれコメントで書いている値を返却する関数isSameArray1を完成させなさい。
  ※ 修正できるのは関数isSameArray1の中だけです。
  ※ 引数に入ってくる値は必ず[integer]です。
  ※ Array.toString(), JSON.stringify()は使わないものとします。
*/
function isSameArray1(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  let numberOfSameElement = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      numberOfSameElement++;
    }
  }
  return (
    numberOfSameElement === arr1.length && numberOfSameElement === arr2.length
  );
}

// ここではtrueが返ってくる
const a = [1, 2, 3, 4];
const b = [1, 2, 3, 4];
document.getElementById("answer1").innerHTML = `${isSameArray1(a, b)}`;

// ここではfalseが返ってくる
const c = [1, 1, 2, 2];
const d = [1, 1, 2, 1];
document.getElementById("answer2").innerHTML = `${isSameArray1(c, d)}`;

// ここではfalseが返ってくる
const e = [1, 2, 3, 4];
const f = [1, 3, 2, 4];
document.getElementById("answer3").innerHTML = `${isSameArray1(e, f)}`;

// ここではfalseが返ってくる
const g = [1, 2, 3, 4, 5, 6];
const h = [1, 2, 3, 4, 5, 6, 7];
document.getElementById("answer4").innerHTML = `${isSameArray1(g, h)}`;

/**
  問題2
  下のコードで関数isSameArray2を呼び出している箇所が4箇所あります。
  それぞれコメントで書いている値を返却する関数isSameArray2を完成させなさい。
  ※ 修正できるのは関数isSameArray2の中だけです。
  ※ 引数に入ってくる値は必ず[integer|array]です。
  ※ 引数には任意の次元の配列が入ってくるものとする。
  ※ JSON.stringify()は使わないものとする。
*/
function isSameArray2(arr1, arr2) {
  let splitOne = arr1.toString().split("");
  let splitTwo = arr2.toString().split("");
}

// ここではtrueが返ってくる
const i = [1, 2, [3, 4, [5, [6]]]];
const j = [1, 2, [3, 4, [5, [6]]]];
document.getElementById("answer5").innerHTML = `${isSameArray2(i, j)}`;

// ここではfalseが返ってくる
const k = [
  [1, 2],
  [3, 4],
  [5, [6]],
];
const l = [
  [1, 2],
  [3, 5],
  [5, [6]],
];
document.getElementById("answer6").innerHTML = `${isSameArray2(k, l)}`;

// ここではfalseが返ってくる
const m = [1, 2, [3, 4, 5]];
const n = [1, 2, [4, 4, 5]];
document.getElementById("answer7").innerHTML = `${isSameArray2(m, n)}`;

// ここではfalseが返ってくる
const o = [1, 2, [3, 4, [5, 6]]];
const p = [1, 2, [3, 4, 5, [6]]];
document.getElementById("answer8").innerHTML = `${isSameArray2(o, p)}`;

// ここではfalseが返ってくる
const q = [1, 2, [3, 4, [5, [6]]]];
const r = [1, 2, [4, 3, [5, [6]]]];
document.getElementById("answer9").innerHTML = `${isSameArray2(q, r)}`;

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

  Examples input/output:

  XO("ooxx") => true
  XO("xooxx") => false
  XO("ooxXm") => true
  XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
  XO("zzoo") => false
*/

// My code
function XO(str) {
  let x = 0;
  let o = 0;
  for (let el of str.toLowerCase()) {
    if (el === "x") {
      x++;
    } else if (el === "o") {
      o++;
    }
  }
  return x === o;
}

// Alternative
const XO = (str) => {
  str = str.toLowerCase().split("");
  return (
    str.filter((x) => x === "x").length === str.filter((x) => x === "o").length
  );
};

function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}

function XO(str) {
  return (
    str.toLowerCase().split("x").length === str.toLowerCase().split("o").length
  );
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

  Examples
  "This is an example!" ==> "sihT si na !elpmaxe"
  "double  spaces"      ==> "elbuod  secaps"
*/

// My code
function reverseWords(str) {
  return str
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}

// Alternative
function reverseWords(str) {
  // Go for it
  //split words into seperate arrays
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

  Example
  filter_list([1,2,'a','b']) == [1,2]
  filter_list([1,'a','b',0,15]) == [1,0,15]
  filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/

// My code
function filter_list(l) {
  return l.filter((n) => typeof n !== "string");
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
*/

// My code
function removeExclamationMarks(s) {
  return s
    .split("")
    .filter((v) => v !== "!")
    .join("");
}

// Alternative
function removeExclamationMarks(s) {
  return s.replace(/!/gi, "");
}

function removeExclamationMarks(s) {
  return s.split("!").join("");
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  Given a string of words, you need to find the highest scoring word.

  Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

  You need to return the highest scoring word as a string.

  If two words score the same, return the word that appears earliest in the original string.

  All letters will be lowercase and all inputs will be valid.
*/

// My code
function high(x) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let words = x.split(" ");
  let best = "";
  let maxscore = 0;
  for (let word of words) {
    let score = 0;
    for (let letter of word) {
      score += alphabet.indexOf(letter) + 1;
    }
    if (maxscore < score) {
      best = word;
      maxscore = score;
    }
  }
  return best;
}

// Alternative
function high(s) {
  let as = s
    .split(" ")
    .map((s) => [...s].reduce((a, b) => a + b.charCodeAt(0) - 96, 0));
  return s.split(" ")[as.indexOf(Math.max(...as))];
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  Complete the solution so that the function will break up camel casing, using a space between words.

  Example
  "camelCasing"  =>  "camel Casing"
  "identifier"   =>  "identifier"
  ""             =>  ""
*/

// My code
function solution(string) {
  return string.replace(/([A-Z])/g, " $1");
}

// Alternative
function solution(string) {
  string = string.split("").map((el) => {
    if (el === el.toUpperCase()) {
      el = " " + el;
    }
    return el;
  });
  return string.join("");
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  The museum of incredible dull things
  The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

  However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

  Task
  Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

  Don't change the order of the elements that are left.

  Examples
  * Input: [1,2,3,4,5], output = [2,3,4,5]
  * Input: [5,3,2,1,4], output = [5,3,2,4]
  * Input: [2,2,1,2,1], output = [2,2,2,1]
*/

// My code
function removeSmallest(numbers) {
  const duplicate = numbers;
  let smallestValue = numbers.indexOf(Math.min(...numbers));
  duplicate.splice(smallestValue, 1);
  return duplicate;
}

// Alternative
const removeSmallest = (numbers) =>
  numbers.filter((n, i) => i !== numbers.indexOf(Math.min(...numbers)));

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

  What if the string is empty? Then the result should be empty object literal, {}.
*/

// My code
function count(string) {
  if (string.length === 0) return {};
  else {
    let obj = {};
    for (let letter of string) {
      if (obj[letter]) {
        obj[letter]++;
      } else {
        obj[letter] = 1;
      }
    }
    return obj;
  }
}

// Alternative
function count(string) {
  var count = {};
  string.split("").forEach((s) => {
    count[s] ? count[s]++ : (count[s] = 1);
  });
  return count;
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  Your job is to write a function which increments a string, to create a new string.

  If the string already ends with a number, the number should be incremented by 1.
  If the string does not end with a number. the number 1 should be appended to the new string.
  Examples:

  foo -> foo1

  foobar23 -> foobar24

  foo0042 -> foo0043

  foo9 -> foo10

  foo099 -> foo100
*/

// My code
function incrementString(strng) {
  const duplicate = strng.slice(0, -1);
  const lastEl = strng.slice(-1).match(/[0-9]/);
  return lastEl === null
    ? strng + "1"
    : lastEl != 9
    ? duplicate + (+lastEl + 1)
    : incrementString(duplicate) + "0";
}

// Alternative
let incrementString = (str) =>
  str.replace(/([0-8]|\d?9+)?$/, (e) => (e ? +e + 1 : 1));

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

  For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

  The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

  Based on: http://oj.leetcode.com/problems/two-sum/

  twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
*/

// My code
function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i, j];
      }
    }
  }
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

  Write a function which takes a list of strings and returns each line prepended by the correct number.

  The numbering starts at 1. The format is n: string. Notice the colon and space in between.

  Examples: (Input --> Output)

  [] --> []
  ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
*/

// My code
var number = function (array) {
  return array.map((el, k) => {
    return k + 1 + ": " + el;
  });
};

// Alternative
let number = (a) => a.map((v, i) => `${i + 1}: ${v}`);

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  Write a simple parser that will parse and run Deadfish.

  Deadfish has 4 commands, each 1 character long:

  i increments the value (initially 0)
  d decrements the value
  s squares the value
  o outputs the value into the return array
  Invalid characters should be ignored.

  parse("iiisdoso") => [ 8, 64 ]
*/

// My code
// Return the output array, and ignore all non-op characters
const parse = (data) => {
  let result = [];
  let firstEl = 0;
  for (let l of data) {
    if (l === "i") {
      firstEl++;
    } else if (l === "d") {
      firstEl--;
    } else if (l === "s") {
      firstEl = firstEl * firstEl;
    } else if (l === "o") {
      result.push(firstEl);
    }
  }
  return result;
};

// Alternatives
function parse(data) {
  var v = 0,
    ret = [];
  for (var c of data) {
    switch (c) {
      case "i":
        v++;
        break;
      case "d":
        v--;
        break;
      case "s":
        v = v * v;
        break;
      case "o":
        ret.push(v);
        break;
    }
  }
  return ret;
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

  For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

  The input will be a lowercase string with no spaces.
*/

// My code
function capitalize(s) {
  let evenArray = [];
  let oddArray = [];
  for (let [key, value] of Object.entries(s)) {
    if (key % 2 === 0) {
      evenArray.push(value.toUpperCase());
      oddArray.push(value);
    } else {
      evenArray.push(value);
      oddArray.push(value.toUpperCase());
    }
  }
  return [evenArray.join(""), oddArray.join("")];
}

// Alternative
function capitalize(s) {
  const odd = s
    .split("")
    .map((l, i) => (i % 2 !== 0 ? l.toUpperCase() : l))
    .join("");
  const even = s
    .split("")
    .map((l, i) => (i % 2 === 0 ? l.toUpperCase() : l))
    .join("");
  return [even, odd];
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  Don't give me five!
  In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

  Examples:

  1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
  4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
  The result may contain fives. ;-)
  The start number will always be smaller than the end number. Both numbers can be also negative!
*/

// My code
const dontGiveMeFive = (start, end) => {
  let result = 0;
  for (let i = start; i <= end; i++) {
    // Check if it doesn't contain a 5 after converting to a string
    if (!i.toString().includes("5")) {
      result++;
    }
  }
  return result;
};

// Alternative
function dontGiveMeFive(start, end) {
  let count = 0;
  for (let i = start; i <= end; i++) {
    if (!/5/.test(i)) {
      count++;
    }
  }
  return count;
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  Don't give me five!
  In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

  Examples:

  1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
  4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
  The result may contain fives. ;-)
  The start number will always be smaller than the end number. Both numbers can be also negative!
*/

// My code
function toWeirdCase(string) {
  return string
    .split(" ")
    .map((word) =>
      word
        .split("")
        .map((letter, key_1) =>
          key_1 % 2 === 0 ? letter.toUpperCase() : letter
        )
        .join("")
    )
    .join(" ");
}

// Alternatives
function toWeirdCase(string) {
  return string
    .split(" ")
    .map(function (word) {
      return word
        .split("")
        .map(function (letter, index) {
          return index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase();
        })
        .join("");
    })
    .join(" ");
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  Your task, is to create NxN multiplication table, of size provided in parameter.

  for example, when given size is 3:

  1 2 3
  2 4 6
  3 6 9
  for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]
*/

// My code
multiplicationTable = function (size) {
  var result = [];

  for (var i = 0; i < size; i++) {
    result[i] = [];
    for (var j = 0; j < size; j++) {
      result[i][j] = (i + 1) * (j + 1);
    }
  }

  return result;
};

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  You have to sort the inner content of every word of a string in descending order.

  The inner content is the content of a word without first and the last char.

  Some examples:

  "sort the inner content in descending order"  -->  "srot the inner ctonnet in dsnnieedcg oredr"
  "wait for me"        -->  "wiat for me"
  "this kata is easy"  -->  "tihs ktaa is esay"
  Words are made up of lowercase letters.
*/

// My code
const sortTheInnerContent = (words) => {
  return words
    .split(" ")
    .map((word) => {
      let letters = word.split("");
      let a = letters.shift();
      let b = letters.pop() || "";
      let order = letters.sort().reverse().join("") || "";
      return word.length > 3 ? a + order + b : word;
    })
    .join(" ");
};

// Alternative
function sortTheInnerContent(words) {
  return words.replace(/\B\w+(?=\w)/g, function (match) {
    return match.split("").sort().reverse().join("");
  });
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

  Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

  []                                -->  "no one likes this"
  ["Peter"]                         -->  "Peter likes this"
  ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
  ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
  ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
  Note: For 4 or more names, the number in "and 2 others" simply increases.
*/

// My code
function likes(names) {
  if (names.length === 0) {
    return "no one likes this";
  } else if (names.length === 1) {
    return names[0] + " likes this";
  } else if (names.length <= 3) {
    let nameList = "";
    for (let name of names) {
      if (names.indexOf(name) === names.length - 1) {
        nameList += "and " + name;
      } else if (names.indexOf(name) === names.length - 2) {
        nameList += name + " ";
      } else {
        nameList += name + ", ";
      }
    }
    return nameList + " like this";
  } else {
    let count = 0;
    let nameList = "";
    for (let name of names) {
      if (names.indexOf(name) <= 1) {
        nameList += names.indexOf(name) === 0 ? name + ", " : name + " ";
      } else {
        count++;
      }
    }
    return nameList + "and " + count + " others like this";
  }
}

// Alternative
function likes(names) {
  names = names || [];
  switch (names.length) {
    case 0:
      return "no one likes this";
    case 1:
      return names[0] + " likes this";
    case 2:
      return names[0] + " and " + names[1] + " like this";
    case 3:
      return names[0] + ", " + names[1] + " and " + names[2] + " like this";
    default:
      return (
        names[0] +
        ", " +
        names[1] +
        " and " +
        (names.length - 2) +
        " others like this"
      );
  }
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  Count the number of divisors of a positive integer n.

  Random tests go up to n = 500000.

  Examples (input --> output)
  4 --> 3 (1, 2, 4)
  5 --> 2 (1, 5)
  12 --> 6 (1, 2, 3, 4, 6, 12)
  30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
  Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.
*/

// My code
function getDivisorsCnt(n) {
  let count = 0;
  for (let i = 0; i <= n; i++) {
    if (Number.isInteger(n / i)) {
      count++;
    }
  }
  return count;
}

// Alternative
function getDivisorsCnt(n) {
  var cnt = 1;
  for (var i = 0; i <= n / 2; ++i) {
    if (n % i == 0) ++cnt;
  }
  return cnt;
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  A stream of data is received and needs to be reversed.

  Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

  11111111  00000000  00001111  10101010
  (byte1)   (byte2)   (byte3)   (byte4)
  should become:

  10101010  00001111  00000000  11111111
  (byte4)   (byte3)   (byte2)   (byte1)
  The total number of bits will always be a multiple of 8.

  The data is given in an array as such:

  [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
*/

// My code
function dataReverse(data) {
  const chunk = [];
  for (let i = 0; i < data.length; i += 8) {
    chunk.unshift(...data.slice(i, i + 8));
  }
  return chunk;
}

// Alternantives
const dataReverse = (data) => {
  const result = [];
  while (data.length) {
    result.push(...data.splice(-8));
  }
  return result;
};

function dataReverse(data) {
  let a = [];
  while (data.length) a.unshift(...data.splice(data.length - 8, data.length));
  return a;
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

  Note: no empty arrays will be given.

  Examples
  [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
  [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
  [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
*/

// My code
function highestRank(arr) {
  let obj = {};
  for (let n of arr) {
    if (obj[n]) {
      obj[n]++;
    } else {
      obj[n] = 1;
    }
  }
  let highestNumber = 0;
  let count = 0;
  for (let n in obj) {
    console.log("property:", n, "value:", obj[n]);
    if (count < obj[n] || (count === obj[n] && highestNumber < parseInt(n))) {
      count = obj[n];
      highestNumber = parseInt(n);
    }
  }
  return highestNumber;
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  Introduction
  You need to write a function that will format a phone number by a template.

  Task
  You're given number and string.

  If there are more digits than needed, they should be ignored

  if there are less digits than needed, should return Invalid phone number

  Examples
  (79052479075, "+# ### ### ## ##") => "+7 905 247 90 75"
  (79052479075, "+# (###) ### ##-##") => "+7 (905) 247 90-75"
  (79052479075, "+# ### ### ## ##") => "+7 905 247 90 75"
  (81237068908090, "+## ### ### ## ##") => "+81 237 068 90 80"
  (8123706890, "+## ### ### ##-##") => "Invalid phone number"
  (911, "###") => "911"
  (112, "+ () -") => "+ () -"
*/

// My code
function formatNumber(number, template) {
  let arrayNumber = number.toString().split("");
  for (let n of arrayNumber) {
    template = template.replace("#", n);
  }
  return /[#]/g.test(template) ? "Invalid phone number" : template;
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/

// My code
function evenOrOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  This time no story, no theory. The examples below show you how to write function accum:

  Examples:
  accum("abcd") -> "A-Bb-Ccc-Dddd"
  accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
  accum("cwAt") -> "C-Ww-Aaa-Tttt"
  The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

// My code
function accum(s) {
  let newArray = [];
  for (let i = 0; i < s.length; i++) {
    if (i === 0) {
      newArray.push(s[i].toUpperCase() + "-");
    } else if (i === s.length - 1) {
      let data = s[i].toUpperCase() + s[i].repeat(i).toLowerCase();
      newArray.push(data);
    } else {
      let data = s[i].toUpperCase() + s[i].repeat(i).toLowerCase() + "-";
      newArray.push(data);
    }
  }
  return newArray.join("");
}

// Alternative
function accum(s) {
  return s
    .split("")
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join("-");
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
*/

// My code
function removeChar(str) {
  let word = str.split("");
  word.shift();
  word.pop();
  return word.join("");
}

// Alternative
function removeChar(str) {
  return str.slice(1, -1);
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  Remove the parentheses
  In this kata you are given a string for example:

  "example(unwanted thing)example"
  Your task is to remove everything inside the parentheses as well as the parentheses themselves.

  The example above would return:

  "exampleexample"
  Notes
  Other than parentheses only letters and spaces can occur in the string. Don't worry about other brackets like "[]" and "{}" as these will never appear.
  There can be multiple parentheses.
  The parentheses can be nested.
*/

// My code
function removeParentheses(s) {
  let result = "";
  let count = 0;
  for (let letter of s) {
    if (letter == "(") count += 1;
    if (count == 0) result += letter;
    if (letter == ")") count -= 1;
  }
  return result;
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  Let us consider this example (array written in general format):

  ls = [0, 1, 3, 6, 10]

  Its following parts:

  ls = [0, 1, 3, 6, 10]
  ls = [1, 3, 6, 10]
  ls = [3, 6, 10]
  ls = [6, 10]
  ls = [10]
  ls = []
  The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]

  The function parts_sums (or its variants in other languages) will take as parameter a list ls and return a list of the sums of its parts as defined above.

  Other Examples:
  ls = [1, 2, 3, 4, 5, 6] 
  parts_sums(ls) -> [21, 20, 18, 15, 11, 6, 0]

  ls = [744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]
  parts_sums(ls) -> [10037855, 9293730, 9292795, 9292388, 9291934, 9291504, 9291414, 9291270, 2581057, 2580168, 2579358, 0]
*/

// My code
function partsSums(ls) {
  if (ls.length === 0) return [0];
  let arr = [];
  while (ls.length > 0) {
    let count = 0;
    for (let i = 0; i < ls.length; i++) {
      count += ls[i];
    }
    arr.push(count);
    ls.shift();
  }
  arr.push(0);
  return arr;
}

// Alternative
function partsSums(ls) {
  ls.unshift(0);
  let sum = ls.reduce((p, c) => p + c, 0);
  return ls.map((v) => (sum = sum - v));
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

  At the end of the first year there will be: 
  1000 + 1000 * 0.02 + 50 => 1070 inhabitants

  At the end of the 2nd year there will be: 
  1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

  At the end of the 3rd year there will be:
  1141 + 1141 * 0.02 + 50 => 1213

  It will need 3 entire years.
  More generally given parameters:

  p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)

  the function nb_year should return n number of entire years needed to get a population greater or equal to p.

  aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

  Examples:
  nb_year(1500, 5, 100, 5000) -> 15
  nb_year(1500000, 2.5, 10000, 2000000) -> 10
  Note:
  Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.
*/

// My code
function nbYear(p0, percent, aug, p) {
  let nbYears = 0;
  while (p0 < p) {
    p0 = Math.floor(p0 + (p0 * percent) / 100 + aug);
    nbYears++;
  }
  return nbYears;
}

// Alternative
function nbYear(p0, percent, aug, p) {
  for (let years = 0; p0 < p; years++) {
    p0 = Math.floor(p0 + (p0 * percent) / 100 + aug);
  }
  return years;
}

function nbYear(p0, percent, aug, p) {
  var count = 0;
  while (p0 < p) {
    p0 = Math.floor((1 + percent / 100) * p0 + aug);
    count++;
  }
  return count;
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  Is the string uppercase?
  Task
  Create a method to see whether the string is ALL CAPS.

  Examples (input -> output)
  "c" -> False
  "C" -> True
  "hello I AM DONALD" -> False
  "HELLO I AM DONALD" -> True
  "ACSKLDFJSgSKLDFJSKLDFJ" -> False
  "ACSKLDFJSGSKLDFJSKLDFJ" -> True
*/

// My code
String.prototype.isUpperCase = function () {
  let count = 0;
  for (let l of this.split("")) {
    if (l.match(/[a-z]/g)) {
      count++;
    }
  }
  return count !== 0 ? false : true;
};

// Alternative
String.prototype.isUpperCase = function () {
  return this == this.toUpperCase();
};

String.prototype.isUpperCase = function () {
  return !/[a-z]/.test(this);
};

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  Write a function which calculates the average of the numbers in a given list.

  Note: Empty arrays should return 0.
*/

// My code
function findAverage(array) {
  if (array.length === 0) return 0;
  else {
    return (
      array.reduce((a, b) => {
        return a + b;
      }) / array.length
    );
  }
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  Find the missing letter
  Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

  You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
  The array will always contain letters in only one case.

  Example:

  ['a','b','c','d','f'] -> 'e'
  ['O','Q','R','S'] -> 'P'
  (Use the English alphabet with 26 letters!)
*/

// My code
function findMissingLetter(array) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let lastLetter = "";
  let index = alphabet.indexOf(array[0].toLowerCase());
  for (let i = 0; i < array.length; i++) {
    if (alphabet[index + i] !== array[i].toLowerCase()) {
      lastLetter = alphabet[index + i];
      break;
    }
  }
  return /[a-z]/.test(array) ? lastLetter : lastLetter.toUpperCase();
}

function findMissingLetter(array) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let index = alphabet.indexOf(array[0].toLowerCase());
  for (let i = 0; i < array.length; i++) {
    if (alphabet[index + i] !== array[i].toLowerCase()) {
      return /[a-z]/.test(array)
        ? alphabet[index + i]
        : alphabet[index + i].toUpperCase();
    }
  }
}

function findMissingLetter(array) {
  let first = array[0].charCodeAt(0);
  for (let i = 1; i < array.length; i++) {
    if (first + i !== array[i].charCodeAt(0)) {
      return String.fromCharCode(first + i);
    }
  }
  throw new Error("Invalid input");
}

// Alternative
const findMissingLetter = (array) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const start = alphabet.indexOf(array[0]);
  return alphabet
    .slice(start, start + array.length)
    .find((el) => !array.includes(el));
};

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

  Rules for a smiling face:

  Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
  A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
  Every smiling face must have a smiling mouth that should be marked with either ) or D
  No additional characters are allowed except for those mentioned.

  Valid smiley face examples: :) :D ;-D :~)
  Invalid smiley faces: ;( :> :} :]

  Example
  countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
  countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
  countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
  Note
  In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.
*/

// My code
function countSmileys(arr) {
  if (arr.length === 0) return 0;

  return arr.filter((x) => {
    return x.match(/[:;][-~]?[D)]/g);
  }).length;
}

// Alternative
function countSmileys(arr) {
  return arr.filter((x) => /^[:;][-~]?[)D]$/.test(x)).length;
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  The marketing team is spending way too much time typing in hashtags.
  Let's help them with our own Hashtag Generator!

  Here's the deal:

  It must start with a hashtag (#).
  All words must have their first letter capitalized.
  If the final result is longer than 140 chars it must return false.
  If the input or the result is an empty string it must return false.
  Examples
  " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
  "    Hello     World   "                  =>  "#HelloWorld"
  ""                                        =>  false
*/

// My code
function generateHashtag(str) {
  if (str.length === 0) return false;

  let newStr = "#";
  for (let word of str.split(" ")) {
    if (word && word !== " ") {
      newStr += word[0].toUpperCase() + word.slice(1);
    }
  }
  return newStr.length > 1 && newStr.length <= 140 ? newStr : false;
}

// Alternative
function generateHashtag(str) {
  if (!str || str.length < 1) return false;

  var r =
    "#" +
    str
      .split(" ")
      .map(function (el) {
        return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase();
      })
      .join("");
  return r.length > 140 ? false : r;
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  Given an array of integers, find the one that appears an odd number of times.

  There will always be only one integer that appears an odd number of times.

  Examples
  [7] should return 7, because it occurs 1 time (which is odd).
  [0] should return 0, because it occurs 1 time (which is odd).
  [1,1,2] should return 2, because it occurs 1 time (which is odd).
  [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
  [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/

// My code
function findOdd(A) {
  let obj = {};

  for (let number of A) {
    if (obj[number]) {
      obj[number]++;
    } else {
      obj[number] = 1;
    }
  }
  for (let n in obj) {
    if (obj[n] % 2 !== 0) {
      return parseInt(n);
    }
  }
}

// Alternative
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

function findOdd(A) {
  var obj = {};
  A.forEach(function (el) {
    obj[el] ? obj[el]++ : (obj[el] = 1);
  });

  for (prop in obj) {
    if (obj[prop] % 2 !== 0) return Number(prop);
  }
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

  Examples:
  a = "xyaabbbccccdefww"
  b = "xxxxyyyyabklmopq"
  longest(a, b) -> "abcdefklmopqwxy"

  a = "abcdefghijklmnopqrstuvwxyz"
  longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

// My code
function longest(s1, s2) {
  s1 = s1 + s2;
  let newArray = [];
  s1.split("")
    .sort()
    .map((l) => (!newArray.includes(l) ? newArray.push(l) : ""));
  return newArray.join("");
}

// Alternative
const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join("");

function longest(s1, s2) {
  return Array.from(new Set(s1 + s2))
    .sort()
    .join("");
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

  Example: (Input1, Input2 -->Output)

  "4",  "5" --> "9"
  "34", "5" --> "39"
  "", "" --> "0"
  "2", "" --> "2"
  "-5", "3" --> "-2"
  Notes:

  If either input is an empty string, consider it as zero.

  Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)
*/

// My code
function sumStr(a, b) {
  let sum = Number(a) + Number(b);
  return sum.toString();
}

// Alternatives
function sumStr(a, b) {
  return String(Number(a) + Number(b));
}

function sumStr(a, b) {
  return +a + +b + "";
}
// Coding +'' after an integer turns it into a string. This integer is the sum of two integers; each of which got converted from their string by the use of the + in front of them.

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  There was a test in your class and you passed it. Congratulations!
  But you're an ambitious person. You want to know if you're better than the average student in your class.

  You receive an array with your peers' test scores. Now calculate the average and compare your score!

  Return True if you're better, else False!

  Note:
  Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!
*/

// My code
function betterThanAverage(classPoints, yourPoints) {
  classPoints.push(yourPoints);
  return (
    classPoints.reduce((a, b) => a + b, 0) / classPoints.length < yourPoints
  );
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

  Examples (Input -> Output):
  * "String"      -> "SSttrriinngg"
  * "Hello World" -> "HHeelllloo  WWoorrlldd"
  * "1234!_ "     -> "11223344!!__  "
*/

// My code
function doubleChar(str) {
  return str
    .split("")
    .map((l) => {
      return l.repeat(2);
    })
    .join("");
}

// Alternative
const doubleChar = (str) => {
  str
    .split("")
    .map((c) => c + c)
    .join("");
};

function doubleChar(str) {
  return str.replace(/(.)/g, "$1$1");
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  You get an array of numbers, return the sum of all of the positives ones.

  Example [1,-4,7,12] => 1 + 7 + 12 = 20

  Note: if there is nothing to sum, the sum is default to 0.
*/

// My code
function positiveSum(arr) {
  let sum = 0;
  for (let n of arr) {
    if (n > 0) sum = sum + n;
  }
  return sum;
}

// Alternative
function positiveSum(arr) {
  return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}

function positiveSum(arr) {
  return arr.filter((x) => x >= 0).reduce((a, c) => a + c, 0);
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

  Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

  Example:

  Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
  Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
*/

// My code
String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map((el) => {
      return el[0].toUpperCase() + el.slice(1);
    })
    .join(" ");
};

// Alternative
String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
};

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

  moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

// My code
function moveZeros(arr) {
  let numZeros = 0;
  let arr2 = [];

  for (let n of arr) {
    if (n === 0) {
      numZeros++;
    } else {
      arr2.push(n);
    }
  }

  while (numZeros !== 0) {
    arr2.push(0);
    numZeros--;
  }
  return arr2;
}

// Alternative
var moveZeros = function (arr) {
  return arr
    .filter(function (x) {
      return x !== 0;
    })
    .concat(
      arr.filter(function (x) {
        return x === 0;
      })
    );
};

var moveZeros = function (arr) {
  var filtedList = arr.filter(function (num) {
    return num !== 0;
  });
  var zeroList = arr.filter(function (num) {
    return num === 0;
  });
  return filtedList.concat(zeroList);
};

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  Write function bmi that calculates body mass index (bmi = weight / height2).

  if bmi <= 18.5 return "Underweight"

  if bmi <= 25.0 return "Normal"

  if bmi <= 30.0 return "Overweight"

  if bmi > 30 return "Obese"
*/

// My code
function bmi(weight, height) {
  const bmi = weight / (height * height);
  if (bmi <= 18.5) {
    return "Underweight";
  } else if (bmi <= 25) {
    return "Normal";
  } else if (bmi <= 30) {
    return "Overweight";
  } else if (bmi > 30) {
    return "Obese";
  }
}

// Alternative
function bmi(weight, height) {
  var bmi = weight / (height * height);

  return bmi < 18.5
    ? "Underweight"
    : bmi <= 25
    ? "Normal"
    : bmi <= 30
    ? "Overweight"
    : "Obese";
}

function bmi(weight, height) {
  let formula = weight / Math.pow(height, 2);
  switch (formula !== 0) {
    case formula <= 18.5:
      return "Underweight";
    case formula <= 25.0:
      return "Normal";
    case formula <= 30:
      return "Overweight";
    default:
      return "Obese";
  }
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  Given an unsorted array of integers, find the smallest number in the array, the largest number in the array, and the smallest number between the two array bounds that is not in the array.

  For instance, given the array [-1, 4, 5, -23, 24], the smallest number is -23, the largest number is 24, and the smallest number between the array bounds is -22. You may assume the input is well-formed.

  You solution should return an array [smallest, minimumAbsent, largest]

  The smallest integer should be the integer from the array with the lowest value.

  The largest integer should be the integer from the array with the highest value.

  The minimumAbsent is the smallest number between the largest and the smallest number that is not in the array.

  minMinMax([-1, 4, 5, -23, 24]); //[-23, -22, 24]
  minMinMax([1, 3, -3, -2, 8, -1]); //[-3, 0, 8]
  minMinMax([2, -4, 8, -5, 9, 7]); //[-5, -3,9]
*/

// My code
function minMinMax(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  for (let i = min; i < max; i++) {
    if (!arr.includes(i)) {
      return [min, i, max];
    }
  }
}

// Alternative
minMinMax = (array) => {
  let b = Math.min(...array);
  while (array.includes(b)) {
    b += 1;
  }
  return [Math.min(...array), b, Math.max(...array)];
};

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  Create a function with two arguments that will return an array of the first n multiples of x.

  Assume both the given number and the number of times to count will be positive numbers greater than 0.

  Return the results as an array or list ( depending on language ).

  Examples
  countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
  countBy(2,5) === [2,4,6,8,10]
*/

// My code
function countBy(x, n) {
  let z = [];
  for (let i = x; z.length < n; i = i + x) {
    z.push(i);
  }
  return z;
}

// Altenative
function countBy(x, n) {
  let z = [];
  for (i = 1; i <= n; i++) {
    z.push(x * i);
  }
  return z;
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  A child is playing with a ball on the nth floor of a tall building. The height of this floor above ground level, h, is known.

  He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

  His mother looks out of a window 1.5 meters from the ground.

  How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?

  Three conditions must be met for a valid experiment:
  Float parameter "h" in meters must be greater than 0
  Float parameter "bounce" must be greater than 0 and less than 1
  Float parameter "window" must be less than h.
  If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

  Note:
  The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

  Examples:
  - h = 3, bounce = 0.66, window = 1.5, result is 3

  - h = 3, bounce = 1, window = 1.5, result is -1 

  (Condition 2) not fulfilled).
*/

// My code
function bouncingBall(h, bounce, window) {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
    return -1;
  }

  let result = 0;
  for (let i = 0; h > window; i++) {
    result++;
    h = h * bounce;
    if (h > window) result++;
  }

  return result;
}

// Alternative
function bouncingBall(h, bounce, window) {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
    return -1;
  }

  let result = 0;
  while (h > window) {
    result++;
    h *= bounce;
    if (h > window) result += 1;
  }

  return result;
}

function bouncingBall(h, bounce, window) {
  let rebounds = -1;
  if (bounce > 0 && bounce < 1)
    while (h > window) (rebounds += 2), (h *= bounce);
  return rebounds;
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  Complete the function that counts the number of unique consonants in a string (made up of printable ascii characters).

  Consonants are letters used in English other than "a", "e", "i", "o", "u". We will count "y" as a consonant.

  Remember, your function needs to return the number of unique consonants - disregarding duplicates. For example, if the string passed into the function reads "add", the function should return 1 rather than 2, since "d" is a duplicate.

  Similarly, the function should also disregard duplicate consonants of differing cases. For example, "Dad" passed into the function should return 1 as "d" and "D" are duplicates.

  Examples
  "add" ==> 1
  "Dad" ==> 1
  "aeiou" ==> 0
  "sillystring" ==> 7
  "abcdefghijklmnopqrstuvwxyz" ==> 21
  "Count my unique consonants!!" ==> 7
*/

// My code
function countConsonants(str) {
  let vowel = ["a", "e", "i", "o", "u"];
  let arr = [];
  for (let l of str.split("")) {
    if (
      !vowel.includes(l.toLowerCase()) &&
      !arr.includes(l.toLowerCase()) &&
      l.match(/[a-zA-Z]/g)
    ) {
      arr.push(l.toLowerCase());
    }
  }
  return arr.length;
}

// Alternative
function countConsonants(str) {
  return new Set(str.toLowerCase().replace(/[^a-z]|[aeiou]/g, "")).size;
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

  The input to the function will be an array of three distinct numbers (Haskell: a tuple).

  For example:

  gimme([2, 3, 1]) => 0
  2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

  Another example (just to make sure it is clear):

  gimme([5, 10, 14]) => 1
  10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.
*/

// My code
function gimme(triplet) {
  let min = Math.min(...triplet);
  let max = Math.max(...triplet);
  let result;
  for (let n of triplet) {
    if (n !== min && n !== max) {
      result = n;
    }
  }
  return triplet.indexOf(result);
}

// Alternative
function gimme(a) {
  return a.indexOf(
    a.concat().sort(function (a, b) {
      return a - b;
    })[1]
  );
}

const gimme = function (arr) {
  return arr.indexOf([...arr].sort((x, y) => x > y)[1]);
};

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  Time to win the lottery!

  Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.

  Example ticket:

  [ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]
  To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.

  Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.

  All inputs will be in the correct format. Strings on tickets are not always the same length.
*/

// My code
function bingo(ticket, win) {
  let wins = 0;
  for (let n of ticket) {
    for (let i = 0; i < n[0].length; i++) {
      if (n[1] === n[0].charCodeAt(i)) {
        wins++;
      }
    }
  }
  return wins >= win ? "Winner!" : "Loser!";
}

// Alternative
function bingo(ticket, win) {
  if (
    ticket.filter((a) => a[0].split("").some((b) => b.charCodeAt(0) == a[1]))
      .length >= win
  ) {
    return "Winner!";
  }
  return "Loser!";
}

function bingo(ticket, win) {
  var count = 0;

  ticket.forEach((game) => {
    if (game[0].includes(String.fromCharCode(game[1]))) {
      count++;
    }
  });

  return count >= win ? "Winner!" : "Loser!";
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  You are given an odd-length array of integers, in which all of them are the same, except for one single number.

  Complete the method which accepts such an array, and returns that single different number.

  The input array will always be valid! (odd-length >= 3)

  Examples
  [1, 1, 2] ==> 2
  [17, 17, 3, 17, 17, 17, 17] ==> 3
*/

// My code
function stray(numbers) {
  let obj = {};
  for (let n of numbers) {
    if (obj[n]) {
      obj[n]++;
    } else {
      obj[n] = 1;
    }
  }

  let result;
  for (let n in obj) {
    if (obj[n] === 1) result = n;
  }
  return Number(result);
}

// Alternative
function stray(numbers) {
  let a = numbers.sort();

  if (a[0] != a[1]) {
    return a[0];
  }
  return a[a.length - 1];
}

function stray(numbers) {
  for (let i in numbers) {
    if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) {
      return numbers[i];
    }
  }
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

  a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

  The four operators are "add", "subtract", "divide", "multiply".

  A few examples:(Input1, Input2, Input3 --> Output)

  5, 2, "add"      --> 7
  5, 2, "subtract" --> 3
  5, 2, "multiply" --> 10
  5, 2, "divide"   --> 2.5
  Try to do it without using if statements!
*/

// My code
function arithmetic(a, b, operator) {
  switch (operator) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return a / b;
  }
}

// Alternative
function arithmetic(a, b, operator) {
  optable = { add: "+", subtract: "-", multiply: "*", divide: "/" };
  return eval(a + optable[operator] + b);
}

function arithmetic(a, b, operator) {
  //your code here!
  var mathFun = {
    add: function (a, b) {
      return a + b;
    },
    subtract: function (a, b) {
      return a - b;
    },
    multiply: function (a, b) {
      return a * b;
    },
    divide: function (a, b) {
      return a / b;
    },
  };

  return mathFun[operator](a, b);
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

  Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/

// My code
function isPangram(string) {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  for (let word of string) {
    if (alphabet.includes(word.toUpperCase())) {
      for (let i = 0; i < alphabet.length; i++) {
        if (word.toUpperCase() === alphabet[i]) {
          alphabet.splice(i, 1);
        }
      }
    }
  }
  return alphabet.length === 0 ? true : false;
}

// Alternative
function isPangram(string) {
  return "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .every((x) => string.toLowerCase().includes(x));
}

function isPangram(string) {
  return (string.match(/([a-z])(?!.*\1)/gi) || []).length === 26;
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  Task
  Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

  The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

  Mind the input validation.

  Example
  { 6, 2, 1, 8, 10 } => 16
  { 1, 1, 11, 2, 3 } => 6
  Input validation
  If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.
*/

// My code
function sumArray(array) {
  if (array === null || array === undefined || array.length <= 2) return 0;
  let sum = 0;
  let sort = array.sort((a, b) => a - b);
  for (let i = 0; i < sort.length; i++) {
    if (i > 0 && i < sort.length - 1) {
      sum += sort[i];
    }
  }
  return sum;
}

// Alternative
function sumArray(array) {
  if (array == null) {
    return 0;
  } else if (array.length < 2) {
    return 0;
  } else {
    array = array.sort(function (a, b) {
      return a - b;
    });
    var total = 0;
    for (var i = 1; i < array.length - 1; i++) {
      total += array[i];
    }
    return total;
  }
}

const sumArray = (a) => {
  a
    ? a
        .sort((x, y) => x - y)
        .slice(1, -1)
        .reduce((s, e) => s + e, 0)
    : 0;
};

function sumArray(array) {
  return Array.isArray(array) && array.length > 1
    ? array.reduce((s, n) => s + n, 0) - Math.min(...array) - Math.max(...array)
    : 0;
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  Task
  In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
  Rules
  1.  The input string will always be lower case but maybe empty.

  2.  If the character in the string is whitespace then pass over it as if it was an empty seat
  Example
  wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
*/

// My code
function wave(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] && str[i] !== " ") {
      let result =
        str.substring(0, i) + str[i].toUpperCase() + str.substring(i + 1);
      arr.push(result);
    }
  }
  return arr;
}

// Alternative
function wave(str) {
  let result = [];
  str.split("").forEach((char, index) => {
    if (/[a-z]/.test(char)) {
      result.push(
        str.slice(0, index) + char.toUpperCase() + str.slice(index + 1)
      );
    }
  });
  return result;
}

function wave(str) {
  let newArr = [];
  for (let i = 0; i < str.length; i++) {
    let copy = str.split("");
    if (copy[i] !== " ") {
      copy[i] = copy[i].toUpperCase();
      newArr.push(copy.join(""));
    }
  }
  return newArr;
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

  Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

  Arguments 
  First argument (required): the original string to be converted.
  Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.
  Example
  titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
  titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
  titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'
*/

// My code
const wordInString = (s, word) => new RegExp("\\b" + word + "\\b", "i").test(s);

function titleCase(title, minorWords) {
  if (title.length === 0) return "";
  return title
    .split(" ")
    .map((word, index) => {
      return index === 0
        ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        : !!minorWords && wordInString(minorWords, word)
        ? word.toLowerCase()
        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
}

// Alternative
String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
};

function titleCase(title, minorWords) {
  var titleAr = title.toLowerCase().split(" "),
    minorWordsAr = minorWords ? minorWords.toLowerCase().split(" ") : [];

  return titleAr
    .map(function (e, i) {
      return minorWordsAr.indexOf(e) === -1 || i === 0 ? e.capitalize() : e;
    })
    .join(" ");
}

const titleCase = (title, minorWords) => {
  if (!title) return title;

  let cap = (word) => word[0].toUpperCase() + word.slice(1);

  let minors = (minorWords || "").toLowerCase().split(" ");

  let result = title
    .toLowerCase()
    .replace(/\S+/g, (w) => (minors.indexOf(w) === -1 ? cap(w) : w));

  return cap(result);
};

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  Write a function that returns a string in which firstname is swapped with last name.

  Example(Input --> Output)

  "john McClane" --> "McClane john"
*/

// My code
function nameShuffler(str) {
  return str.split(" ").reverse().join(" ");
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  altERnaTIng cAsE <=> ALTerNAtiNG CaSe
  Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

  "hello world".toAlternatingCase() === "HELLO WORLD"
  "HELLO WORLD".toAlternatingCase() === "hello world"
  "hello WORLD".toAlternatingCase() === "HELLO world"
  "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
  "12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
  "1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
  "String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
  As usual, your function/method should be pure, i.e. it should not mutate the original string.
*/

// My code
String.prototype.toAlternatingCase = function () {
  let arr = [];
  for (let element of this.split("")) {
    if (/[a-z]/.test(element)) {
      arr.push(element.toUpperCase());
    } else if (/[A-Z]/.test(element)) {
      arr.push(element.toLowerCase());
    } else arr.push(element);
  }
  return arr.join("");
};

String.prototype.toAlternatingCase = function () {
  return this.split("")
    .map((a) => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()))
    .join("");
};

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
  21    23    25    27    29
  ...
  Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

  1 -->  1
  2 --> 3 + 5 = 8
*/

// My code
function rowSumOddNumbers(n) {
  const oddNumbersArray = [];
  let startNumber = n * n - (n - 1);

  while (n > 0) {
    console.log(oddNumbersArray, startNumber);
    oddNumbersArray.push(startNumber);
    startNumber += 2;
    n--;
  }

  const sum = oddNumbersArray.reduce((a, b) => a + b, 0);
  return sum;
}

// Alternative
function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
}

function rowSumOddNumbers(n) {
  return n * n * n;
}

function rowSumOddNumbers(n) {
  return n ** 3;
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  I have four positive integers, A, B, C and D, where A < B < C < D. The input is a list of the integers A, B, C, D, AxB, BxC, CxD, DxA in some order. Your task is to return the value of D.
*/

// My code
function alphabet(ns) {
  ns.sort((a, b) => a - b);
  let a = ns[0];
  let b = ns[1];
  let AxB = a * b;
  let c = ns[2] === AxB ? ns[3] : ns[2];

  let BxC = b * c;
  let CxD = ns[ns.length - 1];

  let d = CxD / c;

  return d;
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  Return a function that will trim a string (the first argument given) if it is longer than the maximum string length (the second argument given). The result should also end with "..."

  These dots at the end also add to the string length.

  So in the above example, trim("Creating kata is fun", 14) should return "Creating ka..."

  If the string is smaller than or equal to 3 characters then the length of the dots is not added to the string length.

  e.g. trim("He", 1) should return "H..."

  If the string is smaller or equal than the maximum string length, then simply return the string with no trimming or dots required.

  e.g. trim("Code Wars is pretty rad", 50) should return "Code Wars is pretty rad"
*/

// My code
function trim(str, size) {
  if (str.length < size || str.length === size) return str;

  let arr = [];
  str.split("").map((l, index) => {
    arr.length < size - 3 ? arr.push(l) : "";
  });
  if (size < 3) {
    let i = 0;
    while (arr.length < size) {
      arr.push(str[i]);
      i++;
    }
  }
  arr.push("...");
  return arr.join("");
}

// Alternative
function trim(arr, size) {
  return arr.length <= size
    ? arr
    : arr.slice(0, arr.length > 3 ? size - 3 : size) + "...";
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  Simple, remove the spaces from the string, then return the resultant string.
*/

// My code
function noSpace(x) {
  return x.replaceAll(" ", "");
}

// Alternative
function noSpace(x) {
  return x.replace(/\s/g, "");
}

function noSpace(x) {
  return x.split(" ").join("");
}

const noSpace = (x) => x.replace(/ /g, "");

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

  For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

  Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-35)

  Note: The function accepts an integer and returns an integer.

  Happy Coding!
*/

// My code
function squareDigits(num) {
  num = String(num)
    .split("")
    .map((n) => {
      return Math.pow(n, 2);
    })
    .join("");
  return Number(num);
}

// Alternative
function squareDigits(num) {
  return Number(
    ("" + num)
      .split("")
      .map(function (val) {
        return val * val;
      })
      .join("")
  );
}

function squareDigits(num) {
  return +num
    .toString()
    .split("")
    .map((i) => i * i)
    .join("");
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

  Example:
  divisors(12); // should return [2,3,4,6]
  divisors(25); // should return [5]
  divisors(13); // should return "13 is prime"
*/

// My code
function digitalRoot(n) {
  let result = 0;

  String(n)
    .split("")
    .map((num) => {
      result += Number(num);
    });

  return result < 10 ? result : digitalRoot(result);
}

// Alternative
function digitalRoot(n) {
  let result;

  result = String(n)
    .split("")
    .reduce((a, b) => {
      return Number(a) + Number(b);
    }, 0);

  return result < 10 ? result : digitalRoot(result);
}

function digital_root(n) {
  return ((n - 1) % 9) + 1;
}

function digital_root(n) {
  if (n < 10) return n;

  return digital_root(
    n
      .toString()
      .split("")
      .reduce(function (acc, d) {
        return acc + +d;
      }, 0)
  );
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  The snail crawls up the column. During the day it crawls up some distance. During the night she sleeps, so she slides down for some distance (less than crawls up during the day).

  Your function takes three arguments:

  The height of the column (meters)
  The distance that the snail crawls during the day (meters)
  The distance that the snail slides down during the night (meters)
  Calculate number of day when the snail will reach the top of the column.
*/

// My code
function snail(column, day, night) {
  let result = 1;
  let sum = day;
  for (let i = result; sum < column; result++) {
    sum += day - night;
  }
  return result;
}

// Alternative
function snail(column, day, night) {
  const days = (column - night) / (day - night);
  return days < 1 ? 1 : Math.ceil(days);
}

function snail(column, day, night) {
  let current = 0;
  let counts = 0;
  while (current <= column) {
    counts++;
    current += day;
    if (current >= column) break;
    current -= night;
  }
  return counts;
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

  Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

  Note: If the number is a multiple of both 3 and 5, only count it once.
*/

// My code
function solution(number) {
  let sum = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      sum += i;
    } else if (i % 3 === 0) {
      sum += i;
    } else if (i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

// Alternative
function solution(number) {
  var sum = 0;

  for (var i = 3; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  return sum;
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

/*
  DESCRIPTION:
  Instructions
  Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

  Example
  Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
*/

// My code
var capitals = function (word) {
  let arr = [];
  for (let l of word) {
    if (l.match(/[A-Z]/)) arr.push(word.indexOf(l));
  }
  return arr;
};

// Alternative
var capitals = function (word) {
  var caps = [];
  for (var i = 0; i < word.length; i++) {
    if (word[i].toUpperCase() == word[i]) caps.push(i);
  }
  return caps;
};

var capitals = function (word) {
  return word
    .split("")
    .map(function (l, i) {
      if (l.toUpperCase() === l) return i;
    })
    .filter(function (i) {
      return i != null;
    });
};

const capitals = (word) => {
  return word.match(/[A-Z]/g).map((x) => {
    return word.indexOf(x);
  });
};
