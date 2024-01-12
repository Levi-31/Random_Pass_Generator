const upperSet="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet= "abcdefghijklmnopqrstuvwxyz";
const numberSet="1234567890";
const symbolSet="~!@#$%^&*()_+/";


const totalCharReq=document.querySelector('#total-char');
const upperInput=document.querySelector('#upper-case');
const lowerInput=document.querySelector('#lower-case');
const numInput=document.querySelector('#numbers');
const specialInput=document.querySelector('#symbols');

const passBox= document.querySelector('#pass-box');

 





const getRandomData= (dataSet)=>{

    return dataSet[Math.floor(Math.random() * dataSet.length)];
}

const trimPass =(password,len)=>{
     if(password.length > len){
        return password.slice(0,len);
     }
     else{
        return password;
     }
}


const generatePass=(password = "") => {
    if(upperInput.checked){
        password+=getRandomData(upperSet)
    }
    if(lowerInput.checked){
        password+=getRandomData(lowerSet);
    }
    if(numInput.checked){
      password+=getRandomData(numberSet);
    }
    if(specialInput.checked){
        password+=getRandomData(symbolSet);
    }

    if(password.length < totalCharReq.value){

        return generatePass(password);
     }
   


passBox.innerText=trimPass(password,totalCharReq.value); ;

}

document.querySelector('#btn').addEventListener('click',()=>{
    generatePass();
})


// generatePass();
