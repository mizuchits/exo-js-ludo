const darkMode = document.querySelector('#darkMode')
const body = document.body;

darkMode.addEventListener('click', () => {
    body.classList.toggle("dark");
})