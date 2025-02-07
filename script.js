function capturardados(event) {
    event.preventDefault();

    const cpfInput = document.getElementById("cpf");
    const senhaInput = document.getElementById("Senha");

    if (!cpfInput) {
        console.error("Error: CPF input element not found.");
        return;
    }
    if (!senhaInput) {
      console.error("Error: Senha input element not found.");
      return;
    }
    const cpf = cpfInput.value;
    const senha = senhaInput.value;

    console.log("CPF:", cpf);
    console.log("Senha:", senha);
}