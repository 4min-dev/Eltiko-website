import React, { useEffect, useRef } from 'react';
import './feedbackSection.scss';

const FeedbackSection: React.FC = () => {

    useEffect(() => {
        const leftTrack = document.querySelector('.feedback__cards__wrapper.to__left') as HTMLElement;
        const rightTrack = document.querySelector('.feedback__cards__wrapper.to__right') as HTMLElement;
        const logos = Array.from(leftTrack.children) as HTMLElement[];

        const logoWidth = logos[0].offsetWidth;
        const totalWidth = logos.length * (logoWidth + 24);

        logos.forEach((logo) => {
            const cloneLeft = logo.cloneNode(true);
            const cloneRight = logo.cloneNode(true);
            leftTrack.appendChild(cloneLeft);
            rightTrack.appendChild(cloneRight);
        });

        let leftPosition = 0;
        let rightPosition = 0;

        const animateLeftCarousel = () => {
            leftPosition -= 3;
            if (Math.abs(leftPosition) >= totalWidth) {
                leftPosition = 0;
            }
            leftTrack.style.transform = `translateX(${leftPosition}px)`;
            requestAnimationFrame(animateLeftCarousel);
        };

        const animateRightCarousel = () => {
            rightPosition += 3;
            if (rightPosition >= totalWidth) {
                rightPosition = 0;
            }
            rightTrack.style.transform = `translateX(${rightPosition}px)`;
            requestAnimationFrame(animateRightCarousel);
        };

        requestAnimationFrame(animateLeftCarousel);
        requestAnimationFrame(animateRightCarousel);
    }, []);

    return (
        <section id='feedback__section' className='feedback__section'>
            <div className='section__text__content'>
                <span className='section__title'>Отзывы</span>
                <span className='section__description'>
                    <span className='gray__text'>В этом разделе мы собрали</span> мнения и впечатления
                    <span className='gray__text'> наших клиентов, которые уже</span> воспользовались <span className='gray__text'>нашими услугами</span>
                </span>
            </div>

            <div className='feedback__cards__container'>
                <div className='feedback__cards__wrapper to__left'>
                    {[...Array(3)].map((_, index) => (
                        <div className='feedback__card' key={index}>
                            <span className='feedback__title'>
                                <span className='gray__text'>Хочу выразить</span> благодарность
                                <span className='gray__text'> команде за их терпение</span> и поддержку.
                                <span className='gray__text'> Они помогли мне найти</span> идеальный офис
                                <span className='gray__text'> для моего бизнеса.</span> Рекомендую!
                            </span>

                            <div className='feedback__author'>
                                <div className="feedback__author__personal">
                                    <span className='feedback__author__name'>Игорь Пескарёв</span>
                                    <span className='feedback__author__company gray__text'>Майнкрафт company</span>
                                </div>

                                <div className='feedback__author__avatar'>
                                    <img src='https://s3-alpha-sig.figma.com/img/bab9/dd5e/b619d36fb29565aecdc68c5555e5117f?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lbDEcHrx0w5OiDY0wYP770j~KKaIkpybdGX76L4tkg91hdweiBwPa~Yor6AegZXCboovodlAK66BG~BuMiTUkRpbc~jHx7wqMTutmPvqW8nAED99xiAJFTwYzx3tJ6FmTRKS4~fV95g9eP-cofL-ZwWdeVSQOH-I-xwhk3N2Od60Ze~tGLIjBoljPGHyRRmL8naruhZtPTLJYzbIwZWJrvGjrnAj88WBatCMCl1C4BNZ05Z7SQ01gHpKfVntDvzxcgR76WGBTlbUHiTi2CnzFgQDAOhviAznloVOhheulIz-zoHlMi7hWU48CSkhFe5eoFtSqoEs5R0BFbpakoqf8w__' alt='Author image' />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='feedback__cards__wrapper to__right'>
                    {[...Array(3)].map((_, index) => (
                        <div className='feedback__card' key={index}>
                            <span className='feedback__title'>
                                <span className='gray__text'>Хочу выразить</span> благодарность
                                <span className='gray__text'> команде за их терпение</span> и поддержку.
                                <span className='gray__text'> Они помогли мне найти</span> идеальный офис
                                <span className='gray__text'> для моего бизнеса.</span> Рекомендую!
                            </span>

                            <div className='feedback__author'>
                                <div className="feedback__author__personal">
                                    <span className='feedback__author__name'>Игорь Пескарёв</span>
                                    <span className='feedback__author__company gray__text'>Майнкрафт company</span>
                                </div>

                                <div className='feedback__author__avatar'>
                                    <img src='https://s3-alpha-sig.figma.com/img/bab9/dd5e/b619d36fb29565aecdc68c5555e5117f?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lbDEcHrx0w5OiDY0wYP770j~KKaIkpybdGX76L4tkg91hdweiBwPa~Yor6AegZXCboovodlAK66BG~BuMiTUkRpbc~jHx7wqMTutmPvqW8nAED99xiAJFTwYzx3tJ6FmTRKS4~fV95g9eP-cofL-ZwWdeVSQOH-I-xwhk3N2Od60Ze~tGLIjBoljPGHyRRmL8naruhZtPTLJYzbIwZWJrvGjrnAj88WBatCMCl1C4BNZ05Z7SQ01gHpKfVntDvzxcgR76WGBTlbUHiTi2CnzFgQDAOhviAznloVOhheulIz-zoHlMi7hWU48CSkhFe5eoFtSqoEs5R0BFbpakoqf8w__' alt='Author image' />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeedbackSection;
