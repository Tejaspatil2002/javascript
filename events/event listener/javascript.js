let modeBtn =  document.querySelector("#mode");
let currentMode = "Light";

modeBtn.addEventListener("click",() =>{
    if(currentMode=== "Light"){
        currentMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    }else{
        currentMode="Light";
        document.querySelector("body").style.backgroundColor = "white";
        }
        console.log(currentMode);
}); 