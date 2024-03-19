const fontSize = document.querySelectorAll('.font-size')
const bookContent = document.querySelector('.book')

fontSize.forEach(function (elements) {
    elements.addEventListener('click', function (event) {
        event.preventDefault()
        fontSize.forEach(function (elements) {
            elements.classList.remove('font-size_active')
            bookContent.classList.remove('font-size_big')
            bookContent.classList.remove('font-size_small')

        })
        if(elements.classList.contains('font-size_active') === false) {
            elements.classList.add('font-size_active')
        }

        if(elements.getAttribute('data-size') === 'big') {
            bookContent.classList.add('font-size_big')
        }else if(elements.getAttribute('data-size') === 'small') {
            bookContent.classList.add('font-size_small')
        }

    })


})