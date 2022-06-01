var uname = "John"
{
    uname:uname
}

{
    uname 
}

////////////////////////////////////////////////////////////////
this.state.keyword = "something"

//let keyword  = this.state.keyword 
let {keyword} = this.state

var [a,b] = [10,20]
a == 10
b == 20

var a = [10,20,30]
var [c,d] = a
c == 10
d == 20

function test(){
    return [1,2,3]
}

let [g,h] = test()
g == 1
h == 2