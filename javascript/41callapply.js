let person = {
    fullName: function(){
        return this.firstName + ' ' + this.lastName
    }
}

let John = {
    firstName: "John",
    lastName: 'Dave'
}

person.fullName.call(John)
'John Dave'
person.fullName.apply(John)
'John Dave'

let person1 = {
    fullName: function(city,country){
        return this.firstName + ' ' + this.lastName+ ' ' +city+ ' ' +country
    }
}

let John1 = {
    firstName: "John",
    lastName: 'Dave'
}

person1.fullName.call(John1)
'John Dave undefined undefined'
person1.fullName.call(John1,'Delhi','India')
'John Dave Delhi India'
person1.fullName.call(John1,['Delhi','India'])
'John Dave Delhi,India undefined'
person1.fullName.apply(John1,['Delhi','India'])
'John Dave Delhi India'