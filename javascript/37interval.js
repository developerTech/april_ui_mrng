// interval = run some operation after certain regular interval
// timeout = run only once after certain time

setInterval(function(){},time)

let myinterval = setInterval(function(){
    console.log(Math.random())
},3000)

0.2528224494152014
VM255:2 0.21988137135335517
VM255:2 0.08942942977268742
VM255:2 0.9077086182978551
VM255:2 0.4169051144299025
VM255:2 0.28688249531248533
VM255:2 0.1480375557124578
VM255:2 0.6369533313473017
VM255:2 0.25689682697915295

clearInterval(myinterval)

//settimeout

setTimeout(function(){
    console.log(Math.random())
},3000)