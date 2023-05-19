const btnDark = document.querySelector('.btn-dark-mode');

btnDark.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if(document.body.className === 'dark-mode') {
        btnDark.innerHTML = /*html*/ `
        <i class="fa-regular fa-sun"></i>
        Ligth Mode
        `;
    } else {
        btnDark.innerHTML = /*html*/ `
        <i class="fa-regular fa-moon"></i>
        Dark Mode
        `;
    }
});