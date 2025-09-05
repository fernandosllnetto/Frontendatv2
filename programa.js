let totalAulaSemestre = parseInt(prompt("Informe o total de aulas do semestre:"));
let totalFalta = parseInt(prompt("Informe o total de faltas do aluno:"));
let nota1 = parseFloat(prompt("Informe a primeira nota:"));
let nota2 = parseFloat(prompt("Informe a segunda nota:"));

let percentualPresencaAluno = ((totalFalta/totalAulaSemestre)) * 100;

console.log("Número de aulas do semestre: " + totalAulaSemestre);
console.log("Número de faltas do aluno: " + totalFalta);
console.log("Percentual de presença do aluno: " + percentualPresencaAluno.toFixed(2));

if (percentualPresencaAluno > 25) {
    console.log("Situação final do aluno: reprovado por falta");
} else {
    let media = (nota1 + nota2) / 2;

    if (media >= 7.0) {
        console.log("Situação final do aluno: aprovado");
    } else if (media >= 5.0) {
        let notaRecuperacao = parseFloat(prompt("Informe a nota da prova de recuperação:"));
        let mediaFinal = (media + notaRecuperacao) / 2;
        console.log("Nota complementar (recuperação): " + notaRecuperacao);
        console.log("Média final após recuperação: " + mediaFinal.toFixed(2));

        if (mediafinal >= 7.0) {
            console.log("Situação media final do aluno: aprovado");
        } else{
            console.log("Situação da media final do aluno: reprovado");
        
        }
    }
}
