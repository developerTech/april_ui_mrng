var > We can redeclare and reassign
let >   We cannot redeclare but can reassign
const > We cannot redeclare nor reassign

var a = 10
var a >>>>> declare
a = 10 >>>> assignment

> var a = 10
> a
10
> var a = 11
> a
11
> 
> a = 12
12
> 

> let b = 10
undefined
> b
10
> 
> let b = 11
Uncaught SyntaxError: Identifier 'b' has already been declared
> b = 11
11
> 

> const c = 10
undefined
> const c = 11
Uncaught SyntaxError: Identifier 'c' has already been declared
> c = 11
Uncaught TypeError: Assignment to constant variable.