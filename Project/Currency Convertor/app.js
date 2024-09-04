let BASE_URL ="https://cdn.jsdelivr.net/gh/ismartcoding/currency-api@main/latest/data";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".form select");
const toCur = document.querySelector(".to select");
for (let select of dropdowns){
    for (currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        if(select.name === "from" && currCode ==="USD")
        {
            newOption.selected="selected";
        } else 
        if(select.name === "to" && currCode ==="INR")
            {
                newOption.selected="selected";
            }
        select.append(newOption);
        }
        select.addEventListener("change",(evt) =>{
            updateFlag(evt.target);
        });
}

const updateFlag = (element) =>{
    let currCode =element.value;
    let countryCode = countryList[currCode];
    let newSrc =`https://flagsapi.com/${countryCode}/flat/64.png `;
    let img =  element.parentElement.querySelector("img");
            img.src=newSrc;
};

btn.addEventListener ("click" ,async(evt) =>{
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
   
    if(amtVal === "" || amtVal<1){
        amtVal =1;
        amount.value="1";
    }

    const URl =`${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCur.value.toLowerCase()}.json`;


    let response = await fetch(URL);
    let data = await response.json();
    let rate = data[TransformStreamDefaultController.value.toLowerCase()];
    console.log(rete);
    
});