import { catalogData } from '../../../../static/assets/data/catalogData.js'
import getCard from "../../assets/getCard.js"

// Функция для создания карточки
function createCatalogCard(cardData, index) {
    const card = document.createElement('div')
    card.classList.add('catalog__card')
    card.setAttribute('data-index', index)
    card.addEventListener('click', () => getCard(cardData, index))

    // Создаем блок превью
    const preview = document.createElement('div')
    preview.classList.add('catalog__card__preview')
    cardData.images.forEach((image, i) => {
        const img = document.createElement('img')
        img.src = image
        img.alt = 'Apartment preview'
        img.classList.add('catalog__card__image')
        img.style.opacity = i === 0 ? 1 : 0  // Первая картинка активна по умолчанию
        preview.appendChild(img)
    })
    card.appendChild(preview)

    // Кнопка открытия карточки
    const button = document.createElement('button')
    button.classList.add('show__card__btn', 'blue__btn', 'anim__btn')
    button.innerHTML = '<span class="btn__text">Открыть</span>'
    card.appendChild(button)

    // Заголовок и информация о карточке
    const heading = document.createElement('div')
    heading.classList.add('catalog__card__heading')

    const scrollbarWrapper = document.createElement('div')
    scrollbarWrapper.classList.add('catalog__card__scrollbar__indicator__wrapper')
    const scrollbarIndicator = document.createElement('div')
    scrollbarIndicator.classList.add('catalog__card__scrollbar__indicator')
    scrollbarIndicator.setAttribute('data-index', index)  // Добавляем индекс для идентификации
    scrollbarWrapper.appendChild(scrollbarIndicator)
    heading.appendChild(scrollbarWrapper)

    const geoTag = document.createElement('div')
    geoTag.classList.add('catalog__card__tag', 'geo__tag')
    geoTag.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 15 18" fill="none">
<path d="M1.37421 7.6825C1.37421 11.9278 5.08812 15.4386 6.732 16.7846C6.96726 16.9772 7.0863 17.0747 7.26183 17.1241C7.3985 17.1626 7.59965 17.1626 7.73633 17.1241C7.91218 17.0746 8.03039 16.9781 8.26654 16.7847C9.91042 15.4387 13.6241 11.9282 13.6241 7.68288C13.6241 6.07628 12.9789 4.53529 11.8302 3.39926C10.6815 2.26322 9.12373 1.625 7.49928 1.625C5.87483 1.625 4.31684 2.26332 3.16818 3.39935C2.01952 4.53539 1.37421 6.0759 1.37421 7.6825Z" stroke="#FDFFFD" stroke-width="1.496" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.74921 6.875C5.74921 7.8415 6.53271 8.625 7.49921 8.625C8.4657 8.625 9.24921 7.8415 9.24921 6.875C9.24921 5.9085 8.4657 5.125 7.49921 5.125C6.53271 5.125 5.74921 5.9085 5.74921 6.875Z" stroke="#FDFFFD" stroke-width="1.496" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        <span class="catalog__card__geo__text">${cardData.location}</span>
    `
    heading.appendChild(geoTag)

    const sizeTag = document.createElement('div')
    sizeTag.classList.add('catalog__card__tag', 'size__tag')
    sizeTag.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
<path d="M1.875 13.6835L13.6875 2.27345M4.5 15C2.567 15 1 13.4282 1 11.4892V4.51078C1 2.55508 2.59315 0.97641 4.5427 1.00027L11.5427 1.08593C13.4589 1.10938 15 2.6742 15 4.59644V11.4892C15 13.4282 13.433 15 11.5 15H4.5Z" stroke="#FDFFFD" stroke-width="1.584"/>
</svg>
        <span class="catalog__card__size__amount__text">${cardData.squareMeters}м2</span>
    `
    heading.appendChild(sizeTag)

    card.appendChild(heading)

    // Название карточки
    const name = document.createElement('div')
    name.classList.add('catalog__card__name')
    name.innerHTML = `<span class="catalog__card__name__text">${cardData.title}</span>`
    card.appendChild(name)

    return card
}

// Функция для обновления индикатора полосы прокрутки для конкретной карточки
function updateScrollbar(card, activeImageIndex, images) {
    const scrollbarIndicator = card.querySelector(`.catalog__card__scrollbar__indicator`)
    if (scrollbarIndicator) {
        scrollbarIndicator.style.width = `${(activeImageIndex + 1) / images.length * 100}%`
    }
}

// Обработчик события колесика мыши
function handleMouseWheel(event, card, images) {
    event.preventDefault()

    const imagesElements = card.querySelectorAll('.catalog__card__image')
    let activeImageIndex = Array.from(imagesElements).findIndex(img => img.style.opacity == 1)

    console.log(`DelatY - ${event.deltaY}`)

    // Фикс для того, чтобы обработка прокрутки была одинаковой на разных устройствах
    const delta = Math.sign(event.deltaY) * Math.min(Math.abs(event.deltaY), 100)

    // Перелистывание картинок
    if (delta > 0) {
        activeImageIndex = (activeImageIndex + 1) % images.length
    } else {
        activeImageIndex = (activeImageIndex - 1 + images.length) % images.length
    }

    imagesElements.forEach((img, index) => {
        img.style.opacity = index === activeImageIndex ? 1 : 0
    })

    updateScrollbar(card, activeImageIndex, images)
}

// Рендерим все карточки на странице
const catalogCardsContainer = document.getElementById('catalogCardsContainer')
catalogData.forEach((cardData, index) => {
    const card = createCatalogCard(cardData, index)
    catalogCardsContainer.appendChild(card)

    // Обновляем индикатор полосы прокрутки после рендера
    updateScrollbar(card, 0, cardData.images)  // По умолчанию активная картинка - первая (индекс 0)

    // Добавляем обработчик события прокрутки для каждой карточки
    card.addEventListener('wheel', (event) => handleMouseWheel(event, card, cardData.images), { passive: false })

    function filterPopupHandler() {
        
        const filter__container = document.getElementById('filterPopupContainer')
        filter__container.classList.add('not-closing')

        let escapeKeyHandler
    
        function closeFilterPopup() {
            filter__container.classList.remove('not-closing')
            filter__container.classList.add('closing')
    
            if (escapeKeyHandler) {
                document.removeEventListener('keydown', escapeKeyHandler)
            }
    
            setTimeout(() => {
                filter__container.classList.remove('closing')
                document.body.style.overflowY = 'auto'
            }, 700)
        }
    
        escapeKeyHandler = (event) => {
            if (event.key.toLowerCase() === 'escape' && filter__container.classList.contains('not-closing')) {
                closeFilterPopup()
            }
        }
    
        document.addEventListener('keydown', escapeKeyHandler)
    
        document.body.style.overflowY = 'hidden'
    }

    const filterPopupButton = document.querySelectorAll('.catalog__filter__btn')
    
    filterPopupButton.forEach((filter) => {
        filter.addEventListener('click', filterPopupHandler)
    })
})
