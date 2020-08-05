const scrollBtn = document.querySelector('.scroll-to-bottom');

function scrollBottom() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
}

scrollBtn.addEventListener('click', scrollBottom)
