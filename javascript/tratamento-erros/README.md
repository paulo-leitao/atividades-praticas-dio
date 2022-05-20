# Tratamento de Erros

## Atividade: validação de erros por tipo

O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda ao número enviado como parâmetro na função. Caso contrário, um erro será lançado.

- Criar uma função que recebe um array e um número
- Realizar as seguintes validações
  - Se os parâmetros não forem enviados, lançar um erro do tipo `ReferenceError`
  - Se o array não for do tipo 'object', lançar um erro do tipo `TypeError`
  - Se o número não for do tipo 'number', lançar um erro do tipo `TypeError`
  - Se o tamanho do array for diferente do número enviado como parâmetro, lançar um erro do tipo `RangeError`
- Utilizar a declaração `try...catch`
- Filtrar as chamadas de catch por cada tipo de erro utilizando o operador `instanceof`

## Links Auxiliares

- [Objeto Error](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Error)
- [instanceof](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/instanceof)
- [typeof](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/typeof)
- [try...catch](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/try...catch)