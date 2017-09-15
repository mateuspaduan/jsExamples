Curso.prototype.exibeDisciplinas = function () {
  var mensagem = "As disciplinas do curso "+this.nome+" sao: ";
  for(var i=0; i<this.disciplinas.length; i++){
    debugger;
    mensagem+=this.disciplinas[i].nome;
    if(i<this.disciplinas.length-1){
      mensagem+=", "
    }
  }
  alert(mensagem);
}
