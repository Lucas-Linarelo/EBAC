const form = document.getElementById('form-deposito');
const nomeBeneficiado = document.getElementById('nome-beneficiario');
let formEValido = false;

function validaNome(nomeCompleto){
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >=2;
}

form.addEventListener('submit',function(e){
    e.preventDefault();

    const numeroContaBeneficiario = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito');
    const mensagemEnvio = document.getElementById('mensagem-envio');
    const mensagemSucesso = `Montante de: <b>${valorDeposito.value}</b> depositado para o cliente: <b>${nomeBeneficiado.value}</b>  - conta: <b>${numeroContaBeneficiario.value}</b>.`;


    formEValido = validaNome(nomeBeneficiado.value)
    if(formEValido){
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        nomeBeneficiado.value='';
        valorDeposito.value='';
        numeroContaBeneficiario.value='';
        mensagemEnvio.value='';

    } else{
        nomeBeneficiado.style.border = '1px solid #CA424F';
        document.querySelector('.error-message').style.display='block';
    }

})

nomeBeneficiado.addEventListener('keyup', function(e){
    formEValido = validaNome(e.target.value);
    if(!formEValido){
        nomeBeneficiado.classList.add('error')
        // nomeBeneficiado.style.border = '1px solid #CA424F';
        document.querySelector('.error-message').style.display='block';
    }else{
        nomeBeneficiado.classList.remove('error')
        document.querySelector('.error-message').style.display='none';
    }
});