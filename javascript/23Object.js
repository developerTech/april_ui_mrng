var movieName = "Avengers"
var movieRating = 4.5
var movieLang = "English"


var movieName1 = "Jab We met"
var movieRating = 4.8
var movieLang = "Hindi"


var movie = {
    name:'Avengers',
    rating:4.5,
    lang:'English'
}

movie
{name: 'Avengers', rating: 4.5, lang: 'English'}
movie.rating
4.5
movie.name
'Avengers'
movie.lang
'English'
movie.rating = 4.9
4.9
movie
{name: 'Avengers', rating: 4.9, lang: 'English'}
movie.ind="Hollywood"
'Hollywood'
movie
{name: 'Avengers', rating: 4.9, lang: 'English', ind: 'Hollywood'}
delete movie.lang
true

movie['lang']
'English'


//JSON
> JavaScript Object Notation

var movies = [
    {
        name:'Avengers',
        rating:4.5,
        lang:'English'
    },
    {
        name:'Jab We Met',
        rating:4.8,
        lang:'Hindi'
    }
]
movies[1].name
'Jab We Met'

for(mymovie of movies){ 
    console.log(mymovie.name) 
}
Avengers
Jab We Met


var movie = {
    name:'Avengers',
    rating:4.5,
    lang:'English'
}

for(key in movie){
    console.log(key)
}

name
rating
lang

for(key in movie){
    console.log(movie[key])
}
Avengers
4.5
English