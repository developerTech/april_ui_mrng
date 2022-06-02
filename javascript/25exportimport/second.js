//es5
//var myObj = require('./first')
//es6
import myObj from './first'

console.log(myObj.user)
console.log(myObj.dbQuery.find('Students'))

/*
[ { name: 'Alvin', city: 'Boston' }, { name: 'Priya', city: 'Paris' } ]
Select * from Students
*/