
let preco

let lucro

let lucrof = -1000

let ingf = 0

preco = parseInt(prompt("Quantas pessoas estão previstas de ir:"))

let i = 150

while(i > 0) {
    lucro = (i * preco) - 1000

    if(lucro > lucrof) {
        lf = lucro
        ingf = i
    }

    preco = preco + 50
    i -= 10
}

alert("O maior lucro possivel será de R$" + lucrof + " vendendo o ingresso a R$" + ingf)