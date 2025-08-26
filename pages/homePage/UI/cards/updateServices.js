export default function updateServiceCards(activeServiceIndex) {
    const services__section = document.getElementById('services__section')
    const services__container = services__section.querySelector('.service__cards__container')

    const cards = services__container.querySelectorAll('.service__card') // Все карточки

    // Обновляем карточки
    cards.forEach((card, index) => {
        // Если это активная карточка
        if (index === activeServiceIndex - 1) {
            card.classList.add('active')
            card.classList.remove('not-active')
        } else {
            card.classList.add('not-active')
            card.classList.remove('active')
        }

        // Обновление стиля для анимации перемещения
        card.style.transform = `translateY(-${activeServiceIndex * 100}%)`
    })
}