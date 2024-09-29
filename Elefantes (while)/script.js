let ele = parseInt(prompt("Quantos elefantes tem no ambiente?"));

let rep = 1;

while(rep <= ele){
    if(rep == 1){
        console.log(rep + " elefante incomoda muita gente, " + (rep+1) + " elefantes incomodam muito mais")
    }else if(rep == ele){
        console.log(rep + " elefante incomoda muita gente, ") 
    }else{
    console.log(rep + " elefantes incomodam muita gente,  " + (rep+1) + " elefantes incomodam muito mais")
    }
    rep=rep+2
}