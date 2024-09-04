  
btn1.onclick = (evt) =>{
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
} 

let div =document.querySelector("div");
div.onmouseover = (evt) =>{
    
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
}
