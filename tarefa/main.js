$(document).ready(function() {
    console.log(document.querySelector('form button'));
    console.log(document.getElementById('tarefa-nova'));

    $('form').on('submit', function(e) {
        e.preventDefault();

        const novaTarefa = $('#tarefa-nova').val();
        const novoItem = $('<li></li>');

        $(`<p class="tarefa">${novaTarefa}</p>`).appendTo(novoItem);

        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(500);
        $('#tarefa-nova').val('');
    });

    $('ul').on('click', '.tarefa', function(e) {
        $(this).toggleClass('completed');
    });
});
