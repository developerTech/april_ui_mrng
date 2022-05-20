=  // assignment
== // compare the data
=== // compare the data and DataTypes

var a = "10"  /// assignment
var b = 10

a == b
true

a === b
false

var c = 20
a == c
false

var a = true
var b = "true"
a == b
false
a === b
false

var a = "john"
var b = "John"
a == b // JavaScript is case sensitive
false

var a = 1
var b = true
a == b
true
a === b
false
var a = 10
var b = 20
undefined
 a>b
false
a<b
true
a != b
true
a !== b
true
a >= b 
false
a => b 
a => b
a <=b 
true

////negation
var a = true
!a
false

var a = false
!a
true


var a = 1
!a
false

var a = 0
!a
true

var a = -1
!a
false

var a = "hi"
!a
false


truthy> any number except 0  weather +ve or -ve and any string and true
falsy>0, false, null, undefined


var a = 1
var b = "hi"

isNaN(a)  > is not a number
false
isNaN(b)
true

var c = true
isNaN(c)
false

var c = "true"
isNaN(c)
true

var a = false
isNaN(a)
false