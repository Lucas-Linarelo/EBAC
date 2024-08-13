$(document).ready(function(){
    console.log(document.querySelector('header button'))
    console.log($('#button-cancel'))

    // document.querySelector('header button').addEventListener('click', function(){
    //     alert("Expandir form")
    // })
    $('header button').click(function(){
        $('form').slideDown();
    })
    $('#button-cancel').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style="display: none;"></li>');

        $(`<img src="${enderecoDaNovaImagem}"/>`).appendTo(novoItem);
        $(`
            <div class="overlay-image-link">
                <a href="${enderecoDaNovaImagem}" target="_blank">
                    ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);

        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(500);
        $('#endereco-imagem-nova').val('');

    })
})