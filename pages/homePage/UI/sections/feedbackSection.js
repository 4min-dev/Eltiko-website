document.addEventListener('DOMContentLoaded', () => {
    console.log('hsx')
    const leftTrack = document.querySelector('.feedback__cards__wrapper.to__left')
    const rightTrack = document.querySelector('.feedback__cards__wrapper.to__right')
    const logosLeft = Array.from(leftTrack.children)
    const logosRight = Array.from(rightTrack.children)

    const logosWidthLeft = logosLeft[0].offsetWidth
    const totalWidthLeft = logosLeft.length * (logosWidthLeft + 24)  // 24px — это отступ между карточками

    const logosWidthRight = logosRight[0].offsetWidth
    const totalWidthRight = logosRight.length * (logosWidthRight + 24)  // 24px — это отступ между карточками

    if(logosLeft.length <= 2) {
        Array(...logosLeft, ...logosLeft, ...logosLeft).forEach((logo) => {
            const cloneLeft = logo.cloneNode(true)
            leftTrack.appendChild(cloneLeft)
        })
    } else {
        logosLeft.forEach((logo) => {
            const cloneLeft = logo.cloneNode(true)
            leftTrack.appendChild(cloneLeft)
        })
    }

    if(logosRight.length <= 2) {
        Array(...logosRight, ...logosRight, ...logosRight).forEach((logo) => {
            const cloneRight = logo.cloneNode(true)
            rightTrack.appendChild(cloneRight)
        })
    } else {
        logosRight.forEach((logo) => {
            const cloneRight = logo.cloneNode(true)
            rightTrack.appendChild(cloneRight)
        })
    }

    rightTrack.style.right = `${totalWidthRight}px`;
    let leftPosition = 0
    let rightPosition = 0

    const animateLeftCarousel = () => {
        leftPosition -= 1
        if (Math.abs(leftPosition) >= totalWidthLeft) {
            leftPosition = 0
        }
        leftTrack.style.transform = `translateX(${leftPosition}px)`
        requestAnimationFrame(animateLeftCarousel)
    }

    animateLeftCarousel()

    const animateRightCarousel = () => {
        rightPosition += 1
        if (Math.abs(rightPosition) >= totalWidthRight) {
            rightPosition = 0
            rightTrack.style.right = `${totalWidthRight}px`;
        }
        rightTrack.style.transform = `translateX(${rightPosition}px)`
        requestAnimationFrame(animateRightCarousel)
    }
    
    animateRightCarousel()
})