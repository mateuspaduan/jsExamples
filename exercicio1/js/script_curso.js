
var Curso = function (nome){
  this.nome = String();
  this.disciplinas = new Array();

  (typeof(nome)==='string') ? this.nome = nome : false;

  this.adicionaDisciplina = (disciplina) => {
    this.disciplinas.push(disciplina);
  }

  this.setNome = (nomeCurso) => {
    (typeof(nomeCurso)==='string') ? this.nome = nomeCurso : console.log("Nome Invalido!");
  }
}
