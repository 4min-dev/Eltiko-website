import { aboutData } from "../../../../static/assets/data/aboutData.js";

document.addEventListener("DOMContentLoaded", function () {
    const about__section = document.getElementById('about__section');

    // Пример использования анимаций
    const content = about__section.querySelector('.section__text__content');
    const asidePanel = about__section.querySelector('.about__section__aside__panel');

    // Добавление классов анимаций
    content.classList.add('move-right');
    asidePanel.classList.add('fade-in');

    // Добавление карточек
    const countryCardsContainer = about__section.querySelector('.about__aside__second__block');

    aboutData.map((about) => {
        const card = document.createElement('div')
        card.classList.add('about__aside__country__card')
        card.id = `country__card__${about.id}`

        const imgDiv = document.createElement('div')
        imgDiv.classList.add('country__image')
        const img = document.createElement('img')
        img.src = about.image
        img.alt = about.name
        imgDiv.appendChild(img)

        const nameSpan = document.createElement('span');
        nameSpan.classList.add('country__name');
        nameSpan.textContent = about.name;

        const typeSpan = document.createElement('span');
        typeSpan.classList.add('aqua__text');
        typeSpan.textContent = about.type;

        card.appendChild(imgDiv);
        card.appendChild(nameSpan);
        card.appendChild(typeSpan);

        countryCardsContainer.appendChild(card);
    })
})