/// array is a collection of homogeneous or heterogeneous datatypes
var a = ['hii','Hey','Hello','Bie'] // array of strings
var b = [45,34,67,23,89] // array of numbers
var c = [true,false,false,true,true] // array of boolean

var d = ['dgd','gdfb',10,34,true,25,'dds',3,"dfbdf",false]

var city = ['Delhi','Mumbai','Amsterdam','London','Helsinki']
undefined
city.length
5
city[0]
'Delhi'
city[1]
'Mumbai'
city[city.length-1]
'Helsinki'
typeof(city)
'object'

city.push('Boston')
6
city
(6) ['Delhi', 'Mumbai', 'Amsterdam', 'London', 'Helsinki', 'Boston']
city.push('Helsinki')
7
city
(7) ['Delhi', 'Mumbai', 'Amsterdam', 'London', 'Helsinki', 'Boston', 'Helsinki']
city.pop()
'Helsinki'
['Delhi', 'Mumbai', 'Amsterdam', 'London', 'Helsinki', 'Boston']
city.pop(2)
'Boston'
city.pop(786785675656)
'Helsinki'
var city = ['Delhi','Mumbai','Amsterdam','London','Helsinki']
undefined
city.shift()
'Delhi'
city.unshift('Venice')
5
city
(5) ['Venice', 'Mumbai', 'Amsterdam', 'London', 'Helsinki']

push > add the value in the end of array
pop > remove the last value of array
shift > remove the first value of array
unshift> add the value in the begining of array

var city = ['Venice', 'Mumbai', 'Amsterdam', 'London', 'Helsinki']
undefined
city.slice(1)
(4) ['Mumbai', 'Amsterdam', 'London', 'Helsinki']
city.slice(2)
(3) ['Amsterdam', 'London', 'Helsinki']
city.slice(-1)
['Helsinki']
city.slice(0,-1)
(4) ['Venice', 'Mumbai', 'Amsterdam', 'London']
city.slice(2,-1)
(2) ['Amsterdam', 'London']
city.slice(2,4)
(2) ['Amsterdam', 'London']

//// 
splice(startindex,number of value to remove, values to add)


var city = ['Venice', 'Mumbai', 'Amsterdam', 'London', 'Helsinki']

// do not remove any value but add on index number 3
city.splice(3,0,'Pune','Boston')
[]
city
(7) ['Venice', 'Mumbai', 'Amsterdam', 'Pune', 'Boston', 'London', 'Helsinki']

// remove 1 value from index number 2
city.splice(2,1)
['Amsterdam']
city
(6) ['Venice', 'Mumbai', 'Pune', 'Boston', 'London', 'Helsinki']

// remove 2 values on index number 4 and add 2 values
city.splice(4,2,'Nice','Innsburg')
(2) ['London', 'Helsinki']
city
(6) ['Venice', 'Mumbai', 'Pune', 'Boston', 'Nice', 'Innsburg']

var city = ['Venice', 'Mumbai', 'Amsterdam', 'Pune', 'Boston', 'London', 'Helsinki']
undefined
city.indexOf('Boston')
4
city.indexOf('Venice')
0
city.indexOf('Delhi')
-1
city.indexOf('Nice')
-1

var a = ['a','b',3]
var b = [4,'f','h']
a+b
'a,b,34,f,h'
a.concat(b)
(6) ['a', 'b', 3, 4, 'f', 'h']

var a = "hii"
var b = [3,5,8]
Array.isArray(a)
false
Array.isArray(b)
true