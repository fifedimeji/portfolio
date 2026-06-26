const slides = document.querySelectorAll('.slide')
const imageSlides = document.querySelectorAll('.image-slide')
const auto = true
const intervalTime = 5000
let slideInterval

const nextSlide = () => {
    const current = document.querySelector('.slide.current') // GET CURRENT TEXT SLIDE
    const currentImage = document.querySelector('.image-slide.current') // GET CURRENT IMAGE SLIDE
 
    current.classList.remove('current') // REMOVE CURRENT CLASS FROM TEXT
    currentImage.classList.remove('current') // REMOVE CURRENT CLASS FROM IMAGE
 
    // CHECK FOR NEXT SLIDE
    if(current.nextElementSibling) {
    // ADD CURRENT TO NEXT SIBLING
    current.nextElementSibling.classList.add('current')
    } else {
    // ADD CURRENT TO START (now slides[0] will work)
    slides[0].classList.add('current')
    }
 
    // CHECK FOR NEXT IMAGE SLIDE
    if(currentImage.nextElementSibling) {
    // ADD CURRENT TO NEXT IMAGE SIBLING
    currentImage.nextElementSibling.classList.add('current')
    } else {
    // ADD CURRENT TO START (now imageSlides[0] will work)
    imageSlides[0].classList.add('current')
    }
}

if(auto) {
 // RUN NEXT SLIDE AT INTERVAL
 slideInterval = setInterval(nextSlide, intervalTime)
}