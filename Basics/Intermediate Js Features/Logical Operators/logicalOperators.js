//Logical Operators

//Or ||

function willEat(hasPizza, hasDonuts, hasCookies) {
    if(hasPizza|| hasDonuts || hasCookies){
     return true ;  
    }
    else{
        return false;
    }
}

module.exports = willEat;

//Default Operator
//Same as ||

/*
Truthy Values
console.log(3 || false); // 3
console.log(false || "something" || false); // something

Falsey Values
 include false, 0, "", null, undefined, and NaN
console.log(0 || true); // true
console.log("" || true); // true


The double function here is almost complete!
 We also want double to be able to handle when x is undefined.
*/
function double(x) {
    return (x ||"") * 2;
}

module.exports = double;

//AND Operator
//&&

/*
both values must be true for the expression to evaluate to true.
 We need this to be true AND that to be true as well

let a = true;
let b = true;

console.log(a && b); // true

b = false;

console.log(a && b); // false
console.log(b && a); // false

We need a function that can determine if the diver can breathe. The function canBreathe will be passed three boolean values:

isConnected - Is true if the diver connected to the tank
hasOxygen - Is true if the tank has oxygen
aboveWater - Is true if the diver is still above water
*/

function canBreathe(isConnected, hasOxygen, aboveWater) {
    if(aboveWater){
        return true;
    }
     return isConnected && hasOxygen;
    }


module.exports = canBreathe;


//Guard Operator
/*
 && operator can be referred to as the Logical AND operator or the guard operator!

We can use the operator to guard against run-time exceptions (or errors) when dealing 
with falsey values. 

const user = { name: 'bob' }
console.log(user && user.name); // bob

const user2 = undefined;
console.log(user2 && user2.name); // undefined

Notice how in the first example we successfully retrieve the user's name, while
 the second example returns undefined.

In the second example, if we tried to retrieve this property directly,
 we would hit a run-time exception:

const user2 = undefined;
console.log(user2.name);

Trying to log user2.name right here would result in an uncaught error:
 Uncaught TypeError: 
Cannot read property 'name' of undefined.

The function friendName currently retrieves the name property from the friend.

The problem is, sometimes friend is undefined. When this is the case, let's return 
undefined without throwing an exception.
*/
function friendName(friend) {
    if(friend){
      return friend.name;
    }
    return undefined
     
 }
 
 module.exports = friendName;

 
//Not / Negation Operator
/*
This operator will flip true and false:

console.log(!true); // false
console.log(!false); // true
It will also flip truthy and falsey values:

console.log(!2); // false
console.log(!undefined); // true


There's a river that runs right between two towns.
 In order for cars to cross the river, we built a bridge!
 Trouble is, there's only room for 1 car to cross the bridge at a time. 
 This means that if both cars were to be crossing at the same time, neither
  would be able to cross.

Complete the carCrossing function to return true if and only if one car is crossing.

 The logical term for this situation is an "Exclusive OR". In other words,
  it is only true if exactly 1 of the terms are true.
*/

function carCrossing(aCrossing, bCrossing) {
    if(aCrossing && bCrossing){
        return false; 
    }
    else if( aCrossing || bCrossing){
        return true;
    }
    return !true;
}

module.exports = carCrossing;

/*
/*
function carCrossing(aCrossing, bCrossing) {
    return aCrossing !== bCrossing;
}

module.exports = carCrossing;

*/



