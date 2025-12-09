const spaceShip = document.querySelector('.spaceship')

let topPosition = 0;
let leftPosition = 0;

window.addEventListener('keydown', (event) => {
    if (event.key === 's') {
        topPosition += 5;
        spaceShip.style.top = topPosition + "px";
    }
    if (event.key === 'z') {
        topPosition -= 5;
        spaceShip.style.top = topPosition + "px";
    }
    if (event.key === 'd') {
        leftPosition += 5;
        spaceShip.style.left = leftPosition + "px";
    }
    if (event.key === 'q') {
        leftPosition -= 5;
        spaceShip.style.left = leftPosition + "px";
    }
})