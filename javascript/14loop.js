for
while
doWhile
for of >> array
for in >> Object
////////////////////////////////////////////////////////////////
map
filter

///for > help to generate series of values as well as iterate over the array
for(starting,condition,increment)

for(i=0;i<5;i++){
    console.log(i)
}
0
1
2
3
4

var city = ['Delhi','Mumbai','Amsterdam','London','Helsinki']
for(i=0;i<city.length;i++){
    console.log(city[i])
}
Delhi
Mumbai
Amsterdam
London
Helsinki



var city =  ['Venice',['Apple','Mango','Orange'],'Mumbai', 'Amsterdam', 'London']
for(i=0;i<city.length;i++){
    if(Array.isArray(city[i])){
        for(j=0;j<city[i].length;j++){
            console.log(city[i][j])
        }
    }else{
        console.log(city[i])
    }
}

/////////////////
while
/////////////////
var i = 10
while(i<5){
    console.log(i);
    i++
}

/////////////////
Do while
/////////////////
var i = 10
do{
    console.log(i);
    i++
}
while(i<5)

/////
for of
//////
var city = ['Delhi','Mumbai','Amsterdam','London','Helsinki']
for(mycity of city){
    console.log(mycity)
}

var city =  ['Venice',['Apple','Mango','Orange'],'Mumbai', 'Amsterdam', 'London']

for(mycity of city){
    if(Array.isArray(mycity)){
        for(fruits of mycity){
            console.log(fruits)
        }
    }else{
        console.log(mycity)
    }
}