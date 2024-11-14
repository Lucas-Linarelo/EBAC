document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('form-sorteio').addEventListener('submit', function(evento){

        evento.preventDefault();

        let maxnum = document.getElementById('max-num').value;
        maxnum=parseInt(maxnum);
        let rndnum = Math.random()*maxnum+0.5;
        rndnum=Math.round(rndnum);
        
        document.getElementById('resultado-valor').innerText = rndnum;

        document.querySelector('.resultado').style.display='block';

    })

})