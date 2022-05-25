localStorage
> Presistant Storage
> wrt to browser
> we have to remove manully 

localStorage.setItem('myCity','Delhi')
undefined
localStorage.getItem('myCity')
'Delhi'
localStorage.removeItem('myCity')
undefined
localStorage.getItem('myCity')
null
localStorage.setItem('myCity','Delhi')
undefined


sessionStorage
> Temporary Storage
> Save Wrt to tab
> Remove as soon as you close the tab

sessionStorage.setItem('myToken','32543434634')
undefined
sessionStorage.getItem('myToken')
'32543434634'
sessionStorage.removeItem('myToken')

cookies
> Save wrt to website
> Expires intime

document.cookie
'_ga=GA1.2.1880173027.1602255983; _gid=GA1.2.3164921.1653442082; _gat_gtag_UA_131256843_1=1'
document.cookie="testCokkies=mycokkies; expires=Thru, 26 May 2022 01:00:00 UTC"
'testCokkies=mycokkies; expires=Thru, 26 May 2022 01:00:00 UTC'

document.cookie
'_ga=GA1.2.1880173027.1602255983; _gid=GA1.2.3164921.1653442082; testCokkies=mycokkies; _gat_gtag_UA_131256843_1=1'