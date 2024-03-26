const rotatorCase = Array.from(document.querySelectorAll('.rotator__case'))

const adsRotator = function () {
    let index = rotatorCase.indexOf(document.querySelector('.rotator__case_active'))

    rotatorCase[index].classList.remove('rotator__case_active')
    index++

    if(index > rotatorCase.length-1) {
        index = 0
    }

    rotatorCase[index].classList.add('rotator__case_active')
}

setInterval(adsRotator, 1000)

