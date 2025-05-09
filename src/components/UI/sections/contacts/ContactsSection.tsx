import React, { useEffect, useRef } from 'react'
import './contactsSection.scss'
import { INetworksData } from '../../../../interfaces/data/INetworksData'
import NetworkList from '../../lists/network/NetworkList'
import { networks } from '../../../../assets/data/Networks'
import Animations from '../../../../assets/animations'

const adaptiveNetworks: INetworksData[] = [
    {
        id: 1,
        logo: '/icons/whatsapp-blue.svg',
        name: 'Whatsapp',
        link: 'https://wa.me/79661961661'
    },
    {
        id: 2,
        logo: '/icons/instagram-blue.svg',
        name: 'Instagram',
        link: 'https://www.instagram.com/broker_int.realty'
    },
    {
        id: 3,
        logo: '/icons/telegram-blue.svg',
        name: 'Telegram',
        link: 'htps://t.me/sitystoriess'
    },
]

type TContactsSection = {
    sendRequestPopupHandler:() => void
}

const ContactsSection: React.FC<TContactsSection> = ({sendRequestPopupHandler}) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = (ref as React.RefObject<HTMLDivElement>).current;

        if (!section) return;

        const animations = new Animations()

        animations.transformFromBottom(section, '.contacts__section .section__title')
        animations.transformToRight(section, '.contacts__section .yandex__map__container')
        animations.transofrmToLeft(section, '.contacts__section .contacts__block')

    }, [ref]);

    return (
        <section id='contacts__section' className='contacts__section' ref={ref}>
            <div className='section__title'>Контакты</div>
            <div className='contacts__container'>
                <div className='yandex__map__container'>
                    <iframe src="https://yandex.ru/map-widget/v1/-/CDh8ZHk1" width="600" height="400"></iframe>
                </div>

                <div className="contacts__block">
                    <span className='block__title'>NASgroup</span>

                    <div className='contacts__block__content'>
                        <div className='contacts__form'>
                            <div className='contact__input__container phone__input__container'>
                                <span className='contact__input__title phone__input__title'>Телефон</span>
                                <span className='contact__input phone__input'>+7(966)196-16-61</span>
                            </div>

                            <div className='contact__input__container email__input__container'>
                                <span className='contact__input__title email__input__title'>Email</span>
                                <span className='contact__input email__input'>sitystories@mail.ru</span>
                            </div>

                            <div className='contact__input__container geo__input__container'>
                                <span className='contact__input__title geo__input__title'>Адрес</span>
                                <span className='contact__input geo__input'>Москва, Пресненская набережная, 8с1</span>
                            </div>
                        </div>
                        <NetworkList networks={networks} cardClassname='dekstop'/>
                        <NetworkList networks={adaptiveNetworks} cardClassname='adaptive'/>
                    </div>
                </div>
            </div>
            <div className='send__request__btn__container dekstop'>
                <button className='blue__btn send__request__btn anim__btn' onClick={sendRequestPopupHandler}>
                    <span className='btn__text'>Оставить заявку</span>
                </button>
            </div>
        </section>
    )
}

export default ContactsSection
