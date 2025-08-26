import { servicesData } from "../../../../static/assets/data/servicesData.js"


export default function renderServices(activeServiceIndex) {
    const services__container = services__section.querySelector('.service__cards__container');

    services__container.innerHTML = '' // Очистить контейнер перед рендером
    servicesData.forEach(service => {
        const card = document.createElement('a')
        card.href = '#'
        card.classList.add('service__card')
        card.style.transform = `translateY(-${activeServiceIndex * 100}%)`
        if (activeServiceIndex === service.id) {
            card.classList.add('active')
        } else {
            card.classList.add('not-active')
        }

        const aboutText = document.createElement('div')
        aboutText.classList.add('service__card__about__text')
        const title = document.createElement('span')
        title.classList.add('service__title')
        title.textContent = service.title
        const description = document.createElement('span')
        description.classList.add('service__description')
        description.textContent = service.description.toLowerCase()
        aboutText.append(title, description)

        const link = document.createElement('div')
        link.classList.add('service__card__link')
        const svgContainer = document.createElement('div')
        svgContainer.classList.add('service__svg__container')
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
        svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
        svg.setAttribute('width', '18')
        svg.setAttribute('height', '18')
        svg.setAttribute('viewBox', '0 0 18 18')
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
        path.setAttribute('d', 'M1.5 1.5H16.5M16.5 1.5V16.5M16.5 1.5L1.5 16.5')
        path.setAttribute('stroke-width', '2.5')
        path.setAttribute('stroke-linecap', 'round')
        path.setAttribute('stroke-linejoin', 'round')
        svg.appendChild(path)
        svgContainer.appendChild(svg)
        link.appendChild(svgContainer)

        card.append(aboutText, link)
        services__container.appendChild(card)
    })
}