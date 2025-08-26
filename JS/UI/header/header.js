document.addEventListener("DOMContentLoaded", function () {

    const started__section = document.getElementById('started__section__main__page')

    const headerLogo = document.querySelector('.header__logo')
    const requestBtn = document.getElementById('requestBtn')

    let isStartedSection = true

    gsap.fromTo('.header',
        { y: '-300%', opacity: 0 },
        { y: '0%', opacity: 1, duration: 2, ease: 'power3.out' }
    )

    // Функция для получения ссылки на главную страницу
    function getLinkToHome() {
        const currentUrl = window.location.href
        const url = new URL(currentUrl)
        url.pathname = '/homePage.html'
        return url.toString()
    }

    // Перенаправление на главную страницу
    const logoLink = document.querySelector('.header__logo')
    if (logoLink) {
        logoLink.setAttribute('href', getLinkToHome())
    }

    function hasStartedSection() {
        if (started__section.getClientRects()[0].bottom <= 0) {
            isStartedSection = false
        } else {
            isStartedSection = true
        }

        if (isStartedSection) {
            headerLogo.classList.remove('blue')
            headerLogo.classList.add('white')
            requestBtn.style.display = 'none'
            requestBtn.addEventListener('click', function () {
                if (typeof sendRequestPopupHandler === 'function') {
                    sendRequestPopupHandler()
                }
            })
        } else {
            headerLogo.classList.remove('white')
            headerLogo.classList.add('blue')
            requestBtn.style.display = 'block'
        }
    }

    if(started__section) {
        document.addEventListener('scroll', hasStartedSection)
    }
})