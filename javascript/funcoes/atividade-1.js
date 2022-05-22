let alunos = [ 
    {
        nome: 'José',
        nota: 9,
        turma: '1A'
    }, 
    {
        nome: 'Maria',
        nota: 10,
        turma: '1A'
    }, {
        nome: 'Carlos',
        nota: 3,
        turma: '1A'
    }, {
        nome: 'Julia',
        nota: 8.5,
        turma: '1A'
    }, {
        nome: 'Ana',
        nota: 6,
        turma: '1A'
    }, {
        nome: 'Fernando',
        nota: 7,
        turma: '1A'
    }, {
        nome: 'Roberta',
        nota: 6.5,
        turma: '1A'
    }
];

function alunosAprovados( alunos , mediaAprovacao ) {
    let listaAprovados = [];

    for (i = 0 ; i < alunos.length ; i++){
        let {nome, nota} = alunos[i];
        if ( nota >= mediaAprovacao){
            listaAprovados.push(nome);
        }
    }
    console.log(listaAprovados);
}

alunosAprovados(alunos, 7);

