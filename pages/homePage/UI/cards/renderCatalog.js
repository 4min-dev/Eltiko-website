import { catalogData } from "../../../../static/assets/data/catalogData.js"

const catalogWrapper = document.getElementById('catalog-items-wrapper')

export default function renderCatalog(activeCatalogIndex) {
    catalogData.forEach(item => {
        const catalogItem = document.createElement('a')
        catalogItem.href = '/catalog'
        catalogItem.classList.add('catalog__item__card')
        catalogItem.classList.add(item.id === activeCatalogIndex ? 'active' : 'not-active')
        catalogItem.style.transform = `translateY(-${activeCatalogIndex * 100}%)`

        catalogItem.innerHTML = `
            <div class="catalog__item__image">
                <span class="catalog__item__title__type adaptive">${item.type}</span>
                <img src="${item.image}" alt="${item.title}" />
            </div>
    
            <div class="catalog__item__text">
                <div class="catalog__item__text__container">
                    <div class="catalog__item__title__container">
                        <span class="catalog__item__title">${item.title}</span>
                        <span class="catalog__item__title__type aqua__text dekstop">${item.type}</span>
                    </div>
                    <span class="catalog__item__description">${item.description}</span>
                </div>
                <div class="catalog__item__other__information">
                    <div class="catalog__item__location">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="21" viewBox="0 0 17 21" fill="none">
            <path d="M1.25 8.42285C1.25 13.2747 5.49448 17.2869 7.37319 18.8252C7.64206 19.0454 7.77811 19.1568 7.97871 19.2132C8.13491 19.2572 8.3648 19.2572 8.521 19.2132C8.72197 19.1567 8.85707 19.0464 9.12695 18.8254C11.0057 17.2871 15.2499 13.2751 15.2499 8.4233C15.2499 6.58718 14.5125 4.82605 13.1997 3.52772C11.887 2.22939 10.1066 1.5 8.25008 1.5C6.39357 1.5 4.61301 2.2295 3.30025 3.52783C1.9875 4.82616 1.25 6.58674 1.25 8.42285Z" stroke="#8EA0B2" strokeWidth="1.575" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.25 7.5C6.25 8.60457 7.14543 9.5 8.25 9.5C9.35457 9.5 10.25 8.60457 10.25 7.5C10.25 6.39543 9.35457 5.5 8.25 5.5C7.14543 5.5 6.25 6.39543 6.25 7.5Z" stroke="#8EA0B2" strokeWidth="1.575" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
                        <span class="catalog__item__other__text gray__text">${item.location}</span>
                    </div>
                    <div class="catalog__item__size">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
            <path d="M2.22949 15.8939L15.5186 3.05763M5.18262 17.375C3.008 17.375 1.24512 15.6067 1.24512 13.4254V5.57462C1.24512 3.37447 3.03741 1.59846 5.23065 1.6253L13.1057 1.72167C15.2614 1.74805 16.9951 3.50847 16.9951 5.67099V13.4254C16.9951 15.6067 15.2322 17.375 13.0576 17.375H5.18262Z" stroke="#8EA0B2" strokeWidth="1.575" />
        </svg>
                        <span class="catalog__item__other__text gray__text">${item.squareMeters}м2</span>
                    </div>
                </div>
            </div>
        `

        catalogWrapper.appendChild(catalogItem)
    })
}