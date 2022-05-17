var n1 = 5;
var n2 = 10;
var msg = "";

compara(n1, n2);
soma(n1, n2);

function compara(n1, n2) {
    if (n1 == n2 ? msg = `Os números ${n1} e ${n2} são iguais. ` : msg = `Os números ${n1} e ${n2} não são iguais. `);
        return msg;
};

function soma(n1, n2) {
    let soma = n1 + n2;

    if (soma < 10 ? msg = msg + `Sua soma é ${soma}, que é menor que 10 e ` : msg = msg + `Sua soma é ${soma}, que é maior que 10 e `);

        if (soma < 20 ? msg = msg + `menor que 20.` : msg = msg + `maior que 20.`);
            return msg;
}

console.log(msg);