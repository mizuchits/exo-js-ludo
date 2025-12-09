const spaceShip = document.querySelector('.spaceship')

let topPosition = 0;
let leftPosition = 0;

window.addEventListener('keydown', (event) => {
    if (event.key === 's') {
        topPosition += 10;
        spaceShip.style.top = topPosition + "px";
    }
    if (event.key === 'z') {
        topPosition -= 10;
        spaceShip.style.top = topPosition + "px";
    }
    if (event.key === 'd') {
        leftPosition += 10;
        spaceShip.style.left = leftPosition + "px";
    }
    if (event.key === 'q') {
        leftPosition -= 10;
        spaceShip.style.left = leftPosition + "px";
    }
})