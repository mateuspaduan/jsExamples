debugger;
var Disciplina = function (nome){

  this.nome = String(); //Max 20 caractéres
  this.mediaClasse = Number(); //0<=med<=100
  this.professor = String();
  this.alunosMatriculados = new Array();
  this.maxAlunos = Number(); //Max 10

  (typeof(nome) === 'string') ? this.nome = nome : false;
  if(nome.length <= 20){
    this.nome = nome;
  }
  else{
    console.log("Nome deve conter no máximo 20 caractéres")
    this.nome = "";
  }

  this.calculaMediaClasse = () => {

    var i;
    var size = this.alunosMatriculados.length;
    for(i = 0; i<size; i++){
      this.mediaClasse = this.mediaClasse + this.alunosMatriculados[i].nota;
    }

    var result = this.mediaClasse/size;
    if(result >= 0 && result <= 100){

      this.mediaClasse = result;
      console.log("A média dos alunos matriculados na matéria é " + result + " pontos");
    }

    else false;
  }

  this.adicionaAluno = (aluno) => {

    debugger;
    if(this.maxAlunos < 10){

      this.alunosMatriculados.push(aluno);
      this.maxAlunos++;
    }

    else console.log("Turma lotada irmão!");
  }
}
