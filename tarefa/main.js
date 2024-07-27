// Obtém o formulário e os campos de entrada
const form = document.getElementById('form-transferencia');
const campoB = document.getElementById('campo-b');
const campoA = document.getElementById('campo-a');

// Função para comparar se o valor de campoB é maior ou igual ao valor de campoA
function comparaAeB(valorB, valorA) {
    return Number(valorB) >= Number(valorA);  // Converte os valores para números e compara
}

// Adiciona um ouvinte de evento para o envio do formulário
form.addEventListener('submit', function(e){
    e.preventDefault();  // Impede o envio padrão do formulário, que recarregaria a página

    // Obtém os valores dos campos e os converte para números
    const valorA = Number(campoA.value);
    const valorB = Number(campoB.value);
    // Verifica se o valor de campoB é suficiente para a operação
    if (comparaAeB(valorB, valorA)) {
        campoA.value = '';  // Limpa o campo A após a operação bem-sucedida
        campoB.value = valorB - valorA;  // Subtrai o valor de campoA do valor de campoB e atualiza o campoB
        document.querySelector('.fail-message').style.display = 'none';  // Oculta a mensagem de erro
        campoB.style.border = '';  // Remove qualquer estilo de borda de erro
        const mensagemSucesso = `A tranferência foi enviada com sucesso.<br/>Seu novo saldo é de: <b>${valorB - valorA}</b>`;  // Define a mensagem de sucesso a ser exibida

        // Atualiza e exibe a mensagem de sucesso
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;  // Define a mensagem de sucesso
        containerMensagemSucesso.style.display = 'block';  // Exibe a mensagem de sucesso
    } else {
        // Exibe a mensagem de erro e atualiza o estilo do campoB
        document.querySelector('.fail-message').style.display = 'block';  // Exibe a mensagem de erro
        campoB.style.border = '1px solid #CA424F';  // Adiciona uma borda vermelha ao campo B para indicar erro
    }
});

// Função para validar o formulário e atualizar a mensagem de erro e estilos
function validarFormulario() {
    // Obtém os valores dos campos e os converte para números
    const valorA = Number(campoA.value);
    const valorB = Number(campoB.value);
    
    // Verifica se o valor de campoB é suficiente para a operação
    const formValido = comparaAeB(valorB, valorA);

    // Atualiza a mensagem de erro e o estilo de borda com base na validade do formulário
    if (!formValido) {
        // Exibe a mensagem de erro e atualiza o estilo do campoB
        document.querySelector('.fail-message').style.display = 'block';  // Exibe a mensagem de erro
        campoB.classList.add('error');  // Adiciona uma classe de erro ao campo B
        campoB.style.border = '1px solid #CA424F';  // Adiciona uma borda vermelha ao campo B
    } else {
        // Oculta a mensagem de erro e remove o estilo de borda de erro
        document.querySelector('.fail-message').style.display = 'none';  // Oculta a mensagem de erro
        campoB.classList.remove('error');  // Remove a classe de erro do campo B
        campoB.style.border = '';  // Remove qualquer estilo de borda de erro
    }
}

// Adiciona ouvintes de evento para verificar a validade dos campos enquanto o usuário digita
campoA.addEventListener('keyup', validarFormulario);  // Verifica a validade do formulário quando o usuário digita em campoA
campoB.addEventListener('keyup', validarFormulario);  // Verifica a validade do formulário quando o usuário digita em campoB
