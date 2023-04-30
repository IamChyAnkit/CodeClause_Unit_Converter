// length code

function getlen(){
    
    let getval = document.getElementById("get").value;
    let setval = document.getElementById("set").value;
    let x  = document.getElementById("demo");
    let y  = document.getAnimations("inc");
    if (getval === setval){
        alert('if you convert ${getval} into ${setval} you will get same answer');

    }
    if (getval==="meter"&&setval==="foot"){
        
        y.innerText = x.innerText * 3.28084;
    }
    else if (getval==="meter"&&setval==="cm"){
       
        y.innerText = x.innerText * 100;
    }
    else if (getval==="foot"&&setval==="meter"){
        y.innerText = x.innerText /3.281;
    }
    else if (getval==="foot"&&setval==="cm"){
        y.innerText = x.innerText * 30.48;
    }
    else if (getval==="cm"&&setval==="foot"){
        y.innerText = x.innerText /30.48;
    }
    else if (getval==="cm"&&setval==="meter"){
        y.innerText = x.innerText / 100;
    }
    else if (getval==="meter"&&setval==="cm"){
        y.innerText = x.innerText * 100;
    }
    
    let z = /[a-z]/i;
    if (z.text(x.innerText)===true){
        alert("enter valid number");
    }
}

function getceli(){
    
    let x = document.getElementById("celi");
    let y = document.getElementById("fah");
    y.innerText = x.innerText * 1.8 +32;

    let z = /[a-z]/i;
    if (z.text(x.innerText)===true){
        alert("enter valid number");
    }
}
function getf(){
    
    let x = document.getElementById("celi");
    let y = document.getElementById("fah");
    x.innerText = (y.innerText - 32)*5/9;

    let z = /[a-z]/i;
    if (z.text(y.innerText)===true){
        alert("enter valid number");
    }
}
function getgram(){
    
    let x = document.getElementById("kilo");
    let y = document.getElementById("gram");
    y.innerText = x.innerText*1000;

    let z = /[a-z]/i;
    if (z.text(x.innerText)===true){
        alert("enter valid number");
    }
}
function getkilo(){
        
        let x = document.getElementById("kilo");
        let y = document.getElementById("gram");
        x.innerText = y.innerText/1000;
    
        let z = /[a-z]/i;
        if (z.text(x.innerText)===true){
            alert("enter valid number");
        }
    }
