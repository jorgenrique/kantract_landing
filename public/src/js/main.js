
const   buttons = document.querySelectorAll('.sign_up_btn'),
        modal = document.querySelector(".sign_up"),
        closeModal = document.querySelector(".close_modal");

function modalOpen () { modal.classList.add('active'); }

buttons.forEach(button => button.addEventListener('click', modalOpen))
closeModal.addEventListener('click', () => { modal.classList.remove('active') });
