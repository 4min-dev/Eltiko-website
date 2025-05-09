import React, { useEffect, useRef } from 'react'
import './teamSection.scss'
import Animations from '../../../../assets/animations';

const TeamSection:React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = (ref as React.RefObject<HTMLDivElement>).current;

        if (!section) return;

        const animations = new Animations()

        animations.transformFromBottom(section, '.team__section .section__title')
        animations.transformToRight(section, '.team__section .section__description')
        animations.transformToRight(section, '.team__section #team__card__1')
        animations.transofrmToLeft(section, '.team__section #team__card__2')

    }, [ref]);

    return (
        <section id='team__section' className='team__section' ref={ref}>
            <div className='section__text__content'>
                <span className='section__title'>Наша команда</span>
                <span className='section__description'>
                    <span className='gray__text'>Мы предлагаем</span> полный спектр услуг
                    <span className='gray__text'> по продаже жилой и коммерческой недвижимости: </span>
                    оценка, маркетинг, показы и юридическая поддержка. <span className='gray__text'> Наша цель — сделать процесс
                    продажи</span> простым и удобным <span className='gray__text'> для клиентов.</span>
                </span>
            </div>

            <div className='team__cards__container'>
                <a href='#' className='team__card' id='team__card__1'>
                    <img src='https://s3-alpha-sig.figma.com/img/f1ce/ce9d/2eedaae25bb6d698fa72c03a06982386?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dKzxjyhiizgVqXnst7xddaxKQIdO2daRhjmwZGtIvVgIf01a9h-4eH-1M4zLZf9pWUkB~BcO2bcMtpKwKFRA4JVyV7OFiStqFUIpTCgxRx2UjW91JK88fDHXdLNE-wuUE18BOYesX5E-7M2swtEuy2vmlIb792mpJ~wg0y33Upp6WnJ6ihDPLtQZcLVHNC5A41hgKD7bR-grW7DyjKFGmKBsigSvc4wYAvYz3fjPHhOtw-22mvuZAW9R58M~QjXGPMErQ0K2dOhTtiJl-EtARcS7utYA60j3WXRVcOlYfUnAM1WR5e5aQ4B-VgrQ12AJ3WLWy9tgYdY02T20BNm~Uw__' alt='Team person'/>
                    <div className='team__card__timestamp__container'>
                        <span className='team__card__timestamp'>10:00 - 20:00</span>
                    </div>

                    <div className='team__card__about__person'>
                        <span className='person__name'>Anna Nikishova</span>
                        <span className='person__rule'>Брокер по элитной недвижимости</span>
                    </div>
                </a>

                <a href='#' className='team__card' id='team__card__2'>
                    <img src='https://s3-alpha-sig.figma.com/img/bfd9/e767/ea1b484a231b994a796f3385e2a61b95?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oypbTWHny7pI0AD3CXxP0bT128qVGTh6ZtqW00qhL5Ds04dAik9H6B4d5N6sFaXGzJRbj2x9eKzxDyGtnF4ZYqA1QGcH218-LegMUPX2jLcTo8zKILANs8JKzVxqXl75ivsd4-tBPHHzz4XsfREn18G4FgIOPdkLFmhFTypsShslDE~-eqFegV35PAmGC3tJczuKKAaqNZoDyEN4FByg~BwvJRZG~UWEKdcOcdG3KVjKGBYgXCZLzNilJPzqPQyUbJ1o3DODEPaEAzAJ8cAI4iKdEjyl8IpucgvwHD521J5UrClzOUk2Q7ikkoBaRkWOlcY2cfivAFVZclKcEIfWEw__' alt='Team person'/>
                    <div className='team__card__timestamp__container'>
                        <span className='team__card__timestamp'>10:00 - 20:00</span>
                    </div>

                    <div className='team__card__about__person'>
                        <span className='person__name'>Anna Nikishova</span>
                        <span className='person__rule'>Брокер по элитной недвижимости</span>
                    </div>
                </a>
            </div>
        </section>
    )
}

export default TeamSection
