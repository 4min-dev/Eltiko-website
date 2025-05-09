import React, { useEffect, useState } from 'react';
import './appartmentPopup.scss';
import Cross from '../../svg/Cross';
import Geo from '../../svg/Geo';
import DashedQuard from '../../svg/DashedQuard';
import Arrow from '../../svg/Arrow';
import ArrowLeft from '../../svg/ArrowLeft';
import ArrowRight from '../../svg/ArrowRight';
import { ICatalogData } from '../../../../interfaces/data/ICatalogData';

type TSelectedHousePopup = {
    selectedCard: ICatalogData,
    images: string[],
    popupHandler: () => void,
    recomendationsData: ICatalogData[]
}

const cardIndex = 1;

const SelectedHousePopup: React.FC<TSelectedHousePopup> = ({ selectedCard, images, popupHandler, recomendationsData }) => {
    let [activeImageIndex, setActiveImageIndex] = useState(0);
    let [isAnimation, setIsAnimation] = useState(false)
    let [isPopupClosing, setPopupClosing] = useState(false)

    function slideToLeft() {
        setActiveImageIndex(prev => prev - 1)
    }
    function slideToRight() {
        setActiveImageIndex(prev => prev + 1)
    }

    useEffect(() => {
        const handleMouseWheel = (event: WheelEvent) => {
            event.preventDefault();
            if (event.deltaY > 0 && activeImageIndex !== images.length - 1) {
                setActiveImageIndex((prevIndex) => (prevIndex + 1) % images.length);
            } else if (activeImageIndex !== 1) {
                setActiveImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
            }
        };

        const currentCard = document.querySelector(`.house__card[data-index="${cardIndex}"]`);

        if (currentCard) {
            currentCard.addEventListener('wheel', handleMouseWheel as EventListener, { passive: false });
        }

        return () => {
            if (currentCard) {
                currentCard.removeEventListener('wheel', handleMouseWheel as EventListener);
            }
        };
    }, [images.length, cardIndex]);

    function getOpacityValue(i: number) {
        if (i === activeImageIndex) {
            return 1;
        } else if (i === (activeImageIndex + 1) % images.length) {
            return 0.5;
        } else {
            return 0;
        }
    }

    function closePopupHandler() {
        setPopupClosing(true)

        setTimeout(() => {
            popupHandler()
        }, 700);
    }

    return (
        <div className={`house__popup__container ${isPopupClosing ? 'closing' : 'not-closing'}`}>
            <div className='hous__popup'>
                <div className='house__popup__close__btn' onClick={closePopupHandler}>
                    <Cross />
                </div>

                <div className='house__popup__card__block'>
                    <div className='house__popup__card__about__card'>
                        <div className='house__description__container'>
                            <div className='house__text__content' id='house__name__id'>
                                <span className='house__name'>{selectedCard.title}</span>
                                <span className='house__description' id='house__description__id'>
                                    {selectedCard.description}
                                </span>

                                <div className='house__tags adaptive' id='house__tags__adaptive'>
                                    <span className='house__tag'>
                                        <Geo /> <span className='tag__name'>{selectedCard.location}</span>
                                    </span>

                                    <span className='house__tag'>
                                        <DashedQuard /> <span className='tag__name'>{`${selectedCard.squareMeters}м2`}</span>
                                    </span>

                                    <span className='house__tag'>
                                        <Arrow /> <span className='tag__name'>{`${selectedCard.squareMeters}м2`}</span>
                                    </span>
                                </div>
                            </div>

                            <div className='house__tags dekstop' id='house__tags__id__dekstop'>
                                <span className='house__tag'>
                                    <Geo /> <span className='tag__name'>{selectedCard.location}</span>
                                </span>

                                <span className='house__tag'>
                                    <DashedQuard /> <span className='tag__name'>{`${selectedCard.squareMeters}м2`}</span>
                                </span>

                                <span className='house__tag'>
                                    <Arrow /> <span className='tag__name'>{`${selectedCard.squareMeters}м2`}</span>
                                </span>
                            </div>

                            <div className='contacts__container'>
                                <button
                                    className={`blue__btn anim__btn ${isAnimation ? 'animate__bc' : 'animate__bc__to__default'}`}
                                    onMouseOver={() => setIsAnimation(true)}
                                    onMouseOut={() => setIsAnimation(false)}
                                >
                                    <span className='btn__text'>
                                        Связаться
                                    </span>

                                    <span className='btn__text__before'>
                                        Связаться
                                    </span>
                                </button>

                                <button
                                    className={`blue__btn anim__btn ${isAnimation ? 'animate__bc' : 'animate__bc__to__default'}`}
                                    onMouseOver={() => setIsAnimation(true)}
                                    onMouseOut={() => setIsAnimation(false)}
                                >
                                    <span className='btn__text'>
                                        Скачать pdf
                                    </span>

                                    <span className='btn__text__before'>
                                        Скачать pdf
                                    </span>
                                </button>
                            </div>
                        </div>

                        <div className='house__card__container'>
                            <div className='house__card' data-index={cardIndex}>
                                {images.map((image, i) => (
                                    <img
                                        className={`house__card__image ${i === activeImageIndex ? 'active' : ''}`}
                                        key={i}
                                        src={image}
                                        alt='House preview'
                                        style={{
                                            opacity: getOpacityValue(i),
                                        }}
                                    />
                                ))}
                                <button type='button' className='house__communicate__btn anim__btn'>
                                    <div className='btn__text'>
                                        Связаться
                                    </div>
                                </button>
                            </div>

                            <div className='house__card__pagination__container'>
                                <div className='house__card__indicator__wrapper'>
                                    <div className='house__card__indicator' style={{ width: `${(activeImageIndex + 1) / images.length * 100}%` }} />
                                </div>

                                <div className='pagination__btns__container'>
                                    <button disabled={activeImageIndex == 0}
                                        type='button'
                                        className={`paginate__btn to__left__btn animate__btn ${isAnimation
                                            ? 'animate__bc' : 'animate__bc__to__default'}`}
                                        onMouseOver={() => setIsAnimation(true)}
                                        onMouseOut={() => setIsAnimation(false)} onClick={slideToLeft}>
                                        <ArrowLeft />
                                    </button>

                                    <button disabled={activeImageIndex == images.length - 1} type='button' className='paginate__btn to__right__btn animate__btn' onClick={slideToRight}>
                                        <ArrowRight />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='house__recommendation__block'>
                    <span className='block__title'>Посмотрите так-же</span>
                    <div className='recommendation__cards__container'>
                        {recomendationsData.map((recomendation) =>
                            <div className='recommendation__card' key={recomendation.id}>
                                <img src={recomendation.image} alt='Preview' />

                                <div className='recommendation__card__content'>
                                    <div className='recommendation__card__text__container'>
                                        <div className='recommendation__card__title__container'>
                                            <span className='recommendation__card__title'>{recomendation.title}</span>
                                            <span className='recommendation__card__type'>{recomendation.type}</span>
                                        </div>
                                        <div className='recommendation__card__description'>
                                            {recomendation.description}
                                        </div>
                                    </div>

                                    <div className='recommendation__card__tags'>
                                        <div className='recommendation__card__tag geo__tag'>
                                            <Geo />
                                            <span className='tag__text'>{recomendation.location}</span>
                                        </div>

                                        <div className='recommendation__card__tag size__tag'>
                                            <DashedQuard />
                                            <span className='tag__text'>{`${recomendation.squareMeters}м2`}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectedHousePopup;
