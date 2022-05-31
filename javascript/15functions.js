function
method
arrow function
IFFI
Generator function
////////////////////
var a = 10
var b = 20
a+b
30
///////////
keyword nameoffunction(parameter){
    return
}

function add(a,b){
    return a+b
}
add(1,2)
3
add(6,9)
15
add('a','b')
'ab'

function isEven(userInput){
    let out;
    if(userInput%2==0){
        out =`Number ${userInput} is even`
    }else{
        out =`Number ${userInput} is odd`
    }
    return out
}
isEven(5)
'Number 5 is odd'
isEven(12)
'Number 12 is even'

///////Method//////
> when function assign to variable value


var add = function(a,b){
    return a+b
}
add(4,7)
11

/////es arrow/////
let add = (a,b) => {return a+b}
add(1,2)
3

//////////////////
