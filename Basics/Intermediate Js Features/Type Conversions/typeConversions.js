// String to Number

/*
the Number() function tries to convert the input string to a 
number. If it's not a valid number, isNaN(number) will be true,
 and the function will return 0. 
Otherwise, it returns the converted number.
*/



/*ParseInt and ParseFloat
Strings can be converted to numbers with both parseInt and parseFloat. These functions will not only convert numbers, they will chop off any extra non-numeric characters at the end:

const result = parseInt("12px"); 

console.log(result); // 12
This only works with non-numeric characters at the end of the string. If the string starts with non-numeric characters it will return NaN:

const result = parseInt("abc123");

console.log(result); // NaN
 NaN stands for "Not A Number", and you can learn more about it in the MDN Documentation. Quite perplexingly perhaps, typeof NaN will evaluate to "number". 

A difference between the parseInt and parseFloat functions appears when working with floating point numbers:

const float = 12.24;

console.log(parseInt(float)); // 12

console.log(parseFloat(float)); // 12.24
 As might be suspected, parseFloat properly parses floating point numbers.

typeof
The typeof operator is a convenient way of checking a value's type.

It's easiest to demonstrate with a few examples:

console.log( typeof 1 ); // number
console.log( typeof "1" ); // string
console.log( typeof {} ); // object

Task
Given a string, convert it to a number.
If the string is not a number, return 0.
*/

function toNumber(string) {
    const number = Number(string);
    if (isNaN(number)) {
        return 0;
    }
    return number;
}
module.exports = toNumber;

//To String
/*
Given two values a and b, combine them together
 as strings and return the result. The values may be a number,
 a boolean or a string.
*/

function combineToString(a, b) {
    return  a.toString() + b.toString();   
   }
   module.exports = combineToString;

//Is Truthy 
/*
Just like number and string conversion, we can
 convert to boolean explicitly:

console.log(Boolean(2)); // true
console.log(Boolean("")); // false

The logical NOT operator (!) can be used to a flip a true to false and vice-versa.

When confronted with non-boolean values, the operator will implicitly convert it to a boolean first and then flip it:

console.log(!3); // false
console.log(!""); // true
So another way to go from a non-boolean value to its corresponding boolean value is by using the operator twice !!:

console.log(!!3); // true
console.log(!!""); // false

Situations where values are implicitly converted to booleans include if conditionals:

if(3) {
    console.log('3 is truthy!');
}
This would hit the console.log because 3 is, in fact, truthy.

Task
Given some value a return whether or not the value is truthy.

*/ 
function isTruthy(a) {
    if(a){
        return true;
    }
    return false;  
   }   
   module.exports = isTruthy; 
 
   //Loose Equals
   //Return true if a and b are loosely equal to each other. If not, return false.
   function looseEquals(a, b) {
    //return a==b; is a complete answer or
   if(a == b){
        return true;
    }else{
        if( a =='b'){
        }
    }
    return false;     
}
module.exports = looseEquals;

//Object to JSON
/*
JavaScript Object Notation, or JSON, is a format for 
transferring JavaScript data.

const person = '{"name":"Jim"}';

The value stored in person is a string! It looks quite 
a bit like an object. And, in fact, it can be quite easily 
turned into an object!

The advantage of JSON is we can use it to send data across a 
network. 

We can get the same JSON as above by using JSON.stringify 
on an existing object:

const person = JSON.stringify({ name: "Jim" });

console.log(person); // {"name":"Jim"}

the function toJSON takes an object obj as a parameter
 and returns its JSON string representation. This is done
  using the JSON.stringify method. The module.exports = toJSON;
   line allows this function to be imported 
and used in other JavaScript files.

Task
Given an object, turn it into JSON and return the resulting string.
*/

function toJSON(obj) {
    return JSON.stringify(obj)    
}
module.exports = toJSON;

//Valid JSON
//do the reverse, turning JSON back into an object.

/*
Task
Create JSON that can be parsed to a person object with 3 
properties:

name: with any string value
age: with any number value
isReal: with any boolean value
*/
const personJSON = `
    {"name":"Aby",
    "age": 30,
    "isReal": true        
    } 
`;
module.exports = personJSON;