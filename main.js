var a="Name";
var d="Thing";
function playthegame(){
    a=document.getElementById("input1").value;
    document.getElementById("label1").textContent=a;
    let b="Place";
    let c="Animal";
    b=document.getElementById("input2").value;
    document.getElementById("label2").textContent=b;
    c=document.getElementById("input3").value;
    document.getElementById("label3").textContent=c;
    d=document.getElementById("input4").value;
    document.getElementById("label4").textContent=d;
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    }
playthegame();