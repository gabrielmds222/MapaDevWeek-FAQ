const itensPerguntasERespostas = document.querySelectorAll('.item');

itensPerguntasERespostas.forEach(function(item) {
    item.addEventListener('click', function() {

        const questionIsClicked = item.classList.contains('active');

        itensPerguntasERespostas.forEach(function(item) {
            item.classList.remove('active');
        })

        if(!questionIsClicked) {
            item.classList.add('active');
        }
        else {
            item.classList.remove('active');
        }
    })
})