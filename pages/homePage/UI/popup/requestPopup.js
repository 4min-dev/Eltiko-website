
document.addEventListener("DOMContentLoaded", function () {
    const popupOverlay = document.getElementById("popupOverlay")
    const popup = document.getElementById("requestPopup")
    const closePopupBtn = document.getElementById("closePopupBtn")
    const popupForm = document.getElementById("popupForm")
    const phoneInput = document.getElementById('phoneInput')
    let isPopupClosing = false

    // Функция для форматирования номера телефона
    function formatPhoneNumber(value) {
        let formattedValue = '+7('

        if (value.length > 1) {
            formattedValue += value.slice(1, 4) // Код области
        }

        if (value.length >= 4) {
            formattedValue += ') ' + value.slice(4, 7) // Код оператора
        }

        if (value.length >= 7) {
            formattedValue += '-' + value.slice(7, 9) // Первая часть номера
        }

        if (value.length >= 9) {
            formattedValue += '-' + value.slice(9, 11) // Вторая часть номера
        }

        return formattedValue
    }

    // Обработчик для изменения значения
    function handleInput(event) {
        const value = event.target.value.replace(/\D/g, '') // Убираем все нецифровые символы
        event.target.value = formatPhoneNumber(value)
    }

    // Обработчик для удаления символов
    function handleKeyDown(event) {
        if (event.key === 'Backspace' || event.key === 'Delete') {
            const currentValue = phoneInput.value.replace(/\D/g, '') // Убираем форматирование

            // Удаляем последний символ
            const newValue = currentValue.slice(0, -1)

            // Обновляем значение с новым форматом
            phoneInput.value = formatPhoneNumber(newValue)

            // Предотвращаем дальнейшую обработку события
            event.preventDefault()
        }
    }

    // Добавляем обработчики событий
    phoneInput.addEventListener('input', handleInput)
    phoneInput.addEventListener('keydown', handleKeyDown)

    // Показать попап
    function showPopup() {
        isPopupClosing = false
        popupOverlay.classList.remove("closing")
        popupOverlay.classList.add("not-closing")
        popupOverlay.style.display = "flex"

        document.addEventListener('keydown', (event) => {
            if(event.key.toLowerCase() === 'escape' && popupOverlay.classList.contains('not-closing')) {
                closePopup()
            }
        })
    }

    // Закрыть попап с анимацией
    function closePopup() {
        isPopupClosing = true
        popupOverlay.classList.remove("not-closing")
        popupOverlay.classList.add("closing")
        setTimeout(() => {
            popupOverlay.style.display = "none"
        }, 700) // Время анимации
    }

    // Закрытие попапа по клику на фон
    popupOverlay.addEventListener("click", function () {
        closePopup()
    })

    // Прекращаем всплытие клика на попапе
    popup.addEventListener("click", function (e) {
        e.stopPropagation()
    })

    // Закрытие попапа по кнопке
    closePopupBtn.addEventListener("click", closePopup)

    // Логика для отправки формы (для примера)
    popupForm.addEventListener("submit", function (event) {
        event.preventDefault()
        // Здесь будет логика для отправки данных формы
        console.log("Форма отправлена!")
        closePopup()
    })

    const sendRequestPopupBtns = document.querySelectorAll('.send__request__btn')
    sendRequestPopupBtns.forEach(btn => {
        btn.addEventListener('click', showPopup)
    })
})