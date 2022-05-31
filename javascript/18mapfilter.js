Map
> map is use to iterate over the Array
> it always return the same length of output as input array
> it is use to modify/apply logics on values (Add,mul, bind in html)

var a = [4,58,9,11,7,34,16,23,9,18,25]
a.map((data)=>{return data*2})
[8, 116, 18, 22, 14, 68, 32, 46, 18, 36, 50]

var a = [4,58,9,11]
a.map((data)=>{return `<p>${data*2}</p>`})
 ['<p>8</p>', '<p>116</p>', '<p>18</p>', '<p>22</p>']



filter
> filter is use to filter out the value;
> it may or may not return the same length of input;
> it only return those value for which condition/output is true


var a = [4,58,9,11,7,34,16,23,9,18,25]
a.filter((data) => {return data>20})
 [58, 34, 23, 25]


var city = ['Venice', 'Mumbai', 'Amsterdam', 'Pune', 'Boston', 'London', 'Helsinki']
city.filter((data) => {return data.indexOf('a')>-1})
['Mumbai', 'Amsterdam']

var city = ['Venice', 'Mumbai']


var a = [-1,0,1,2,3]
a.map((data) => {return data*2})
[-2,0,2,4,6]

var a = [-1,0,1,2,3]
a.filter((data) => {return data*2})
[-1, 1, 2, 3]




var a = [4,58,9,11,7,34]
a.map((data) => {return data>20})
[false, true, false, false, false, true]