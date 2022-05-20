// const ARR = {ano:1,idade:22, numero:1};
const ARR = [3,28,3,45];

function validateErrors (arr,a) {
    
    // Observe que ao invés de usar 'typeof' para comparar o tipo da nossa array utilizei 'instanceof', pois se passarmos um objeto ao invez de uma array como parâmetro a verificicação será verdadeira, porém o método 'length' não pode ser aplicado dessa forma em um objeto. Utilizando o operador 'instanceof' podemos validar que o nosso parâmetro deverá ser estritamente um Array.
    const ARR_TYPE = arr instanceof Array;
    
    if( !arr || a === undefined ) throw new ReferenceError;
    
    if( ARR_TYPE !== true || typeof a !== "number") throw new TypeError;
    
    if( arr.length !== a) throw new RangeError;

    return console.log(arr);
        
}

try {
    validateErrors(ARR,0);
} catch (err) {
    if ( err instanceof ReferenceError ) {
        err.message = "É necessário enviar uma Array e um número.";
        console.log(err);
    }
    if ( err instanceof TypeError ) {
        err.message = "O primeiro parâmetro deve ser do tipo Array e o segundo parâmetro do tipo number";
        console.log(err);
    }
    if ( err instanceof RangeError ) {
        err.message = "O tamanho do Array e do número não são iguais.";
        console.log(err);
    }
}