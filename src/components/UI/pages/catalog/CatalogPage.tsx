import React, { useState } from 'react';
import './catalog.scss';
import Search from '../../svg/Search';
import Link from '../../svg/Link';
import CatalogCard from './CatalogCards';
import SelectedHousePopup from '../../popup/appartmentPopup/SelectedHousePopup';
import Header from '../../header/Header';
import FilterPopup from '../../popup/filterPopup/FilterPopup';
import Footer from '../../footer/Footer';
import { ICatalogData } from '../../../../interfaces/data/ICatalogData';

const catalogData:ICatalogData[] = [
    {
        id:1,
        title:'Квартира в Moscow City',
        description:`Мы специализируемся на продаже, покупке и аренде элитной недвижимости, предоставляя доступ к лучшим объектам.
                    Наша команда экспертов предлагает индивидуальные решения`,
        image:'/images/interior__1.png',
        location:'Москва',
        squareMeters:250,
        type:'Аренда'
    },

    {
        id:2,
        title:'Квартира в Moscow City',
        description:`Мы специализируемся на продаже, покупке и аренде элитной недвижимости, предоставляя доступ к лучшим объектам.
                    Наша команда экспертов предлагает индивидуальные решения`,
        image:'/images/interior__1.png',
        location:'Москва',
        squareMeters:250,
        type:'Аренда'
    },

    {
        id:3,
        title:'Квартира в Moscow City',
        description:`Мы специализируемся на продаже, покупке и аренде элитной недвижимости, предоставляя доступ к лучшим объектам.
                    Наша команда экспертов предлагает индивидуальные решения`,
        image:'/images/interior__1.png',
        location:'Москва',
        squareMeters:250,
        type:'Аренда'
    }
]

const recomendationsData:ICatalogData[] = [
    {
        id:1,
        title:'Квартира в Moscow City',
        description:`Роскошная вилла с современным дизайном, бассейном и ухоженными садами, идеальная для отдыха.`,
        image:'/images/interior__1.png',
        location:'Dubai',
        squareMeters:250,
        type:'Аренда'
    },

    {
        id:2,
        title:'Квартира в Moscow City',
        description:`Роскошная вилла с современным дизайном, бассейном и ухоженными садами, идеальная для отдыха.`,
        image:'/images/interior__1.png',
        location:'Dubai',
        squareMeters:250,
        type:'Продажа'
    }
]

const images = [
    '/images/interior__1.png',
    '/images/interior__2.png',
    '/images/interior__3.png',
    '/images/interior__4.png',
    '/images/interior__5.png',
];

const amount = 232

const CatalogPage: React.FC = () => {
    let [isAnimation, setIsAnimation] = useState(false);
    let [isCardOpen, setCardOpen] = useState(false)
    let [selectedCard, setSelectedCard] = useState<null | ICatalogData>(null)
    let [isFilterMenu, setFilterMenu] = useState(false)
    let [isFilterMenuClosing, setIsFilterMenuClosing] = useState(false)

    function popupHandler() {
        setCardOpen(!isCardOpen)
    }

    function filterPopupHandlong() {
        setFilterMenu(!isFilterMenu)
    }

    function sendRequestPopupHandler() {
        const goHomePage = window.location.href.split('/catalog')
        window.location.href = goHomePage[0]
    }

    function filterPopupHandler() {

        if (isFilterMenu) {
            setIsFilterMenuClosing(true)

            setTimeout(() => {
                setIsFilterMenuClosing(false)
                filterPopupHandlong()
            }, 400);
        } else {
            filterPopupHandlong()
        }

    }

    function getCardById(cardId:number) {
        const selectedCard = catalogData.filter((card) => card.id === cardId)
        setSelectedCard(selectedCard[0])
        setCardOpen(true)
    }

    return (
        <div className="catalog__page">
            <Header sendRequestPopupHandler={sendRequestPopupHandler}/>
            {(isCardOpen && selectedCard !== null) && 
            <SelectedHousePopup 
                selectedCard={selectedCard} 
                images={images} 
                popupHandler={popupHandler} recomendationsData={recomendationsData}/>}
            {isFilterMenu && <FilterPopup isPopupClosing={isFilterMenuClosing} />}
            <div className='catalog__content'>
                <div className='catalog__heading'>
                    <div className='catalog__heading__text__container'>
                        <div className='catalog__heading__title__container'>
                            <span className='catalog__title dekstop'>Каталог объектов</span>
                            <span className='catalog__title adaptive'>Каталог</span>
                            <span className='catalog__amount'>{`${amount} Объявления`}</span>
                        </div>

                        <button className='catalog__filter__btn adaptive' type='button' onClick={filterPopupHandler}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 28 24" fill="none">
                                <path d="M11.3333 20.0002H26M2 20.0002H6M6 20.0002V22.6668M6 20.0002V17.3335M24.6667 12.0002H26M2 12.0002H19.3333M19.3333 12.0002V14.6668M19.3333 12.0002V9.3335M16.6667 4.00016H26M2 4.00016H11.3333M11.3333 4.00016V6.66683M11.3333 4.00016V1.3335" stroke="#0062F0" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>

                    <div className='catalog__heading__inputs'>
                        <div className="catalog__search__input dekstop">
                            <input type='text' placeholder='Поиск' />
                            <button type='button' className='catalog__search__input__btn'>
                                <Search />
                            </button>
                        </div>
                        <button className='catalog__filter__btn dekstop' type='button' onClick={filterPopupHandler}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 28 24" fill="none">
                                <path d="M11.3333 20.0002H26M2 20.0002H6M6 20.0002V22.6668M6 20.0002V17.3335M24.6667 12.0002H26M2 12.0002H19.3333M19.3333 12.0002V14.6668M19.3333 12.0002V9.3335M16.6667 4.00016H26M2 4.00016H11.3333M11.3333 4.00016V6.66683M11.3333 4.00016V1.3335" stroke="#0062F0" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>

                    <div className="catalog__search__input adaptive">
                        <input type='text' placeholder='Поиск' />
                        <button type='button' className='catalog__search__input__btn'>
                            <Search />
                        </button>
                    </div>
                </div>

                <div className='catalog__cards__block'>
                    <span className='catalog__cards__block__title'>Аренда</span>
                    <div className='catalog__cards__container'>
                        {[...catalogData, ...catalogData, ...catalogData, ...catalogData].map((card, index) =>
                            <CatalogCard cardData={card} images={images} index={index} key={index} getCard={getCardById}/>
                        )}
                    </div>

                    <div className='show__more__cards__container'>
                        <button type='button'
                            className={`blue__btn anim__btn ${isAnimation ? 'animate__bc' : 'animate__bc__to__default'}`}
                            onMouseOver={() => setIsAnimation(true)}
                            onMouseOut={() => setIsAnimation(false)}
                        >
                            <span className='btn__text'>
                                Показать еще <Link />
                            </span>
                            <div className='btn__link__svg'>
                                <Link/>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default CatalogPage;
