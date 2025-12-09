const colorBtn = document.querySelector('#color-change')
const colorBloc = document.querySelector('#bloc-color')

colorBtn.addEventListener('click', () => {
    colorBloc.style.backgroundColor = "red";
})


const hoverBloc = document.querySelector('#bloc-hover')

hoverBloc.addEventListener('mouseenter', () => {
    hoverBloc.style.width = "50px";
    hoverBloc.style.height = "50px";
})
hoverBloc.addEventListener('mouseleave', () => {
    hoverBloc.style.width = "100px";
    hoverBloc.style.height = "100px";
})

const moveBloc = document.querySelector('#bloc-move')

moveBloc.addEventListener('mouseenter', () => {
    moveBloc.classList.toggle('move')
})