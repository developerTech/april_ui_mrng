// let firstName = "Michal"
// let lastName = "Peter"

// let sayHi = {
//     firstName: "Zoe",
//     lastName: "Lisa",
//     greet: () => {
//         return `Say Hi to ${firstName} ${lastName}`
//     }
// }

// console.log(sayHi.greet())
// Say Hi to Michal Peter


let firstName = "Michal"
let lastName = "Peter"

let sayHi = {
    firstName: "Zoe",
    lastName: "Lisa",
    greet: function(){
        return `Say Hi to ${this.firstName} ${this.lastName}`
    }
}

console.log(sayHi.greet())
