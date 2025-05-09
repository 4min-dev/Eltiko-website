import React, { useRef } from 'react'
import './maskNumberInput.scss'

type TMaskNumberInput = {
    phoneValue: string,
    setPhoneValue: React.Dispatch<React.SetStateAction<string>>,
    inputTitle?:string
}

const MaskNumberInput: React.FC<TMaskNumberInput> = ({ phoneValue, setPhoneValue, inputTitle }) => {

    const phoneInputRef = useRef<HTMLInputElement | null>(null);

    const formatPhoneNumber = (value: string) => {
        let formattedValue = '+7(';

        if (value.length > 1) {
            formattedValue += value.slice(1, 4); // Код области
        }

        if (value.length >= 4) {
            formattedValue += ') ' + value.slice(4, 7); // Код оператора
        }

        if (value.length >= 7) {
            formattedValue += '-' + value.slice(7, 9); // Первая часть номера
        }

        if (value.length >= 9) {
            formattedValue += '-' + value.slice(9, 11); // Вторая часть номера
        }

        return formattedValue;
    };

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.replace(/\D/g, ''); // Убираем все нецифровые символы
        setPhoneValue(formatPhoneNumber(value))
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Backspace' || event.key === 'Delete') {
            const currentValue = phoneInputRef.current!.value.replace(/\D/g, ''); // Убираем форматирование

            // Удаляем последний символ
            const newValue = currentValue.slice(0, -1);

            // Обновляем поле
            if (newValue.length === 0) {
                // Если остается только код региона, очищаем поле
                phoneInputRef.current!.value = '';
            } else {
                // Обновляем значение с новым форматом
                setPhoneValue(formatPhoneNumber(newValue))
            }

            // Предотвращаем дальнейшую обработку события
            event.preventDefault();
        }
    };

    return (
        <>
            {inputTitle && <span className='input__title'>{inputTitle}</span>}
            <input
                value={phoneValue}
                type='text'
                placeholder='+7(___)___-__-__'
                required
                className='phone__input'
                ref={phoneInputRef}
                maxLength={17}
                onInput={handleInput}
                onKeyDown={handleKeyDown}
            />
        </>
    )
}

export default MaskNumberInput
