//Throw an Error
function throwError() { 
   
    throw new Error("not in our database")   
    
}

module.exports = throwError;

//Catch an Error
function catchError(fn) {
    try {
        fn();
        return false;//if no error thrown
    }catch (error){        
        return error; // return the caught error: true = error
    }
    
}

module.exports = catchError;
/*
To catch an error thrown by the function fn in your 
JavaScript code, you need to use a try...catch block. 
The try block allows you to specify the code that should be 
tested for errors while it's being executed. If an error
 occurs, the control is passed to the catch block. Here's how
  you can modify your catchError function:
*/

//Return Error
function catchError(fn) {
    try {
        fn();
        return false;//if no error thrown
    }catch (error){        
        return error; // return the caught error: true = error
    }
    
}

module.exports = catchError;

//Start an Error
function startError() {
    if(error){
        return 1;
    }
    
}

module.exports = startError;

/*
Error Types
Let's explore several different types of JavaScript run-time errors.

Type Error
Commonly thrown when the variable is not the expected type for the operation. Here's a couple examples:

const x = 3;

x();
 Throws TypeError: x is not a function.

let b;

b.prop;
 Throws TypeError: Cannot read property 'prop' of undefined

Reference Error
Thrown in cases where the variable is not defined. More technically, the reference cannot be found:

z();
 Throws ReferenceError: z is not defined.

Syntax Error
Thrown in cases where the code is not valid JavaScript:

const a = 3;

a.72;
 Throws SyntaxError: Unexpected number.

 If you use a transpiler like Babel JS this code may not pass the compilation step due to invalid syntax.

Range Error
Thrown when a value is passed to a function where the value is not within the intended range of accepted values. For example, an array initializer:

new Array(Infinity)
 Throws RangeError: Invalid array length.
 */