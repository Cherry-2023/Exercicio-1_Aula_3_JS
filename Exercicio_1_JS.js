let ptnome = prompt('digite seu Nome')
let ptsobrenome = prompt('digite seu Sobrenome')
let ptidade = prompt('digite seu Idade')
Number(ptidade)
console.log(`Seu Nome é: ${ptnome}`)
console.log(`Seu Sobrenome é: ${ptsobrenome}`)
console.log(`Seu Idade é: ${ptidade}`)
console.table({
    Nome: ptnome,
    Sobrenome: ptsobrenome,
    Edad: ptidade
})
console.table()

