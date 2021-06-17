let co;
let inp= document.getElementById("disp");
let butn = document.body.getElementsByTagName("button");
let butnEql = document.getElementById("equalTo");
let butnClr = document.getElementById("clear");

for(let i = 0; i<butn.length; i++){
butn[i].addEventListener("click",()=> {
    inp.placeholder += butn[i].value;
    co = inp.placeholder;
})};

butnEql.addEventListener("click",()=>{
    inp.placeholder = eval(co);
})

butnClr.addEventListener("click",()=>{
    inp.placeholder="";
})

//Task reamaining
//To incorporate keypad listening to calc
