import { examplesData } from "../../../../static/assets/data/examplesData.js"

// Функция для рендеринга слайдов
function renderSlides() {
    const swiper__wrapper = document.querySelector('.swiper__wrapper')

    examplesData.forEach((slide, index) => {
        const slideElement = document.createElement('swiper-slide')
        slideElement.classList.add('example__card')

        const img = document.createElement('img')
        img.classList.add('example__image')
        img.src = slide.image
        img.alt = `Example ${index + 1}`

        const link = document.createElement('a')

        link.href = '/catalog'
        link.classList.add('aqua__fade__btn', 'blue__btn', 'dekstop', 'anim__btn')

        link.innerHTML = `
            <span class="btn__text">
                Открыть каталог
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path d="M1.5 1.75H11.5M11.5 1.75V11.75M11.5 1.75L1.5 11.75" stroke="#0062F0" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </span>

            <div class="btn__link__svg">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path d="M1.5 1.75H11.5M11.5 1.75V11.75M11.5 1.75L1.5 11.75" stroke="#0062F0" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        `

        slideElement.appendChild(img)
        slideElement.appendChild(link)
        swiper__wrapper.appendChild(slideElement)
    })
}

// Запуск функций при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    renderSlides()
})
