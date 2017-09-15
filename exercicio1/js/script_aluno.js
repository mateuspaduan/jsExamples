debugger;
var Aluno = function (nome){
  this.nome = String();//(no maximo 20 caracteres)
  this.periodo = Number();//(1<=p<=10)
  this.curso = String(); // (Comp, auto, bio, eletr/telec)
  this.matricula = Number();//(0<=mat<=50000)
  this.nota = Number(); //(0<=cr<=100)

(typeof(nome)==='string') ? this.nome = nome : false;

if (nome.length <= 20) {
   this.nome = nome;
} else {
  console.log("Nome com mais de 20 caracteres");
  this.nome="";
}

  this.periodo = 1;
  this.addPeriodo = () => {
    if (this.periodo < 10) {
      this.periodo++;
    }
  }

  this.removePeriodo = () => {
    if (this.periodo > 0) {
      this.periodo--;
    }
  }

   this.alteraCurso = (ref) => {
       console.log("Numeração dos Cursos ");
       console.log("(qualquer) - Eng. Computacao");
       console.log("1 - Eng. Automacao");
       console.log("2 - Eng. Biomedica");
       console.log("3 - Eng. Eletrica/Telecom");

     var _default = "Eng. Computacao";
     switch (ref) {
       case 1:
         this.curso = "Eng. Automacao";
        break;
       case 2:
         this.curso = "Eng. Biomedica";
         break;
       case 3:
         this.curso = "Eng. Eletrica/Telecom";
         break;
       default:
         this.curso = _default;
    }
    return "O curso do aluno "+ this.nome + " foi alterado para "+ this.curso;
  }

  this.alteraNota = (nota) => {
    if (nota >= 0 && nota<= 100) {
      this.nota = nota;
      console.log("A nota foi alterada para "+ this.nota);
    }else{
      console.log("A nota NAO foi alterada, notas apenas de 0 a 100");
    }
  }

  this.alteraMatricula = (mat) => {
    if (mat >= 0 && mat<= 50000) {
      this.matricula = mat;
      console.log("A matricula do aluno "+ this.aluno+" foi alterada para "+ this.matricula);
    }else{
      console.log("A matricula NAO foi alterada, matriculas apenas de 0 a 50000");
    }
  }
}
