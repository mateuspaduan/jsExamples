debugger;
var Aluno = function (nome) {

  this.nome = String();
  this.periodo = Number();
  this.curso = String();

  (typeof(nome) === 'string') ? this.nome = nome : false;

  this.addPeriodo = () => {
    this.periodo++;
  }

  /*this.alteraCurso = (ref) => {
    var _default = "Eng. de Computacao";
    switch (ref) {
      case 1:
        this.curso = "Eng. de Telecom";
        break;

      case 2:
        this.curso = "Eng. Biomedica";
        break;

      case 3:
        this.curso = "Eng. de Automação";
        break;

      default:
        this.curso = _default;
        break;
    }
  }*/
}
