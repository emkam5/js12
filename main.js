document.addEventListener('DOMContentLoaded', function () {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function () {
            const content = this.nextElementSibling;

            // Закрытие других элементов аккордеона
            const allContents = document.querySelectorAll('.accordion-content');
            allContents.forEach(item => {
                if (item !== content) {
                    item.style.maxHeight = null;
                }
            });

            // Переключение текущего элемента
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px"; // Установка высоты на высоту содержимого
            }
        });
    });
});
