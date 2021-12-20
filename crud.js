

function addAlunoToList(doc) {
    let aluno = doc.data();
    let html = "";
    
    //html += "<li><a>";
    html += '<div class="list_item"> <p>';
    html += aluno.numero + " - " + aluno.nome;
    html += '</p> ';
        // <button class="edit_bt" type="reset" href="/"> E </button> </div>
    /*html +=
    '<button id="' +
    doc.id +
    'Edit" class="edit" type="button" onClick="paraEdicao(this.id)"><i class="fa fa-edit"></i></button>';
    html +=
    '<button id="' +
    doc.id +
    'Rem" class="rem" type="button" onClick="removeAluno(this.id)"><i class="fa fa-trash"></i></button>';
    html += '<p class = "descPar"> Curso: ' + aluno.curso + "</p>";
    html += '<p id="' + doc.id + 'Contacto" class = "descPar"></p>';
    
    html += "</a></li>";
    html += "<hr>";*/
    /*
    alunoForm.reset();
    document.querySelector("#addAluno").value = "new";
    */
    return html;
}