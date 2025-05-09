import React, { useEffect, useState } from 'react';
import './sendRequestPopup.scss';
import MaskNumberInput from '../../inputs/maskNumberInput/MaskNumberInput';
import Cross from '../../svg/Cross';

type TSendRequestPopup = {
    popupHandler:() => void
}

const SendRequestPopup: React.FC<TSendRequestPopup> = ({popupHandler}) => {
    let [isPopupClosing, setPopupClosing] = useState(false)
    let [phoneValue,setPhoneValue] = useState<string>('')

    useEffect(() => {
        return () => {
            setPhoneValue('')
        };
    }, []);

    function animatedPopupHandler() {
        setPopupClosing(true)
        setTimeout(() => {
            popupHandler()
        }, 700);
    }

    return (
        <div className={`send__request__popup__overlay ${isPopupClosing ? 'closing' : 'not-closing'}`} onClick={animatedPopupHandler}>
            <div className="send__request__popup" onClick={(e) => e.stopPropagation()}>
                <div className='popup__title'>
                    <span>Заполните</span>
                    <span>все поля заявки</span>
                </div>

                <button type='button' className='close__popup__btn' onClick={animatedPopupHandler}>
                    <Cross/>
                </button>

                <form className='send__request__popup__form'>
                    <span className='input__title'>Ваше имя</span>
                    <input type='text' placeholder='Поиск' required className='name__input' />
                    <MaskNumberInput phoneValue={phoneValue} setPhoneValue={setPhoneValue} inputTitle='Номер телефона'/>
                    <span className='input__title'>Комментарий</span>
                    <textarea placeholder='Расскажите подробнее' required className='message__input'></textarea>
                    <button type='submit' className='blue__btn send__request__btn anim__btn'>
                        <span className='btn__text'>Оставить заявку</span>
                    </button>
                </form>

                <div className='privacy__policy__information'>
                    <span>Нажимая на кнопку, вы соглашаетесь</span>
                    <span><a href='#'>с условиями конфиденциальности</a></span>
                </div>
            </div>
        </div>
    );
}

export default SendRequestPopup;
