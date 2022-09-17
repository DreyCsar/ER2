let alunosPresentes = 10
for (let aluno = 0; aluno <= alunosPresentes; aluno++){
    if(aluno == 0){
        console.log('zero ' + aluno)
    } else if(aluno % 2 == 0){
        console.log('Par ' +aluno)
    } else{
        console.log('Impar ' +aluno)
    }
}