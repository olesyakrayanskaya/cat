const userWidth = window.innerWidth
const grassItemWidth = 20
const numbGrassItems = Math.ceil(userWidth / grassItemWidth)
const grass = document.getElementsByClassName('grass')[0]

function drawGrass() {
    for (let i = 0; i <= numbGrassItems; i++) {

        let div = document.createElement('div')
        div.className = 'grass__item'
        grass.appendChild(div)

    }
}

drawGrass()

document.addEventListener('resize', drawGrass())

