var calc = {
    sum: function(a,b){return a+b},
    sub:(a,b)=>{return a-b}
}
calc.sum(4,8)
12
calc.sum(9,8)
17
calc.sub(9,8)
1

var dbQuery = {
    find:(table) => {return `Select * from ${table}`},
    insert:(table,data) => {return `insert into ${table} name,city values(${data.name},${data.city})`}
}


dbQuery.find('employee')
'Select * from employee'
dbQuery.find('city')
'Select * from city'

dbQuery.insert('Student',{name:'Amit',city:'Delhi'})
'insert into Student name,city values(Amit,Delhi)'