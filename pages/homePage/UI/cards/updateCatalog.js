const catalogWrapper = document.getElementById('catalog-items-wrapper');

export function updateCatalogCards(activeCatalogIndex) {
    const cards = catalogWrapper.querySelectorAll('.catalog__item__card') // Все карточки
    console.log(cards)
    // Обновляем карточки
    cards.forEach((card, index) => {
        // Если это активная карточка
        if (index === activeCatalogIndex - 1) {
            card.classList.add('active')
            card.classList.remove('not-active')
        } else {
            card.classList.add('not-active')
            card.classList.remove('active')
        }

        // Обновление стиля для анимации перемещения
        card.style.transform = `translateY(-${activeCatalogIndex * 100}%)`
    })
}