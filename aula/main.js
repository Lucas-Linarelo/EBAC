const form = document.getElementById('form-deposito');
const nomeBeneficiario = document.getElementById('nome-beneficiario');
let formValido = false;

function validaNome(nomeCompleto){
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length>=2;
}


form.addEventListener('submit', function(e){
    e.preventDefault();

    const numeroContaBeneficiario = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito');
    const mensagemEnvio = document.getElementById('mensagem-envio');
    const mensagemSucesso = `Montante de: <b>${valorDeposito.value}</b> depositado para o cliente: <b>${nomeBeneficiario.value}</b> - conta: <b>${numeroContaBeneficiario.value}</b>`;

    formValido = validaNome(nomeBeneficiario.value)
    if(formValido){
        
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML=mensagemSucesso;
        containerMensagemSucesso.style.display='block';

        nomeBeneficiario.value = '';
        numeroContaBeneficiario.value = '';
        valorDeposito.value = '';
        mensagemEnvio.value = '';
    }else{
        document.querySelector('.fail-message').style.display = 'block';
        nomeBeneficiario.style.border = '1px solid #CA424F'
    }
})

nomeBeneficiario.addEventListener('keyup', function(e){
    formValido = validaNome(e.target.value);

    if(!formValido){
        document.querySelector('.fail-message').style.display = 'block';
        nomeBeneficiario.classList.add('error');
    }else{
        nomeBeneficiario.classList.remove('error');
        nomeBeneficiario.style.border = '';
    }
})
