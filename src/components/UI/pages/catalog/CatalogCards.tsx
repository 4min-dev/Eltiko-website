import React, { useEffect, useState } from 'react';
import Geo from '../../svg/Geo';
import DashedQuard from '../../svg/DashedQuard';
import { ICatalogData } from '../../../../interfaces/data/ICatalogData';

type TCatalogPopupCard = {
    cardData:ICatalogData,
    images: string[],
    index: number,
    getCard:(cardId:number) => void
}

const CatalogPopupCard: React.FC<TCatalogPopupCard> = ({cardData, images, index, getCard }) => {
    const [activeImageIndex, setActiveImageIndex] = useState(0)

    useEffect(() => {
        const handleMouseWheel = (event: WheelEvent) => {
            event.preventDefault()
            if (event.deltaY > 0) {
                setActiveImageIndex((prevIndex) => (prevIndex + 1) % images.length)
            } else {
                setActiveImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
            }
        };

        const currentCard = document.querySelector(`.catalog__card[data-index="${index}"]`)

        if (currentCard) {
            currentCard.addEventListener('wheel', handleMouseWheel as EventListener, { passive: false })
        }

        return () => {
            if (currentCard) {
                currentCard.removeEventListener('wheel', handleMouseWheel as EventListener)
            }
        };
    }, [images.length, index])

    function getOpacityValue(i: number) {
        if (i === activeImageIndex) {
            return 1
        } else if (i === (activeImageIndex - 1 + images.length) % images.length ? 1 : 0) {
            return 0
        } else if (activeImageIndex == 1) {
            return 1
        }
    }

    return (
        <div
            className='catalog__card'
            data-index={index} onClick={() => getCard(cardData.id)}
        >
            <div className='catalog__card__preview'>
                {images.map((image, i) => <img
                    className={`catalog__card__image ${i === activeImageIndex ? 'active' : ''}`}
                    key={i}
                    src={image} alt='Apartment preview' style={{
                        opacity: getOpacityValue(i),
                    }} />)}
            </div>

            <button type='button' className='show__card__btn blue__btn anim__btn' onClick={() => getCard(cardData.id)}>
                <span className="btn__text">Открыть</span>
            </button>

            <div className='catalog__card__heading'>
                <div className='catalog__card__scrollbar__indicator__wrapper'>
                    <div className='catalog__card__scrollbar__indicator' style={{ width: `${(activeImageIndex + 1) / images.length * 100}%` }}>
                    </div>
                </div>

                <div className='catalog__card__tag geo__tag'>
                    <Geo />
                    <span className='catalog__card__geo__text'>Dubai</span>
                </div>

                <div className='catalog__card__tag size__tag'>
                    <DashedQuard />
                    <span className='catalog__card__size__amount__text'>420м2</span>
                </div>
            </div>

            <div className='catalog__card__name'>
                <span className='catalog__card__name__text'>Квартира в Moscow City</span>
            </div>
        </div>
    );
};

export default CatalogPopupCard
