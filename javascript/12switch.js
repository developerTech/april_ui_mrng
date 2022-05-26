ifelse > multiple condition and multiple output
ternary > one condition and one output
switch> one condition and multiple output

let uname = "Aakash"
switch(uname){
    case 'Aakash':
        console.log(`Hi ${uname}`)
        break;
    case 'Pankaj':
        console.log(`Hi ${uname}`);
        break;
    default:
        console.log(`Hi unknown`)
}


let Input = 2
switch(Input%2){
    case 0:
        console.log(`Hi ${Input} is even`)
        break;
    case 1:
        console.log(`Hi ${Input} is odd`);
        break;
    default:
        console.log(`Hi unknown`)
}