import React, { useEffect, useRef } from 'react'
import './aboutSection.scss'
import { aboutData } from '../../../../assets/data/AboutData'
import Animations from '../../../../assets/animations';

const AboutSection:React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = (ref as React.RefObject<HTMLDivElement>).current;

        if (!section) return;

        const animations = new Animations()

        animations.transformToRight(section, '.about__section .section__text__content')
        animations.opacity(section, '.about__section__aside__panel')

    }, [ref]);

    return (
        <section id='about__section' ref={ref} className='about__section'>
            <div className="section__text__content">
                <div className='section__title'>О нас</div>
                <div className='section__description'>
                    <span className='gray__text'>Мы специализируемся</span> на продаже, покупке и аренде элитной недвижимости,
                    <span className='gray__text'> предоставляя доступ к лучшим объектам.
                        Наша команда экспертов предлагает</span> индивидуальные решения,
                    <span className='gray__text'> ценит ваше время и конфиденциальность,
                        обеспечивая полный цикл услуг — </span> от консультации до заключения сделки.
                </div>
            </div>

            <div className='about__section__aside__panel'>
                <div className='about__aside__first__block gray__block'>
                    <span className='gray__text'>С помощью наших риелторов</span>
                    <div className='transactions__amount__container'>
                        <span className='block__title'>1000+</span> <span className='aqua__text'>Успешных сделок</span>
                    </div>
                </div>

                <div className="about__aside__second__block gray__block">
                    {aboutData.map((about) => <div key={about.id} className='about__aside__country__card' id={`country__card__${about.id}`}>
                        <div className='contry__image'>
                            <img src={about.image} alt={`${about.name}`} />
                        </div>

                        <span className='country__name'>
                            {about.name}
                        </span>

                        <span className='aqua__text'>
                            {about.type}
                        </span>
                    </div>)}
                </div>
            </div>
        </section>
    )
}

export default AboutSection
