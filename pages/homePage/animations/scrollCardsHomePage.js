import isMobileDevice from "../../../static/assets/isMobileDevice.js"
import { updateCatalogCards } from "../UI/cards/updateCatalog.js"
import updateServiceCards from "../UI/cards/updateServices.js"

function blockScroll() {
    window.addEventListener('wheel', preventDefault, { passive: false })
    window.addEventListener('touchmove', preventDefault, { passive: false })
  }
  
  function unblockScroll() {
    window.removeEventListener('wheel', preventDefault)
    window.removeEventListener('touchmove', preventDefault)
  }
  
  function preventDefault(event) {
    event.preventDefault()
  }

document.addEventListener("DOMContentLoaded", function () {
    let activeServiceIndex = 1
    let activeCatalogIndex = 1
    
    const serviceCardsContainer = document.querySelector('.service__cards__container')
    const catalogCardsContainer = document.querySelector('.catalog__items__container')

    const servicesData = document.querySelectorAll('.service__card')
    const catalogData = document.querySelectorAll('.catalog__item__card')

    let lastTouchY
    let lastTouchTime = 0 // Для предотвращения многократных срабатываний касания

    let isServiceScrolling = false
    let isCatalogScrolling = false

    let isServiceContainerHovered = false
    let isCatalogContainerHovered = false

    updateServiceCards(activeServiceIndex)
    updateCatalogCards(activeCatalogIndex)

    // Функция обработки прокрутки
    function handleScroll(event) {
        let deltaY = 0
        const now = Date.now()
        const isTouchEvent = event instanceof TouchEvent

        if (event instanceof WheelEvent) {
            deltaY = event.deltaY
        } else if (event instanceof TouchEvent) {
            const touch = event.touches[0]
            deltaY = lastTouchY ? lastTouchY - touch.clientY : 0
            lastTouchY = touch.clientY
        }

        // Игнорируем события касания, если они происходят слишком быстро
        if (isTouchEvent && (now - lastTouchTime) < 300) {
            return
        }

        lastTouchTime = now

        const services__section = document.getElementById('services__section')
        const rect__services = services__section.getBoundingClientRect()

        if (isServiceScrolling) return

        function getServiceSectionViewport() {
            if(isMobileDevice()) {
                return (rect__services.top <= 400) && rect__services.bottom >= rect__services.height
            } else {
                return (rect__services.top <= rect__services.height) && (rect__services.bottom >= rect__services.height) && isServiceContainerHovered
            }
        }

        function getCatalogSectionViewPort() {
            if(isMobileDevice()) {
                return catalog__section.getBoundingClientRect().top <= 400 && catalog__section.getBoundingClientRect().bottom >= 800
            } else {
                return catalog__section.getBoundingClientRect().top <= 400 && catalog__section.getBoundingClientRect().bottom >= 800 && isCatalogContainerHovered
            }
        }

        if (getServiceSectionViewport()) {
            if (deltaY > 0 && activeServiceIndex < servicesData.length) {
                setIsServiceScrolling(true)
                setActiveServiceIndex((prev) => prev + 1)
                setTimeout(() => setIsServiceScrolling(false), 500)
                updateServiceCards(activeServiceIndex)
            } else if (deltaY < 0 && activeServiceIndex > 1) {
                setIsServiceScrolling(true)
                setActiveServiceIndex((prev) => prev - 1)
                setTimeout(() => setIsServiceScrolling(false), 500)
                updateServiceCards(activeServiceIndex)
            } else {  
                document.body.style.overflowY = 'auto'
                unblockScroll()
            }

        } else if (getCatalogSectionViewPort()) {

            if (isCatalogScrolling) return

            const { bottom, top } = catalog__section.getBoundingClientRect()
            const windowHeight = window.innerHeight


            function checkIsMobile() {
                if (isMobileDevice()) {
                    return top <= 200 && bottom >= 200
                } else {
                    const isSectionVisibleToBottom = top < windowHeight && bottom > 0
                    const isSectionVisibleToUp = top < windowHeight && bottom > 800

                    if (deltaY > 0) {
                        return isSectionVisibleToBottom
                    } else if (deltaY < 0) {
                        return isSectionVisibleToUp
                    }
                }
            }

            if (checkIsMobile()) {
                if (deltaY > 0 && activeCatalogIndex < catalogData.length) {
                    setIsCatalogScrolling(true)
                    setActiveCatalogIndex((prev) => prev + 1)
                    setTimeout(() => setIsCatalogScrolling(false), 500)
                    updateCatalogCards(activeCatalogIndex)
                } else if (deltaY < 0 && activeCatalogIndex > 1) {
                    setIsCatalogScrolling(true)
                    setActiveCatalogIndex((prev) => prev - 1)
                    setTimeout(() => setIsCatalogScrolling(false), 500)
                    updateCatalogCards(activeCatalogIndex)
                } else {
                    document.body.style.overflowY = 'auto'
                    unblockScroll()
                }

            }

            function setActiveCatalogIndex(fn) {
                document.body.style.overflowY = 'hidden'
                blockScroll()
                activeCatalogIndex = fn(activeCatalogIndex)
            }

            // Функция для блокировки прокрутки во время смены индекса
            function setIsCatalogScrolling(value) {
                isCatalogScrolling = value
            }
        } else {
            document.body.style.overflowY = 'auto'
            unblockScroll()
        }

    }
    // Функция для смены индекса услуги
    function setActiveServiceIndex(fn) {
        document.body.style.overflowY = 'hidden'
        blockScroll()
        activeServiceIndex = fn(activeServiceIndex)
    }

    // Функция для блокировки прокрутки во время смены индекса
    function setIsServiceScrolling(value) {
        isServiceScrolling = value
    }

    serviceCardsContainer.addEventListener('mouseenter', () => {
        blockScroll()
        isServiceContainerHovered = true
    })

    serviceCardsContainer.addEventListener('mouseleave', () => {
        unblockScroll()
        isServiceContainerHovered = false
    })

    catalogCardsContainer.addEventListener('mouseenter', () => {
        blockScroll()
        isCatalogContainerHovered = true
    })

    catalogCardsContainer.addEventListener('mouseleave', () => {
        unblockScroll()
        isCatalogContainerHovered = false
    })

    // Подключение событий для скроллинга
    window.addEventListener('wheel', handleScroll, { passive: false })
    window.addEventListener('touchstart', (event) => {
        if (event.touches.length > 0) {
            lastTouchY = event.touches[0].clientY
        }
    })
    window.addEventListener('touchmove', handleScroll, { passive: false })
})