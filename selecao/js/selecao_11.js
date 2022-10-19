var global_senhaValida = "1234" 

function ControllerAcesso {
var senha = document.getElementById("senha").value;

    var restornoValidacao = validaAcesso(senha);

    if (restornoValidacao) {
        window.location.href = "http://google.com.br";
    }
    else {
        saidaTexto("Senha invalida!");
    }

}

function ValidaAcesso(senha = "1234" ) {
    if (senha == global_senhaValida) {
        return "ACESSO PERMITIDO"
    }

    else { 
        return "ACESSO NEGADO"

    }


    function saidaTexto (texto) {
        document. getElementById ("saidaTexto").innerHTML = texto;
        
    }
