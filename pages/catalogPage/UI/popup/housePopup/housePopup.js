export default function housePopup(selectedCard, activeCardIndex) {

    // Переменная для хранения обработчика события
    let escapeKeyHandler

    function closePopup(event) {
        document.getElementById('housePopupContainer').classList.remove('not-closing')
        document.getElementById('housePopupContainer').classList.add('closing')

        // Удаляем обработчик клавиши escape при закрытии
        if (escapeKeyHandler) {
            document.removeEventListener('keydown', escapeKeyHandler)
        }

        setTimeout(() => {
            document.getElementById('housePopupContainer').classList.remove('closing')
            document.body.style.overflowY = 'auto'
        }, 700)
    }

    const recommendations = [{ ...selectedCard }]
    document.getElementById('housePopupContainer').classList.add('not-closing')

    // Добавление обработчика клавиши Escape только один раз
    escapeKeyHandler = (event) => {
        if (event.key.toLowerCase() === 'escape') {
            closePopup()
        } else {
            console.log(40)
        }
    }

    if (document.getElementById('housePopupContainer').classList.contains('not-closing')) {
        document.addEventListener('keydown', escapeKeyHandler)
    } else {
        document.removeEventListener('keydown', escapeKeyHandler)
    }

    // Наполнение модалки данными
    const houseName = document.getElementById('houseName')
    const houseDescription = document.getElementById('houseDescription')
    const houseLocation = document.getElementById('houseLocation')
    const houseSize = document.getElementById('houseSize')
    const houseType = document.getElementById('houseType')
    const recommendationCardsContainer = document.getElementById('recommendationCardsContainer')
    const imagesContainer = document.getElementById('imageCard') // Контейнер для всех изображений
    const paginationIndicator = document.getElementById('paginationIndicator')
    const prevBtn = document.getElementById('prevBtn')
    const nextBtn = document.getElementById('nextBtn')

    // Заполнение основными данными
    houseName.textContent = selectedCard.title
    houseDescription.textContent = selectedCard.description
    houseLocation.textContent = selectedCard.location
    houseSize.textContent = `${selectedCard.squareMeters} м²`
    houseType.textContent = selectedCard.type

    // Генерация рекомендаций
    recommendations.forEach(recommendation => {
        const recommendationCard = document.createElement('div')
        recommendationCard.classList.add('recommendation__card')

        recommendationCard.innerHTML = `
            <img src="${recommendation.image}" alt="${recommendation.title}" />
            <div class="recommendation__card__content">
                <div class="recommendation__card__text__container">
                    <div class="recommendation__card__title__container">
                        <span class="recommendation__card__title">${recommendation.title}</span>
                        <span class="recommendation__card__type">${recommendation.type}</span>
                    </div>

                    <div class="recommendation__card__description">${recommendation.description}</div>
                    
                </div>

                <div class="recommendation__card__tags">
                            <span class="recommendation__card__tag geo__tag">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="21" viewBox="0 0 17 21" fill="none">
                                <path d="M1.25 8.42285C1.25 13.2747 5.49448 17.2869 7.37319 18.8252C7.64206 19.0454 7.77811 19.1568 7.97871 19.2132C8.13491 19.2572 8.3648 19.2572 8.521 19.2132C8.72197 19.1567 8.85707 19.0464 9.12695 18.8254C11.0057 17.2871 15.2499 13.2751 15.2499 8.4233C15.2499 6.58718 14.5125 4.82605 13.1997 3.52772C11.887 2.22939 10.1066 1.5 8.25008 1.5C6.39357 1.5 4.61301 2.2295 3.30025 3.52783C1.9875 4.82616 1.25 6.58674 1.25 8.42285Z" stroke="#8EA0B2" strokeWidth="1.575" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6.25 7.5C6.25 8.60457 7.14543 9.5 8.25 9.5C9.35457 9.5 10.25 8.60457 10.25 7.5C10.25 6.39543 9.35457 5.5 8.25 5.5C7.14543 5.5 6.25 6.39543 6.25 7.5Z" stroke="#8EA0B2" strokeWidth="1.575" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>${recommendation.location}</span>
                            <span class="recommendation__card__tag size__tag"> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                                <path d="M2.22949 15.8939L15.5186 3.05763M5.18262 17.375C3.008 17.375 1.24512 15.6067 1.24512 13.4254V5.57462C1.24512 3.37447 3.03741 1.59846 5.23065 1.6253L13.1057 1.72167C15.2614 1.74805 16.9951 3.50847 16.9951 5.67099V13.4254C16.9951 15.6067 15.2322 17.375 13.0576 17.375H5.18262Z" stroke="#8EA0B2" strokeWidth="1.575" />
                             </svg>${recommendation.squareMeters} м²</span>
                    </div>
            </div>
        `

        recommendationCardsContainer.appendChild(recommendationCard)
    })

    // Логика для отображения всех изображений
    let activeImageIndex = 0

    function updateImages() {
        const images = imagesContainer.querySelectorAll('.popup__image')

        // Плавная анимация переключения изображений
        images.forEach((img, index) => {
            if (index === activeImageIndex) {
                img.style.opacity = 1
                img.style.transition = 'opacity 0.5s ease-in-out'  // Анимация для текущего изображения
            } else {
                img.style.opacity = 0
                img.style.transition = 'opacity 0.5s ease-in-out'  // Анимация для других изображений
            }
        })

        // Обновляем индикатор пагинации
        paginationIndicator.style.width = `${(activeImageIndex + 1) / selectedCard.images.length * 100}%`

        // Обновляем состояние кнопок
        updatePaginationButtons()
    }

    // Функция для обновления состояния кнопок пагинации
    function updatePaginationButtons() {
        // Отключаем кнопку "Prev", если это первое изображение
        prevBtn.disabled = activeImageIndex === 0

        // Отключаем кнопку "Next", если это последнее изображение
        nextBtn.disabled = activeImageIndex === selectedCard.images.length - 1
    }

    // Создаем изображения для попапа
    selectedCard.images.forEach((image, index) => {
        const img = document.createElement('img')
        img.src = image
        img.alt = `Image ${index + 1}`
        img.classList.add('popup__image')
        img.style.opacity = index === 0 ? 1 : 0  // Первая картинка активна по умолчанию
        imagesContainer.appendChild(img)
    })

    // Обработчик для переключения изображений
    prevBtn.addEventListener('click', () => {
        if (activeImageIndex > 0) {
            activeImageIndex--
            updateImages()
        }
    })

    nextBtn.addEventListener('click', () => {
        if (activeImageIndex < selectedCard.images.length - 1) {
            activeImageIndex++
            updateImages()
        }
    })

    // Первоначальное обновление изображений
    updateImages()

    // Закрытие модалки
    const popupCloseBtn = document.getElementById('popupCloseBtn')
    popupCloseBtn.addEventListener('click', closePopup)

    // Синхронизация с индексом карточки в каталоге
    const catalogCards = document.querySelectorAll('.catalog__card')
    catalogCards.forEach((card, index) => {
        if (index === activeCardIndex) {
            card.classList.add('active')
        } else {
            card.classList.remove('active')
        }
    })
}
