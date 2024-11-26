
document.addEventListener('DOMContentLoaded', () => {
    // Форма 1
    const form1 = document.getElementById('form1');
    const quantityInput = document.getElementById('quantity');
    const productSelect = document.getElementById('product-select');
    const resultElement = document.getElementById('res');
    const calculateButton1 = document.getElementById('calculate-button-1');
    const quantityPattern = /^[1-9][0-9]*$/;

    calculateButton1.addEventListener('click', (event) => {
        event.preventDefault();

        const quantity = quantityInput.value.trim();
        const productPrice = productSelect.value;

        if (!quantityPattern.test(quantity)) {
            resultElement.innerText = "Ошибка: введите корректное количество.";
            return;
        }

        const total = quantity * productPrice;
        resultElement.innerText = "Стоимость: " + total + " руб.";
    });

});
