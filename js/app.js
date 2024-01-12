const frm = document.querySelector("form");
const respNome = document.querySelector("span");
const respLista = document.querySelector("pre");

const pacientes = [];

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = frm.inPaciente.value;
    pacientes.push(nome);

    let lista = ""; // String para concatenar nomes de pacientes
    for(let i = 0; i < pacientes.length; i++){
        lista += `${i + 1}. ${pacientes[i]}\n`;
    }
    respLista.innerText = lista // exibe a lista de pacientes
    frm.inPaciente.value = ""; // LImpa o conteúdo do campo de formulário
    frm.inPaciente.focus();
})

// Adiciona um ouvinte para o click do botão urgência
frm.btUrgencia.addEventListener("click", () => {
    // Verifica se as validações do form estão ok
    if(!frm.checkValidity()) {
        alert("Informe o nome do paciente a ser atendido em caráter de urgência");
        frm.inPaciente.focus();
        return    // Retorna ao form
    }

    const nome = frm.inPaciente.value;
    pacientes.unshift(nome);  // Adiciona o paciente no início do vetor
    let lista = "";

    // ForEach aplicado sobre o array pacientes
    pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`));
    respLista.innerText = lista;
    frm.inPaciente.value = "";
    frm.inPaciente.focus();
})

frm.btAtender.addEventListener("click", () => {
    if(pacientes.length == 0) {
        alert("Não há pacientes na lista de espera");
        frm.inPaciente.focus();
        return
    }

    const atender = pacientes.shift(); // Remove do início da fila (e obtém nome)
    respNome.innerText = atender; // Exibe o nome do paciente em atendimento
    let lista = "";
    pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`))
    respLista.innerText = lista // Exibe a lista de pacientes
})