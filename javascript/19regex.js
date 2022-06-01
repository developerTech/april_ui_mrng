Regex
> Regular expressions
> ^$
// if pattern match it will return the array else you will get null

var a = "Hii"
a.match("^([a-z])$")
null

// one letter in small case
var a = "h"
a.match("^([a-z])$")
(2) ['h', 'h', index: 0, input: 'h', groups: undefined]

// two letter in small case
var a = "hi"
a.match("^([a-z]{2})$")
(2) ['hi', 'hi', index: 0, input: 'hi', groups: undefined]

// letter in small case between 2 to 5 words
var a = "hii"
a.match("^([a-z]{2,5})$")
(2) ['hii', 'hii', index: 0, input: 'hii', groups: undefined]

// letter in small case any length
var a = "hii"
a.match("^([a-z]+)$")
(2) ['hii', 'hii', index: 0, input: 'hii', groups: undefined]
var a = "hiihjhbjh"
a.match("^([a-z]+)$")
(2) ['hiihjhbjh', 'hiihjhbjh', index: 0, input: 'hiihjhbjh', groups: undefined]

var a = "Hiihjhbjh"
a.match("^([a-z]+)$")
null

var a = "Hiihjhbjh"
a.match("^([A-Za-z]+)$")

var a = "Hiihjhbjh"
a.match("^([A-Za-z]+)$")
(2) ['Hiihjhbjh', 'Hiihjhbjh', index: 0, input: 'Hiihjhbjh', groups: undefined]
var a = "Hii1"
a.match("^([A-Za-z]+)$")
null
var a = "Hii1"
a.match("^([A-Za-z0-9]+)$")
(2) ['Hii1', 'Hii1', index: 0, input: 'Hii1', groups: undefined]

var a = "Hii1"
a.match("^([A-Za-z0-9$#]+)$")

var b = 9875643750
b.match("^([0-9]{10})$")
VM134:2 Uncaught TypeError: b.match is not a functi

var b = 9875643750
b.toString().match("^([0-9]{10})$")
(2) ['9875643750', '9875643750', index: 0, input: '9875643750', groups: undefined]

var str = "this hat is hot haat"
str.match(/h.t/g)

(2) ['hat', 'hot']0: "hat"1: "hot"length: 2[[Prototype]]: Array(0)
str.match(/h..t/g)
['haat']


var email = "a@a.com"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
(4) ['a@a.com', 'a', 'a', 'com', index: 0, input: 'a@a.com', groups: undefined]
var email = "@a.com"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
null
var email = "a@.com"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
null