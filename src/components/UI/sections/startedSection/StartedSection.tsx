import React, { RefObject, forwardRef, useEffect } from 'react'
import './startedSection.scss'
import gsap from 'gsap'
import Animations from '../../../../assets/animations'

type TStartedSection = {
    popupHandler: () => void,
    ref:RefObject<HTMLDivElement>
}

const StartedSection = forwardRef<HTMLDivElement, TStartedSection>((props, ref) => {

    useEffect(() => {
        const section = (ref as React.RefObject<HTMLDivElement>).current;

        if (!section) return;

        const animations = new Animations()

        animations.transformToRight(section,'.started__section__landing__text')
        animations.opacity(section,'.landing__btns__container')

        gsap.fromTo('.author__about__content', 
            { y: '-300%', opacity: 0 }, 
            { y: 0, opacity: 1, duration: 1, scrollTrigger: {
                trigger: section,
                start: "top 80%",
                once: true
            } 
        });
    }, [ref]);

    return (
        <section id='started__section__main__page' ref={ref}>
            <div className="started__section__background">
                <img className='dekstop' src='/images/startedSectionBackground.png' alt='Background image' />
                <img className='adaptive' src='/images/startedSectionBackground__adaptive.png' />
            </div>

            <div className='author__about__content'>
                <span className='author__text__content'>
                    Брокер <div>по недвижимости</div>
                </span>

                <div className='author__image'>
                    <img src="/images/authorImage.png" alt='Person image' />
                </div>

                <div className='author__personal__content'>
                    <div className='author__name'>
                        Анна Франкевич
                    </div>
                    <div className='author__description'>
                        <span className="dekstop">поможет с выбором жилья</span>
                        <span className="adaptive">Брокер по недвижимости</span>
                    </div>
                </div>
            </div>

            <div className="started__section__landing_container">
                <div className='started__section__landing__text'>
                    <div className='section__title'>
                        <span className='first__text__block'>Премиум-жилье</span>
                        <span className='second__text__block'>для тех, кто ценит</span>
                        <span>высокие стандарты</span>
                    </div>

                    <div className='section__description'>
                        Мы находим лучшее среди лучшего на рынке недвижимости
                    </div>
                </div>

                <div className='landing__btns__container'>
                    <button type='button' className='blue__btn anim__btn' onClick={props.popupHandler}>
                        <span className="btn__text">Оставить заявку</span>
                    </button>

                    <a href='/catalog' className='opacity__btn anim__btn'>
                        <span className='btn__text dekstop'>Открыть каталог</span>
                        <span className='adaptive'>Каталог</span>
                    </a>
                </div>
            </div>
        </section>
    );
});

export default StartedSection
