
let preco

let lucro

let lucrof = -1000

let ingf = 0

preco = parseInt(prompt("Quantas pessoas estão previstas de ir:"))

for (let i = 150; i > 0; i -= 10) {
    lucro = (i * preco) - 1000

    if(lucro > lucrof) {
        lf = lucro
        ingf = i
    }

    preco = preco + 50
}

alert("O maior lucro possivel será de R$" + lucrof + " vendendo o ingresso a R$" + ingf)