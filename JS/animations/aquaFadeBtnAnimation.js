document.addEventListener('DOMContentLoaded', () => {
    console.log('55')
    const btns = document.querySelectorAll('.aqua__fade__btn');

function updateBtnAnimation(btn, isBtnAnimation) {
    if (isBtnAnimation) {
        btn.classList.add('animate__bc');
        btn.classList.remove('animate__bc__to__default');
    } else {
        btn.classList.remove('animate__bc');
        btn.classList.add('animate__bc__to__default');
    }
}

// Обработчики для эффекта у кнопок голубого фейда
btns.forEach((btn) => {
    btn.dataset.isBtnAnimation = 'false'

    btn.addEventListener('mouseover', () => {
        btn.dataset.isBtnAnimation = 'true'
        updateBtnAnimation(btn, true)
    });

    btn.addEventListener('mouseout', () => {
        btn.dataset.isBtnAnimation = 'false'
        updateBtnAnimation(btn, false);
    });
});
})