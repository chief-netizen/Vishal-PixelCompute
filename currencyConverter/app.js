const response = await fetch(
    'https://api.restcountries.com/countries/v5?limit=25&pretty=1',
    { headers: { 'Authorization': 'Bearer rc_live_99c4a351928c4efb975f9f6858ec1d3b' } }
);

const countryData = await response.json();

const arr=countryData.data.objects;
const optionFromContainer=document.getElementById("from-currency");
const optionToContainer=document.getElementById("to-currency");
arr.forEach(element=>{
    const newOptionfrom=document.createElement("option");
    const newOptionto=document.createElement("option");
    newOptionfrom.value=element.currencies[0]?.code;
    newOptionfrom.textContent=element.flag?.emoji;
    newOptionto.value=element.currencies[0]?.code;
    newOptionto.textContent=element.flag?.emoji;
    optionFromContainer.appendChild(newOptionfrom);
    optionToContainer.appendChild(newOptionto);
})



const convRates=async(fromCurr,toCurr,amount)=>{
    const apilink=(`https://v6.exchangerate-api.com/v6/ac6ebc592c15ceb15a7ed5e4/latest/${fromCurr}`)
    const response=await fetch(apilink);
    const data=await response.json();
    const arr=[...Object.entries(data.conversion_rates)];
    console.log(toCurr);
    const convRate=arr.find(rate=>{
        if(rate[0]===toCurr){
            return rate;
        }
    })
    console.log(convRate[1]);
    return amount*convRate[1];
}



const convertButton=document.getElementById("convert-btn");

convertButton.addEventListener("click",()=>{
    const fromButton=document.getElementById("from-currency");
    const toButton=document.getElementById("to-currency");
    const amount=document.getElementById("amount");
    const result=document.getElementById("result");
    let convertedAmount;
    convRates(fromButton.value,toButton.value,amount.value)
    .then(value=>{
        result.textContent=`${toButton.value} ${value}`;
    })
    .catch(e);
    
});
