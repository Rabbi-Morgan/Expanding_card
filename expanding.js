
var cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        removeClass();
        card.classList.add('display')

    })
});


// remove display class first 

function removeClass () {
    cards.forEach(card => {
        card.classList.remove('display')
    })
}

