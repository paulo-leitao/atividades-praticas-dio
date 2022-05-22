function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

// A diferença entre o uso dos métodos apply() e call(), é que diferentemente do call() que aceita uma lista de parâmetros, com o apply() os parâmetros precisam ser passados como um array.

// Objetos para teste.

const MAE = {
    nome: 'Raimunda',
    idade: 46
}
const PAI = {
    nome: 'Antonio',
    idade: 60
}
const FILHO1 = {
    nome: 'Paulo',
    idade: 27
}
const FILHO2 = {
    nome: 'Luiz',
    idade: 19
}
const FILHA = {
    nome: 'Maria',
    idade: 11
}
const CAO1 = {
    nome: 'Farofa',
    idade: 4
}
const CAO2 = {
    nome: 'Pitty',
    idade: 16
}
const GATO1 = {
    nome: 'Anjinha',
    idade: 5
}

// Chamando a função passando nossos objetos utilizando os métodos do exercício.

// console.log(calculaIdade.call(GATO1,3));
console.log(calculaIdade.apply(GATO1,[3]));