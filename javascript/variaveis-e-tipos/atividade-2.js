function brincandoComArray (ARRAY){
    // Validado nosso Array

    if ( !ARRAY ) return new ReferenceError("A função exige um Parâmetro.");

    const TIPO_ARRAY = ARRAY instanceof Array;
    
    if ( !TIPO_ARRAY ) return new TypeError("Você deve enviar um Array.")

    if ( ARRAY.length === 0 ) return -1;

    // Verificando cada indice por números pares.
    for (i = 0; i < ARRAY.length ; i++) {
        if ( ARRAY[i] !== 0 && ARRAY[i] % 2 === 0 ) {
            ARRAY.splice(i , 1 , 0);
        }
    }
    return ARRAY;
}

console.log(brincandoComArray([1,2,7,90,204,87]));