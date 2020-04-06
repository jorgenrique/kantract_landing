const buttons = document.querySelectorAll('.donate'),
    modal = document.querySelector("#modalDonate");
// form = document.querySelector("#form");


const closeModal = document.querySelector("#closeModal");

buttons.forEach((e) => {
    e.onclick = () => {
        modal.style.top = "0";
        modal.style.zIndex = "1";
    }
});

closeModal.addEventListener('click', () => {
    modal.style.top = "-120%";
    modal.style.zIndex = "-1";
});

// form.onsubmit = (el) => {
//     // el.preventDefault;
//     console.log("Form:", el);
// }
