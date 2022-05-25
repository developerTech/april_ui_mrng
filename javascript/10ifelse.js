if(condition){
    //Do Something
}else{
    //Do Something
}


var a = 3634
if(a%2==0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}
VM190:3 Number 3634 is even
undefined
var a = 3631
if(a%2==0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}
VM199:5 Number 3631 is odd

var uname = "Shruti"
if(uname == "Priya"){
    console.log(`${uname} you are admin`)
}else if(uname == "Shruti"){
    console.log(`${uname} you are super admin`)
}else{
    console.log(`${uname} you are unknown`)
}
Shruti you are super admin

var uname = "Bhumika"
var role = "Admin"

if(role == "Admin"){
    if(uname == "Priya"){
        console.log(`${uname} you are admin`)
    }else if(uname == "Bhumika"){
        console.log(`${uname} you are Super admin`)
    }
}else if(role == "User"){
    if(uname == "Priya"){
        console.log(`${uname} you are user`)
    }else if(uname == "Bhumika"){
        console.log(`${uname} you are user`)
    }
}else{
    console.log(`${uname} you are unknown`)
}
Bhumika you are Super admin

var uname = "Amit" 
var role = "Admin"
// Both Condition Should Match
if(uname == "Amit" && role == "Admin"){
    console.log(`${uname} you are ${role}`)
}else{
    console.log(`${uname} you are unknown`)
}

// Any one Condition Should Match
if(uname == "Amit" || role == "Admin"){
    console.log(`${uname} you are ${role}`)
}else{
    console.log(`${uname} you are unknown`)
}

let a = 0
if(a){
    console.log('Hiii')
}else{
    console.log('Bie')
}

let a = 1
if(a){
    console.log('Hiii')
}else{
    console.log('Bie')
}

let a = -1
if(a){
    console.log('Hiii')
}else{
    console.log('Bie')
}

/// ternary Operator
(single line of else)
condition ? if condition is true : if condition is false

var a = 10
a>10?"Hiii":"Bie"
'Bie'
var a = 10
a<10?"Hiii":"Bie"
'Bie'
var a = 10
a==10?"Hiii":"Bie"
'Hiii'

var a = 10
a==10?a+1:a-1
11
var a = 10
a>10?a+1:a-1
9