const calc = (opt) => {
    let a = document.getElementById('first').value;
    let b = document.getElementById('second').value;
    let out = 0
    if(opt == 'add'){
        out = `Sum of Number ${Number(a)+Number(b)}`
    }else{
        out = `Sub of Number ${Number(a)-Number(b)}`
    }
    document.getElementsByClassName('out')[0].innerText=out
}


// function add(){
//     let a = document.getElementById('first').value;
//     let b = document.getElementById('second').value;
//     let out = Number(a)+Number(b)
//     document.getElementsByClassName('out')[0].innerText=`Sum of Number is ${out}`
// }
// function sub(){
//     let a = document.getElementById('first').value;
//     let b = document.getElementById('second').value;
//     let out = a-b
//     document.getElementsByClassName('out')[0].innerText=`Sub of Number is ${out}`
// }