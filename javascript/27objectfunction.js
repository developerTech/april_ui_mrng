function language(name,country){
    this.name = name;
    this.country = country;
    this.greet = () => {return `Say Hi to ${name}`}
}

var Hindi = new language('Hindi','India')
undefined
Hindi
language {name: 'Hindi', country: 'India', greet: ƒ}
var English = new language('English','England')
undefined
English
language {name: 'English', country: 'England', greet: ƒ}country: "England"greet: () => {return `Say Hi to ${name}`}name: "English"[[Prototype]]: Object
English.greet()
'Say Hi to English'