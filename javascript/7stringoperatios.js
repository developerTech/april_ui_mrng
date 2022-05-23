var city = "lonDON"
city.toUpperCase()
'LONDON'
city.toLowerCase()
'london'
city.length
6
city[0]
'l'
city[1]
'o'
city[city.length-1]
'N'

var name ="  Nikita  "
undefined
name.trim()
'Nikita'
var name ="  Nikita . "
undefined
name.trim()
'Nikita .'

var a = "John"
undefined
var b = "john"
undefined
a == b
false
a.toLowerCase() == b.toLowerCase()
true


var city = "amsTerDaM"
"Amsterdam"
city.charAt(0)
'a'
city.charAt(1)
'm'
city[0]
'a'
city[-1]
undefined
city.charAt(-1)
''
city.at(-1)
'M'
city.at(-2)
'a'
city.at(2)
's'

var city = "amsTerDaM"
city.slice(1)
'msTerDaM'
city.slice(2)
'sTerDaM'
city.slice(-1)
'M'
city.slice(1,4)
'msT'
city.slice(1,5)
'msTe'
city.slice(2,5)
'sTe'
city.slice(0,-1)
'amsTerDa'
city.slice(0,-2)
'amsTerD'
city.slice(2,-2)
'sTerD'
city.slice(-2,2)
''

var city = "amsTerDaM"
city.at(0).toUpperCase()
'A'
city.slice(1).toLowerCase()
'msterdam'

city.at(0).toUpperCase()+city.slice(1).toLowerCase()
'Amsterdam'

var city = "pARiS"
city.at(0).toUpperCase()+city.slice(1).toLowerCase()
'Paris'

var a = "I am Learning JavaScript"
undefined
a.replace('JavaScript','JS')
'I am Learning JS'
var a = "JavaScript I am Learning JavaScript"
undefined
a.replace('JavaScript','JS')
'JS I am Learning JavaScript'
a.replace(/JavaScript/g,'JS')
'JS I am Learning JS'

var name ="  Nikita . "
name.replace(/ /g,'')
'Nikita.'


var url = "https://github.com/Aakashdeveloper/edu_may_node_22"
undefined
url.split('/')
(5) ['https:', '', 'github.com', 'Aakashdeveloper', 'edu_may_node_22']
url.split('/')[0]
'https:'
url.split('/')[2]
'github.com'
var a = url.split('/')
undefined
a[a.length-1]
'edu_may_node_22'

var a = 'JS I am Learning JS'
undefined
a.split(' ')
(5) ['JS', 'I', 'am', 'Learning', 'JS']
var a = "JavaScript"
undefined
a.split('')
(10) ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']

var a =  ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']
undefined
a.toString()
'J,a,v,a,S,c,r,i,p,t'
a.toString().replace(/,/g,'')
'JavaScript'
var a = 10
undefined
a.toString()
'10'