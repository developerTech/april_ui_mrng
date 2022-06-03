>> DOM Document object Modal
///////
tagname
class
id

document
document.getElementsByTagName('h1')
HTMLCollection [h1]
document.getElementsByTagName('a')
HTMLCollection(24) [a, a, a, a, a, a, a, a, a, a.scroll, a.scroll, a.scroll]
document.getElementsByTagName('h1')
HTMLCollection [h1]
document.getElementsByTagName('h1')[0]
<h1>​I'm AAKASH HANDA​</h1>​
document.getElementsByTagName('h1')[0].innerText
"I'm AAKASH HANDA"
document.getElementsByTagName('h1')[0].innerText = "I am from Developer Funnel"
'I am from Developer Funnel'

document.getElementsByClassName('scroll')
HTMLCollection(5) [a.scroll, a.scroll, a.scroll, a.scroll, a.scroll]
document.getElementsByClassName('scroll')[1].innerText = "Videos"
'Videos'
document.getElementsByClassName('scroll')[1].style.color="red"
'red'
document.getElementsByClassName('scroll')[1].style.visibility = "hidden"
'hidden'
document.getElementsByClassName('scroll')[1].style.visibility = "visible"
'visible'