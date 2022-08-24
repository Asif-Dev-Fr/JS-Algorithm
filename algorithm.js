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

// My function
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

// My function :
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

// My function :
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
