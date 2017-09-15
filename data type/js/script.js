debugger;
var aluno = {

  nome: "Mateus",
  periodo: "8",
  curso: "Engenharia de Computação",
  id: 10
};

console.log("typeof aluno => " + typeof(aluno));
console.log("typeof aluno.nome => " + aluno.nome);
console.log("typeof aluno.periodo => " + aluno.periodo);
console.log("typeof aluno.id => " + typeof(aluno.id));

var alunos = new Array();
alunos.push(aluno);

console.log("typeof alunos => " + typeof(alunos));
