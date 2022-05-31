function add(a,b){
    return a+b
}
add(1,2)
3
add(1,2,3)
3
add(1)
NaN

////////REST/////
function add(...args){
    console.log(args)
}

add(1,4,7)
 [1, 4, 7]

function add(...args){
    let out = 0
    for(data of args){
        out = out+data
    }
    return out
}


add(5,8,3,4)
20
add(1,2,3,4)
10
add(1,2)
3
add(1,2,3)
6

////////SPREAD/////

var input = [1,2,3,4]
function add(a,b,c,d){
    return a+b+c+d
}

add(input)
'1,2,3,4undefinedundefinedundefined'

add(...input) ////spread
10

... in calling function it is spread
... in parameter it is rest


function add(...args){
    let out = 0
    for(data of args){
        out = out+data
    }
    return out
}
var input = [1,2,3,4,5]

add(...input)