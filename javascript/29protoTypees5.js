function human(name,city){
    this.name = name;
    this.city = city;
}


function robot(name){
    this.name = name;
    this.age = 10;
    this.legs = 2
}

let john = new human('John','Pune')
undefined
john
human {name: 'John', city: 'Pune'}
john.legs
undefined

human.prototype = new robot()


var kriti = new human('Kriti','Delhi')
undefined
kriti
human {name: 'Kriti', city: 'Delhi'}
kriti.age
10
kriti.legs
2