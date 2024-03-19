const reveal = document.querySelectorAll('.reveal')


window.addEventListener('scroll', function () {
    reveal.forEach(function (elements) {
        // console.log(elements.getBoundingClientRect().top)
        console.log(elements.getBoundingClientRect().bottom)
        console.log(window.innerHeight)

        if(elements.getBoundingClientRect().top < window.innerHeight && elements.getBoundingClientRect().top >= 0) {
            elements.classList.add('reveal_active')
        }else  {
            elements.classList.remove('reveal_active')
        }
    })
})

