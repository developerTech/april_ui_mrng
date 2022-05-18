var  a = true
var b = false
true is equal to 1
false is equal to 0

true+true
2
true+false
1

10+true
11
2/false
Infinity
"a"+true
'atrue'
"a"-true
NaN
"true"+"true"
'truetrue'
"true"-"true"
NaN

var a = "10"
var b = "2"
a+b
'102'

//es5
var a = "10"
var b = "2"
a+b
'102'
parseInt(a)
10
parseInt(b)
2
parseInt(a)+parseInt(b)
12

parseInt(a+b)
102

var a = "Hi"
parseInt(a)

var a = "10.22"
var b = "5.13"
undefined
parseInt(a)+parseInt(b)
15
parseFloat(a)+parseFloat(b)
15.350000000000001

var a = "10"
var b = "2"
undefined
parseFloat(a)+parseFloat(b)
12

///es6
var a = "10"
var b = "2"
Number(a)+Number(b)
12
var a = "10.22"
var b = "5.13"
undefined
Number(a)+Number(b)
15.350000000000001


var a = "10a"
var b = "5b"
parseInt(a)+parseInt(b)
15
Number(a)+Number(b)
NaN

var a = "a10a"
var b = "5b"
undefined
parseInt(a)+parseInt(b)
NaN

var a = "10a3"
var b = "5b"
parseInt(a)+parseInt(b)
15