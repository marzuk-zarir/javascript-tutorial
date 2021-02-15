/**
 * ! Error objects are thrown when runtime errors occur. The Error object can also be used as a base object for user-defined exceptions.
 * ? There are 8 types of error:
 * * 1. eval error
 * * 2. reference error
 * * 3. range error
 * * 4. syntax error
 * * 5. type error
 * * 6. URI error
 * * 7. aggregate error
 * * 8. internal error
 */
// ? throw a basic Error(msg:optional)
// ? throw keyword used for print and occur a error
let customError = new Error('this is not valid')
throw customError