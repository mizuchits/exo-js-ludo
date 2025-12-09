const colorR = document.querySelector('#colorR')
const colorG = document.querySelector('#colorG')
const colorB = document.querySelector('#colorB')
const padding = document.querySelector('#padding')
const height = document.querySelector('#height')
const width = document.querySelector('#width')
const radius = document.querySelector('#radius')
const rotate = document.querySelector('#rotate')
const result = document.querySelector('#result')
const slideBar = document.querySelector('#load')


slideBar.addEventListener('input', () => {
    result.style.backgroundColor = "rgb(" + colorR.value + ", " + colorG.value + ", " + colorB.value + ")"
    result.style.padding = padding.value + "px"
    result.style.height = height.value + "px"
    result.style.width = width.value + "px"
    result.style.borderRadius = radius.value + "px"
    result.style.transform = "rotate(" + rotate.value + "deg)"
})

