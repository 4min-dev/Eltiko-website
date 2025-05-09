import React, { forwardRef, useState } from 'react';
import './catalogSection.scss';
import { ICatalogData } from '../../../../interfaces/data/ICatalogData';
import Geo from '../../svg/Geo';
import DashedQuard from '../../svg/DashedQuard';
import Link from '../../svg/Link';

type TCatalogSectionProps = {
    catalogData: ICatalogData[],
    activeIndex: number
}

const CatalogSection = forwardRef<HTMLDivElement, TCatalogSectionProps>((props, ref) => {
    const [isAnimation, setIsAnimation] = useState(false);

    return (
        <section id='catalog__section' ref={ref} className='services-section'>
            <div className='catalog__section__heading'>
                <span className='section__title'>Объекты недвижимости</span>
                <a href='/catalog'
                    className={`blue__btn anim__btn ${isAnimation ? 'animate__bc' : 'animate__bc__to__default'}`}
                    onMouseOver={() => setIsAnimation(true)}
                    onMouseOut={() => setIsAnimation(false)}
                >
                    <span className='btn__text'>
                        Открыть каталог <Link />
                    </span>
                    <div className='btn__link__svg'>
                        <Link />
                    </div>
                </a>
            </div>

            <div className='catalog__items__container'>
                <div className='catalog__items__wrapper'>
                    {props.catalogData.map((catalogItem) => (
                        <a href='/catalog' style={{ transform: `translateY(-${props.activeIndex * 100}%)` }} key={catalogItem.id} className={`catalog__item__card ${props.activeIndex === catalogItem.id ? 'active' : 'not-active'}`} >
                            <div className='catalog__item__image'>
                                <span className='catalog__item__title__type adaptive'>
                                    {catalogItem.type}
                                </span>
                                <img src={catalogItem.image} alt={catalogItem.title} />
                            </div>

                            <div className="catalog__item__text">
                                <div className='catalog__item__text__container'>
                                    <div className='catalog__item__title__container'>
                                        <span className='catalog__item__title'>
                                            {catalogItem.title}
                                        </span>
                                        <span className='catalog__item__title__type aqua__text dekstop'>
                                            {catalogItem.type}
                                        </span>
                                    </div>
                                    <span className='catalog__item__description'>
                                        {catalogItem.description}
                                    </span>
                                </div>
                                <div className='catalog__item__other__information'>
                                    <div className='catalog__item__location'>
                                        <Geo />
                                        <span className='catalog__item__other__text gray__text'>
                                            {catalogItem.location}
                                        </span>
                                    </div>
                                    <div className='catalog__item__size'>
                                        <DashedQuard />
                                        <span className='catalog__item__other__text gray__text'>
                                            {`${catalogItem.squareMeters}м2`}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
});

export default CatalogSection;
