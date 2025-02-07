
function capturardados(event) {
    event.preventDefault();
    var cpf = document.getElementById("cpf").value
    var senha = document.getElementById("Senha").value
    
    console.log("CPF:", cpf)
    console.log("Senha:", senha);
}