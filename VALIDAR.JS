 //Seu JavaScript de validação aqui

 const camposDoFormulario = document.querySelectorAll("[required]");
 const formulario = document.querySelector("[formulario]");
 
 
 formulario.addEventListener("submit", (e) => {
     e.preventDefault();
 
     const listaRespostas = {
         "nome": e.target.elements["nome"].value,
         "email": e.target.elements["email"].value,
         "assunto": e.target.elements["assunto"].value,
         "mensagem": e.target.elements["mensagem"].value,
     }
 
     localStorage.setItem("Contato", JSON.stringify(listaRespostas), alert("Sua mensagem foi enviada com sucesso"));
 
     // window.location.alert = ("sua mensagem foi enviada com sucesso"); só redireciona
 })
 
 camposDoFormulario.forEach((campo) => {
     campo.addEventListener("blur", () => verificarCampo(campo));
     campo.addEventListener("invalid", evento => evento.preventDefault()); //reseta a mensagem padrão do html.
 })
 
 const possiveisErros = [ //tiposDeErro
     'valueMissing',
     'typeMismatch',
     'tooShort'
 ]
 
 const mensagensDeErro = { //mensagens
     nome: {
         valueMissing: "Este campo não pode estar vazio",
         tooShort: "Nome muito curto. Por favor, insira um nome válido"
     },
     email: {
         valueMissing: "Este campo não pode estar vazio",
         typeMismatch: "Por favor, insira um e-mail válido",
         tooShort: "E-mail muito curto. Porfavor, insira um e-mail válido"
     },
     assunto: {
         valueMissing: "Este campo não pode estar vazio",
         tooShort: "Sua mensagem é muito curta"
     },
     suaMensagem: {
         valueMissing: "Este campo não pode estar vazio",
         tooShort: "Sua mensagem é muito curta"
     }
 }
 
 function verificarCampo(campo) {
     let mensagemDeErro = "";
 
     if (campo.value.length <= 4) {
         // console.log("curto");
     }
 
     possiveisErros.forEach(erro => {
         if (campo.validity[erro]) {
             mensagemDeErro = mensagensDeErro[campo.name][erro];
             console.log(mensagemDeErro);
         }
     })
 
     const erroNaTela = campo.parentNode.querySelector('.mensagem__erro');
     const validadorDeinput = campo.checkValidity();
 
     if(!validadorDeinput) {
         erroNaTela.textContent = mensagemDeErro;
     } else {
         mensagemDeErro.textContent = "";
     }
 }
 
 