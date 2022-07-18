const slides = document.querySelectorAll('.slide')
const next = document.querySelector('#next')
const prev = document.querySelector('#prev')

const nextSlide = () => {
    const current = document.querySelector('.slide.current')
    current.classList.remove('current')
    if (current.nextElementSibling) {
        current.nextElementSibling.classList.add('current')
    } else {
        slides[0].classList.add('current')
    }
}
const prevSlide = () => {
    const current = document.querySelector('.slide.current')
    current.classList.remove('current')
    if (current.previousElementSibling) {
        current.previousElementSibling.classList.add('current')
    } else {
        slides[slides.length-1].classList.add('current')
    }
}

// const auto = false
const auto = true
const intervalTime = 5000
let slideInterval
if (auto) {
    slideInterval = setInterval(nextSlide, intervalTime)
}

next.addEventListener('click', () => {
    nextSlide()
    if (auto) {
        clearInterval(slideInterval)
        slideInterval = setInterval(nextSlide, intervalTime)
    }
})
prev.addEventListener('click', () => {
    prevSlide()
    if (auto) {
        clearInterval(slideInterval)
        slideInterval = setInterval(nextSlide, intervalTime)
    }
})