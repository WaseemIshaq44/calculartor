// let input=document.getElementById("input").textContent;

let resetField = false;
function inputbutton(val){

    let inputfield=document.getElementById('inputfield');
    let lastValue=inputfield.value.slice(-1);
    let lastThreeValue=inputfield.value.slice(-3);
    let lastSevenValue=inputfield.value.slice(-7);

    if (resetField && val !== "=") {
        inputfield.value = "";
        resetField = false;
    } 
    if((lastValue==="+" || lastValue==="-" || lastValue==="*" || lastValue==="/") 
        && (val==="+" || val==="-" || val==="*" || val==="/" || val==="**2" || val==="**(1/2)" )){
        inputfield.value=inputfield.value.slice(0,-1)+val;
    }else if(lastThreeValue==="**2" && (val==="+" || val==="-" || val==="*" || val==="/" || val==="**" || val==="**2" || val==="**(1/2)" )){
        inputfield.value=inputfield.value.slice(0,-3)+val;      
    }else if(lastSevenValue==="**(1/2)" && (val==="+" || val==="-" || val==="*" || val==="/" || val==="**" || val==="**2" || val==="**(1/2)" )){
        inputfield.value=inputfield.value.slice(0,-7)+val;
    }else if(val==="%"){
        inputfield.value=inputfield.value/100;
        resetField=true;
    }else if(val==="1/x"){
        inputfield.value=1/inputfield.value;
        resetField=true;
    }else if(val==="C"){
        inputfield.value="";
        resetField=true;
    }else if(val==="="){
        inputfield.value=eval(inputfield.value);
        resetField=true;
    }else{
        inputfield.value+=val;
    }

    console.log(inputfield.value);
    console.log(resetField);
}

