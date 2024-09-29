let cartas = parseInt(prompt("Quantas carta você quer virar?"))

let rep = 0

while(rep<=cartas){

let naipe = parseInt(Math.random()* 3)

if(naipe==0){
    naipe="copas"
}
else if(naipe==1){
    naipe="paus"
}
else if(naipe==2){
    naipe="ouro"
}
else if(naipe==3){
    naipe="espada"
}

let num = parseInt(Math.random()* 10)

console.log(num + '-' + naipe)

rep++

}