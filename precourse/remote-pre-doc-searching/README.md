# remote-pre-doc-searching

This resource is designed to help you get used to using online documentation to help yourself when you are stuck.

It is not true to say you are supposed to remember every possible function or syntax - much of being a programmer is about smart googling. This means when you are faced with a challenge you can't solve in the real world you are unlikely to find a stackoverflow that gives you the whole solution, so relying on this approach as you deal with smaller tasks will not help you later on.

This morning try using the more comprehensive and clearer documentation to navigate websites such as

- [MDN](https://developer.mozilla.org/en-US/)
- [Javascript.info](https://javascript.info/)
- [Devdocs.io](https://devdocs.io/)

With the following methods find out and write down the answers to these questions:

1. What data type(s) does the method (function) take as its arguments?
2. What data type does the method return as its value?
3. Does it have any _optional arguments_?
4. Does it overwrite existing data or does it create new data (does it mutate) ?
5. Summarise what the function does
6. Can you think of a situation where the method might prove useful?

## Strings

- endsWith
1. Strings
2. Booleans
3. Optional length argument
4. Gives you new data
5. This function determines whether strings end with a certain character(s)
6. You could use it to check if someone has entered a valid form ie an email => endsWith('@gmail.com') 
- toUpperCase
1. Strings
2. Strings
3. No
4. It overwrites existing data
5. This function takes a string and converts all the alphabetical characters into uppercase
6. Inputted data that needs to be validated if correct or not might be inputted by the user in different formats with a mixture of capitalisations, by changing the capitalisations to a single unified one it prevents errors and bugs during the evaluation
- substr
1. Strings
2. Strings
3. Optional length parameter
4. Returns new data
5. Returns a portion of the string, starting at the specified index and extending for a given number of characters afterwards
6. Useful for when you only need to evaluate or alter part of a given string
- substring
1. Strings
2. Strings
3. No - both startIndex and indexEnd have to be provided
4. Returns new data
5. Returns a part of the string between startIndex & endIndex. It excludes the endIndex character or up to the end of the string.
6. Useful for when you only need to evaluate or alter part of a string
- slice
1. Strings
2. Strings
3. Optional endIndex parameter
4. Returns new data
5. Extracts a section of a string and returns it as a new string, without modifying the original string
6. In combination with toUpperCase this can be used to just capitalise the first character of a string
- concat
1. Strings
2. Strings
3. No
4. Overwrites the data
5. Concatenates the string arguments to the calling string and returns a new string
6. If you have data avaliable of people's first and last names in separate forms you can use concat to return a full name
- split
1. Strings
2. Arrays
3. It has an optional separator and an optional limit
4. Overwrites the data
5. Divides a string into an ordered list of substrings which it then puts into an array
6. You could use it in conjunction with for loops and higher order functions to perform more detailed analysis of the characters

## Operators

- `+`
1. Numbers, booleans, strings
2. Either numbers or concatenated strings
3. No
4. Overwrites
5. Produces the sum of numeric operands or string concatenation
6. You could use it to find the total of a group of numbers
- `%`
1. Numbers
2. Numbers
3. No
4. Overwrites
5. Returns the remainder left over when one operand is divided by a second operand
6. You could use it to find out if numbers are even or odd or if they are divisible by a certain other number
- `++`
1. Numbers
2. Numbers
3. No
4. Overwrites
5. Increments its operand and returns a value
6. Use it to sum a count
- `+=`
1. Numbers, Booleans, Strings
2. Numbers, Booleans, Strings
3. No
4. Overwrites
5. Adds the value of the right operand to a variable and assigns the result to the variable.
6. Use it as another way to concatenate a string
- `!`
1. Numbers, Strings, Booleans,undefined, null
2. Booleans
3. No
4. Overwrites
5. Converts the operand to boolean type and returns the inverse value
6. Can be used in conjunction with an if statement to filter out values that aren't equal to a certain condition  


## Numbers

- toFixed
1. Numbers
2. Strings
3. Optional digits parameter - number of digits to appear after the decimal point
4. Overwrites
5. Returns a string representation of a number that has exact digits after the decimal point
6. Can use to format numbers to look like currency ie toFixed(2)
- parseFloat
1. Strings
2. Numbers
3. No
4. Overwrites
5. Parses an argument and returns a floating point number
6. You could use it to perform mathematical operations on inputted strings
- Math.ceil
1. Numbers
2. Numbers
3. No 
4. Overwrites
5. Rounds up a number to the next largest integer
6. You could use it to make sure you always got nice tidy integers as the ouput after mathematical operations have been performed


## Regular Expressions

- test
1. Strings
2. Boolean
3. No
4. Doesn't alter the data
5. Executes a serach for a match between a regular expression and a specified string
6. You could use it to make sure that strings conformed to a compulsory structure ie an absolute path having to start with /
- match
1. Strings
2. Arrays
3. No
4. Overwrites
5. Retrieves the result of matching a string against a regular expression
6. You can use it to filter out characters that you want
- replace
1. Strings
2. Strings
3. No
4. Overwrites
5. Returns a new string with some or all matches of a pattern replaced by a replacement
6. You could use it to improve the grammar of strings 

## Arrays

- isArray
1. Arrays
2. Booleans
3. No
4. Doesn't alter the data
5. Determines if the passed value is an array
6. You can use it to work out what permitted functions you can do with the datatype
- flat
1. Arrays
2. Arrays
3. Optional depth parameter
4. Overwrites
5. Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
6. You could use it to uncomplicate other array functions
- push
1. Arrays
2. Arrays
3. No
4. Overwrites
5. Method adds one or more elements to the end of the array and returns the new length of the array
6. You could use it to easily add more elements to an array
- shift
1. Arrays
2. Arrays
3. No
4. Overwrites
5. Method removes the element at the zeroeth index and shifts the values at consecutive indexes down
6.  
- slice
- splice
- join


## Objects

- keys
- hasOwnProperty


