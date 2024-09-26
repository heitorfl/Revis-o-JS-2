let ele = parseInt(prompt("Quantos elefantes tem no ambiente?"));

let rep = 1;

for(rep = 1; rep <= ele; rep=rep+2){
    if(rep == 1){
        console.log(rep + " elefante incomoda muita gente, " + (rep+1) + " elefantes incomodam muito mais")
    }else if(rep == ele){
        console.log(rep + " elefante incomoda muita gente, ") 
    }else{
    console.log(rep + " elefantes incomodam muita gente,  " + (rep+1) + " elefantes incomodam muito mais")
    }
}