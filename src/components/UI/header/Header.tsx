import React, { useEffect } from 'react'
import './header.scss'
import gsap from 'gsap';

type THeader = {
    sendRequestPopupHandler?: () => void,
    isStartedSection?:boolean
}

const Header: React.FC<THeader> = ({ sendRequestPopupHandler, isStartedSection }) => {

    useEffect(() => {
        gsap.fromTo('.header',
            {
                y: '-300%',
                opacity: 0
            },
            {
                y: '0%',
                opacity: 1, duration: 2, ease: 'power3.out'
            });
    }, []);

    
    function getLinkToHome() {
         // Получаем текущий URL
    const currentUrl = window.location.href;

    // Создаем URL объект для удобной работы с частями URL
    const url = new URL(currentUrl);

    // Устанавливаем путь на корень ("/")
    url.pathname = '/';

    // Перенаправляем пользователя на домашнюю страницу
    return url.toString();
    }

    getLinkToHome()

    return (
        <header className='header'>
            <a href={getLinkToHome()} className={`header__logo ${isStartedSection ? 'white' : 'blue'}`}>
                <div className='header__logo__title'>
                    <span>
                        NG
                    </span>
                </div>
                <span>
                    Group
                </span>
            </a>

            {(sendRequestPopupHandler && !isStartedSection) &&
                <button type='button' className='header__req__btn blue__btn brdrd' onClick={sendRequestPopupHandler}>
                    Оставить заявку
                </button>}
        </header>
    )
}

export default Header
