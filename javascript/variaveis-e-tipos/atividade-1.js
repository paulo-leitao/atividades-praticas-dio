// Método 1: Usando 'for'

function primeiroMetodo (word) {

    if ( !word ) return new ReferenceError("Você não passou nenhum parâmetro.");
    
    const VERIFY_STRING = typeof word === "string";
    
    // Validando a string
    if ( VERIFY_STRING !== true ) return new TypeError("Você deve enviar uma String.");
    
    console.log("1º Método: Invertendo a string usando 'for':")
    
    const SIZE_STRING = word.length;
    let inverseOrder = SIZE_STRING - 1;
    let compare = "";
    for ( i = 0 ; i < SIZE_STRING ; i++ ) {
        compare = compare.concat(word[inverseOrder--]);
        console.log(compare);
    }
    
    if ( word === compare ) {
        return `"${word}" = "${compare}", por tanto é um palíndromo`;
     } else { 
         return `"${word}" != "${compare}", por tanto não é um palíndromo`;
        }
    
}

// Método 2: Usando os métodos 'split(), reverse() e join()'

function segundoMetodo (word){
    if ( !word ) return new ReferenceError("Você não passou nenhum parâmetro.");
    
    const VERIFY_STRING = typeof word === "string";
    
    // Validando a string
    if ( VERIFY_STRING !== true ) return new TypeError("Você deve enviar uma String");
    
    console.log("\n2º Método: Utilizando os métodos split(), reverse() e join():")
    
    let compare;
    compare = word.split("");
    console.log(compare);
    compare = compare.reverse();
    console.log(compare);
    compare = compare.join('');
    
    if ( word === compare ) {
        return `"${word}" = "${compare}", por tanto é um palíndromo`;
     } else { 
         return `"${word}" != "${compare}", por tanto não é um palíndromo`;
        }
}

console.log(primeiroMetodo("anta"));
console.log(segundoMetodo("escada"));