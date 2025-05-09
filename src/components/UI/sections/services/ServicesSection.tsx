import React, { forwardRef, useEffect } from 'react';
import './servicesSection.scss';
import { IServicesData } from '../../../../interfaces/data/IServicesData';
import Animations from '../../../../assets/animations';

const ServicesSection = forwardRef<HTMLDivElement, { servicesData: IServicesData[], activeIndex: number }>((props, ref) => {
  
    useEffect(() => {
        const section = (ref as React.RefObject<HTMLDivElement>).current;

        if (!section) return;

        const animations = new Animations()

        animations.opacity(section, '.services-section .section__text__content')
        animations.transofrmToLeft(section, '.services-section .service__cards__container')

    }, [ref]);

    return (
        <section id='services__section' ref={ref} className='services-section'>
            <div className='section__text__content'>
                <span className='section__title'>Наши услуги</span>
                <span className='section__description'>
                    <span className="gray__text">Полный спектр</span> услуг по продаже
                    <span className="gray__text"> жилой и коммерческой недвижимости:</span> оценка, маркетинг, показы и юридическая поддержка.
                </span>
            </div>

            <div className='service__cards__container' >
                {props.servicesData.map(service => (
                    <a 
                        style={{transform:`translateY(-${props.activeIndex * 100}%)`}}
                        href='#' 
                        key={service.id} 
                        className={`service__card ${props.activeIndex === service.id ? 'active' : 'not-active'}`}
                    >
                        <div className="service__card__about__text">
                            <span className='service__title'>{service.title}</span>
                            <span className='service__description'>{service.description.toLowerCase()}</span>
                        </div>
                        <div className='service__card__link'>
                            <span>
                                <div className="service__svg__container">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                        <path d="M1.5 1.5H16.5M16.5 1.5V16.5M16.5 1.5L1.5 16.5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </span>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
});

export default ServicesSection;
