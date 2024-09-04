let btn1=document.querySelector("#btn1");

btn1.onclick = () =>{
    console.log("btn click me"); 
    let a =25;
    a++;
    console.log(a);
    
    // alert("hello tejas");
}   
/* event override here
btn1.onclick = () =>{
    console.log("second handler ");
    
    // alert("hello tejas");
} */

let div =document.querySelector("div");
div.onmouseover = () =>{
    console.log("you are inside div");
}

