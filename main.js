const App = (function () {
    const btn = document.querySelector(".bring-info__learn-more");
    const text = document.querySelector(".bring-info__learn_more-text");
    const inputPhone = document.querySelector(".js-phone-input");
    const inputName = document.querySelector(".js-name-input");
    const inputRegion = document.querySelector('.form__region-input');
    const inputDate = document.querySelector('.js-date');
    const errorPlace = document.querySelector(".js-error-name");
    const phoneError = document.querySelector(".js-phone-error");
    const regionError = document.querySelector('.js-error-region');
    const sel = document.querySelector(".form__citizenship-input");
    const value = sel.options[sel.selectedIndex].value;
    const countryOk = document.querySelector(".form__country");
    const inputs = document.querySelectorAll(".js-ascent-text");
    const clearField = document.querySelectorAll(".js-clear-field");
    const shortAppSwitch = document.querySelector(".form__fill-short-app-input");
    const recallForm = document.querySelector(".form__recall");
    const citizenship = document.querySelector(".form__citizenship");
    const incorrectPhoneMessage = "Некорректный номер телефона";
    const emptyPhoneMessage = "Необходимо указать номер телефона";

    return {
        init: function () {
            this.learnMoreBtn();
            // this.appearError();
            // this.regionError();
            this.citizenship();
            this.ascentText();
            this.ascentText();
            // this.clearField();
            // this.appearCross();
            this.toggleModal(".js-open-btn-conditions", ".js-popup--condition", ".js-close-btn-conditions");
            this.toggleModal(".js-open-btn-friend", ".js-popup--friend-condition", ".js-close-btn-friend");
            this.toggleModal(".js-number-transfer", ".js-popup--number-transfer", ".js-close-btn-number-transfer");
            this.addPlaceholder();
            this.recallCheckbox();
            // this.phoneError();
        },

        // phoneError: function () {
        //     inputPhone.addEventListener("input", function (event) {
        //         const isValidForm = event.target.checkValidity();
        //         const regStr = "\\+7\\s\\d{3}\\s\\d{3}-\\d{2}-\\d{2}";
        //         const regPhone = new RegExp(regStr, "u");
        //         console.log('value');
        //         console.log(inputPhone.value);
        //         console.log(inputPhone.unmaskedValue.length);
        //         if (isValidForm && regPhone.test(inputPhone.value)) {
        //             phoneError.innerHTML = "";
        //         } else {
        //             phoneError.innerHTML = incorrectPhoneMessage;
        //         }
        //         if (inputPhone.value === "+7(") {
        //             inputPhone.innerHTML = emptyPhoneMessage;
        //         } else {
        //             inputPhone.innerHTML = "";
        //         }
        //     });
        // },

        recallCheckbox: function () {
            //При клике на "короткая заявка"
            shortAppSwitch.addEventListener("click", function () {
                if (shortAppSwitch.checked) {
                    const linkNextButton = document.querySelector('.form__next-link');
                    const nextButton = linkNextButton.querySelector('.form__next-btn');

                    //меняется текст на кнопке переключения стр
                    nextButton.innerHTML = "Короткая заявка";
                    //меняется хеш на кнопке переключения стр
                    linkNextButton.href = "#application-done";

                    recallForm.style.display = "block";
                    citizenship.style.display = "none";
                } else {
                    const linkNextButton = document.querySelector('.form__next-link');
                    const nextButton = linkNextButton.querySelector('.form__next-btn');

                    //меняется текст на кнопке переключения стр
                    nextButton.innerHTML = "Далее";
                    //меняется хеш на кнопке переключения стр
                    linkNextButton.href = "#phone-number-wrap";

                    recallForm.style.display = "none";
                    citizenship.style.display = "block";
                }
            });

        },

        learnMoreBtn: function () { // объявляем функцию
            btn.addEventListener("click", function () { // добавляем к константе обработчик событий "клик", который вызывает функцию
                // btn.classList.add("display-none"); // объявляем функцию
                // text.classList.add("display-block"); // объявляем функцию
                btn.style.display = "none"; // на константу накидываем стиль, свойство и значение "none", что выполняется вышеуказанной ф-цией, которая запускается благодаря собитию "клик"
                text.style.display = "block"; // тоже самое, только блок
            });
        },

        // appearError: function () {  // объявляем функцию
        //     inputName.addEventListener("change", function () {  // добавляем к переменной input обработчик событий, который реагирует, в случае если с элемента снимается фокус, и вызывает функцию
        //         console.log(inputName.value.length);
        //         if (inputName.value.length === 0) {  // Если значение в условии истинно, то есть значение селектора "нестрого" равно нулю выполняется функция.
        //             errorPlace.innerHTML = "Укажите Ваше ФИО";  // В переменную вставляем  строку
        //             inputName.classList.add("error-border"); // добавляем класс к переменной через метод класс-лист
        //             inputName.classList.remove("pseudo-hover");   // снимаем с переменной класс, через метод класс-лист
        //         } else {  // если значение вышеуказанного условия не истинно, выполняется другая функция, нижеследующая
        //             errorPlace.innerHTML = ""; // в переменную также вставляется строка, с другими значениями
        //             inputName.classList.remove("error-border");  // снимаем с переменной класс, через метод класс-лист
        //             inputName.classList.add("pseudo-hover"); // добавляем класс к переменной через метод класс-лист
        //         }
        //     });
        // },

        // regionError: function () {  // объявляем функцию
        //     inputRegion.addEventListener("change", function () {  // добавляем к переменной input обработчик событий, который реагирует, в случае если с элемента снимается фокус, и вызывает функцию
        //         console.log(inputName.value.length);
        //         if (inputRegion.value.length === 0) {  // Если значение в условии истинно, то есть значение селектора "нестрого" равно нулю выполняется функция.
        //             regionError.innerHTML = "Укажите Ваше город или регион";  // В переменную вставляем  строку
        //             inputRegion.classList.add("error-border"); // добавляем класс к переменной через метод класс-лист
        //             inputRegion.classList.remove("pseudo-hover");   // снимаем с переменной класс, через метод класс-лист
        //         } else {  // если значение вышеуказанного условия не истинно, выполняется другая функция, нижеследующая
        //             regionError.innerHTML = ""; // в переменную также вставляется строка, с другими значениями
        //             inputRegion.classList.remove("error-border");  // снимаем с переменной класс, через метод класс-лист
        //             inputRegion.classList.add("pseudo-hover"); // добавляем класс к переменной через метод класс-лист
        //         }
        //     });
        // },

        addPlaceholder: function () {

            for (let i = 0; i < inputs.length; i++) {
                inputs[i].addEventListener("focus", function () {
                    inputs[i].classList.add("is-active-placeholder");
                });

                inputs[i].addEventListener("blur", function () {
                    inputs[i].classList.remove("is-active-placeholder");
                });
            }
        },

        citizenship: function () {
            sel.addEventListener("click", function () {
                if (sel.selectedIndex === 0) {
                    countryOk.style.display = "none";
                } else {
                    countryOk.style.display = "block";
                }
            });
        },

        ascentText: function () { // объявляем функцию, в параметры записываем переменную labelClass
            for (let i = 0; i < inputs.length; i++) {  //объявляем цикл, который начинается с переменной i, к которой присваиваем значение 0; переменная i меньше чем массив inputs.length и инкрементацией последовательно перебирает его, выполняя следующие команды.
                inputs[i].addEventListener("input", function () {  // к сметченной с массивом [i] переменной инпут, навешивается событие blur, при этом объявляется функция при которой
                    if (inputs[i].value.length > 0) { // если значение сметченной с массивом [i] переменной инпут больше чем 0
                        inputs[i].classList.add("form__input-up"); // то к сметченной с массивом [i] переменной инпут добавляется класс
                    } else {
                        inputs[i].classList.remove("form__input-up");	// или убирается класс
                    }
                    clearCross();
                });

            }
        },

        // clearField: function () {  // объявляем функцию
        //
        //     for (let i = 0; i < clearField.length; i++) {
        //         clearField[i].addEventListener("click", function () {
        //             inputs[i].value = "";
        //             if (inputs[i].value.length > 0) {
        //                 inputs[i].classList.add("form__input-up");
        //             } else {
        //                 inputs[i].classList.remove("form__input-up");
        //             }
        //
        //             App.appearCross();
        //         });
        //     }
        // },
        //
        // appearCross: function () {
        //     for (let i = 0; i < clearField.length; i++) {
        //         if (inputs[i].value.length > 0) {
        //             clearField[i].style.display = "block";
        //         } else {
        //             clearField[i].style.display = "none";
        //         }
        //     }
        // },

        toggleModal: function (button, popup, closeButton) {
            const conditionInfo = document.querySelectorAll(button);
            const modal = document.querySelector(popup);
            const closeBtn = document.querySelector(closeButton);
            conditionInfo.forEach(item => {
                item.addEventListener("click", function () {
                    modal.classList.add("modal");
                    modal.classList.remove("popup");
                });

                closeBtn.addEventListener("click", function () {
                    modal.classList.add("popup");
                    modal.classList.remove("modal");
                })
            })


        }
    }
})();

App.init();


function showTariffOptions() {
    const input = document.querySelector(".js-open-tariff");
    const tariffBlock = document.querySelector(".additional-offer");

    input.addEventListener("blur", function () {
        if (input.value.length > 0) {
            tariffBlock.classList.remove("hidden");
        }
    });
}


showTariffOptions();


function saveNumberNewNumberToggle() {
    const block = document.querySelectorAll('.phone-number');

    block.forEach(item => {
        const save = item.querySelector(".phone-number__save-number");
        const newNumber = item.querySelector(".phone-number__new-number");
        const newNumberBlock = item.querySelector(".new-number__options");
        const saveBlock = item.querySelector(".save-number__options");
        const correctBtn = document.querySelector('.correct-number__next-bth');

        save.addEventListener("click", function () {
            if (save.checked) {
                saveBlock.classList.add("visible");
                saveBlock.classList.remove("hidden");
                newNumberBlock.classList.add("hidden");
                newNumberBlock.classList.remove("visible");

                const number = document.querySelector('.correct-number__phone-number');
                correctBtn.innerHTML = number.value;
            }
        });

        newNumber.addEventListener("click", function () {
            if (newNumber.checked) {
                saveBlock.classList.remove("visible");
                saveBlock.classList.add("hidden");

                newNumberBlock.classList.remove("hidden");
                newNumberBlock.classList.add("visible");

                const activeNumberOne = item.querySelector('.phone-number__numbers input:checked');

                if(activeNumberOne){
                    correctBtn.innerHTML = activeNumberOne.value;
                }
            }
        })
    })
}

saveNumberNewNumberToggle();

document.querySelectorAll('.application-internet__options').forEach(item => {
    item.ApplicationInternet = new ApplicationInternet(item);
});

function ApplicationInternet(item) {
    this.item = item;
    this.button = this.item.querySelector('.application-internet__button');

    this.onClickButton = () => {
        if (this.item.classList.contains('application-internet__options_open')) {
            this.close();
        } else {
            this.open();
        }
    };

    //навешиваем функцию при событии click
    this.button.addEventListener('click', this.onClickButton);

    this.open = () => {
        this.item.classList.add('application-internet__options_open');
    };

    this.close = () => {
        this.item.classList.remove('application-internet__options_open');
    };
}

const pageBlockZero = document.querySelector('.block-zero');
const pageBlockOne = document.querySelector('.block-one');
const pageBlockTwo = document.querySelector('.block-two');
const pageBlockThree = document.querySelector('.block-three');
const pageBlockFour = document.querySelector('.block-four');

function calc(){
    //находим форму
    const form = document.querySelector('.form');
    const page = form.querySelectorAll('.additional-offer');
    const bucketZero = document.querySelector('.bucket__price-zero');
    const bucketOne = document.querySelector('.bucket__price-one');
    const bucketTwo = document.querySelector('.bucket__price-two');
    const bucketThree = document.querySelector('.bucket__price-three');
    const bucketFour = document.querySelector('.bucket__price-four');

    const bucket = document.querySelectorAll('.bucket-wrapper');
    const totalPrice = document.querySelector('[data-name="price"]');


    page.forEach(item => {
        //находим все элементы калькулятора
        const block = item.querySelectorAll('.additional-offer__form-item');
        const priceValue =  item.querySelector('.price');
        //в каждом элементе калькулятора ищем функциональный элемент формы
        block.forEach(item => {
            const el = item.querySelectorAll('.additional-offer__form-el');
            //на каждый функциональный элемент формы навешиваем событие
            el.forEach(item => {
                item.addEventListener('input', () => calculator());

            });
        });

        function calculator(){
            let price = 0;

            //в каждом блоке ищем функциональный элемент формы
            block.forEach(item => {
                const el = item.querySelectorAll('.additional-offer__form-el');
                //проверяем каждый функц. эл. формы
                el.forEach(item => {
                    if (item.type !== 'checkbox' || item.type === 'checkbox' && item.checked) {
                        price += Number(item.value);
                    }
                });
            });
            priceValue.innerHTML = price;
            if(item === pageBlockZero){
                bucketZero.innerHTML = price;
            }else if(item === pageBlockOne){
                bucketOne.innerHTML = price;
            }else if(item === pageBlockTwo){
                bucketTwo.innerHTML = price;
            }else if(item === pageBlockThree){
                bucketThree.innerHTML = price;
            }else if(item === pageBlockFour){
                bucketFour.innerHTML = price;
            }
        }
        calculator();
    });
    let sum = 0;
    bucket.forEach(item => {
        if(!item.classList.contains('hidden')){
            const price = item.querySelectorAll('.bucket__price');
            for(let i = 0; i < price.length; i++){
                sum += Number(price[i].innerHTML);
            }
        }
    });
    totalPrice.innerHTML = String(`${sum}`);
}

calc();


//если на localhost
if (location.hostname === 'localhost') {
    //если есть хеш
    if (location.hash) {
        updatePage();
    }
} else {
    //если не localhost, то старт всегда с этого хеша
    location.hash = '#application-form';
}

//навешиваем функцию при изменении хеша(событие hashchange)
window.addEventListener("hashchange", () => {
    updatePage()
});

function updatePage() {
    //находим все страницы в документе
    const pages = document.querySelectorAll('.page');

    //используем метод substring чтобы избавиться от #
    const active = location.hash.substring(1);

    //проверяем каждую страницу
    pages.forEach(item => {

        // dataset === data-page в разметке
        if (item.dataset.page === active) {
            item.classList.add('page_active');
        } else {
            item.classList.remove('page_active');
        }
    })
}


//ф-ция проверки согласия на условия передачи ин-ции
function check() {
    //находим все страницы в документе
    const pages = document.querySelectorAll('.page');
    // console.log(pages);
    //проверяем каждую страницу
    pages.forEach(item => {
        // console.log(item);
        // console.log(item.querySelector('.form__next-btn'));
        const checkbox = item.querySelector('.condition__checkbox');
        const nextButton = item.querySelector('.form__next-btn');
        const nextPage = item.querySelector(('.form__next-link'))
        // console.log(nextButton);
        //проверяем чтобы кнопка была активна

        if (nextButton !== null && checkbox) {


            checkbox.addEventListener('click', () => {
                if (!checkbox.checked) {
                    nextPage.classList.add('removal');
                } else {
                    nextPage.classList.remove('removal');
                }
            });

            // навешиваем на кнопку событие клик
            nextButton.addEventListener('click', () => {
                //если галочка не стоит
                if (!checkbox.checked) {
                    //используем метод preventDefault() для отмены переключения стр
                    event.preventDefault();
                }
            })
        }


    })
}

check();


function testPhone() {
    //находим все импуты, где должны записываться только цифры
    const el = document.querySelectorAll(".form__phone-input");

    el.forEach(item => {
        item.addEventListener('click', () => {
            IMask(
                item, {
                    mask: '+{7}(000)000-00-00',
                    lazy: false
                });
        });


    });
}

testPhone();

function errorPhone(){
    const block = document.querySelectorAll('.form__phone');
    block.forEach(item => {
        const el = item.querySelector(".form__phone-input");
        const phoneError = item.querySelector(".js-phone-error");
        const incorrectPhoneMessage = "Некорректный номер телефона";
        const emptyPhoneMessage = "Необходимо указать номер телефона";
        phoneError.innerHTML = "";
        el.addEventListener("input", function (event) {
            // если длина value === 11 с учетом только цифр(replace)
            if(el.value.replace(/[^0-9]/g, '').length === 11){
                //то никакая надпись не выводится
                phoneError.innerHTML = "";
            }else if(el.value === "+7("){
                phoneError.innerHTML = emptyPhoneMessage;
            }else{
                phoneError.innerHTML = incorrectPhoneMessage;
            }
        });
    })
}

errorPhone();



new Pikaday({
    field: document.getElementById('datepicker'),
    format: 'D/M/YYYY',
    toString(date, format) {
        // you should do formatting based on the passed format,
        // but we will just return 'D/M/YYYY' for simplicity
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const value = `${day}.${month}.${year}`;
        date.value = value;
        const block = document.getElementById('datepicker');
        block.value = value;
        if (block.value.length > 0) {
            block.classList.add("form__input-up");
        } else {
            block.classList.remove("form__input-up");
        }
        return value;

    },

});

function testData() {
	//находим все импуты, где должны записываться только цифры и .
	const el = document.querySelectorAll(".form__date-input");

	el.forEach(item => {
		// на каджый инпут навешиваем событие onkeyup
        // (возникает в момент отпускания нажатой клавиши)
        item.onkeyup = function test(){
            const value = item.value;

            const pattern = /[()&^$?/%#\!@;+_*=":'a-zA-Zа-яА-Я]/;

            //делаем проверку с помощью метода test
            //(выполняет поиск сопоставления)
            if(pattern.test(value)){
                //Метод replace() возвращает новую строку с сопоставлениями, заменёнными на заменитель
                item.value = value.replace(pattern, '');
            }

        }
	})
}

testData();


function testText() {
    //находим все импуты, где должны записываться только буквы
    const el = document.querySelectorAll(".form__text-input");

    el.forEach(item => {
        //на каджый инпут навешиваем событие onkeyup
        //(возникает в момент отпускания нажатой клавиши)
        item.onkeyup = function Auto() {
            let value = item.value;

            //создаем объект для корректировки строки
            const replacer = {
                "q": "й", "w": "ц", "e": "у", "r": "к", "t": "е", "y": "н", "u": "г",
                "i": "ш", "o": "щ", "p": "з", "[": "х", "]": "ъ", "a": "ф", "s": "ы",
                "d": "в", "f": "а", "g": "п", "h": "р", "j": "о", "k": "л", "l": "д",
                ";": "ж", "'": "э", "z": "я", "x": "ч", "c": "с", "v": "м", "b": "и",
                "n": "т", "m": "ь", ",": "б", ".": "ю", "/": "."
            };

            let replace;

            //создаем цикл,чтобы не потерять длину
            for (let i = 0; i < value.length; i++) {

                //проверяем, что значемние value приобразованное в нижний регистр определено
                if (replacer[value[i].toLowerCase()] !== undefined) {

                    //если значение value в нижнем регистре
                    if (value[i] === value[i].toLowerCase()) {
                        //то в replace записывается значение value в низнем регистре
                        replace = replacer[value[i].toLowerCase()];
                    } else
                    // если значение value в верхнем регистре
                    if (value[i] === value[i].toUpperCase()) {
                        //то в replace записывается значение value в верхнем регистре
                        replace = replacer[value[i].toLowerCase()].toUpperCase();
                    }
                    // Метод replace() возвращает новую строку с сопоставлениями, заменёнными на заменитель
                    item.value = value.replace(value[i], replace);
                }
            }
        }
    })
}

testText();

function testName() {
    const block = document.querySelectorAll('.form__name');
    block.forEach(item => {
        const name = item.querySelector('.form__name-input');
        name.onkeyup = function test(){
            const value = name.value;
            const pattern = /[()&^$?/%#\!@;+_*=":'0-9]/;
            //делаем проверку с помощью метода test
            //(выполняет поиск сопоставления)
            if(pattern.test(value)){
                //Метод replace() возвращает новую строку с сопоставлениями, заменёнными на заменитель
                name.value = value.replace(pattern, '');
            }
            //создаем объект для корректировки строки
            const replacer = {
                "q": "й", "w": "ц", "e": "у", "r": "к", "t": "е", "y": "н", "u": "г",
                "i": "ш", "o": "щ", "p": "з", "[": "х", "]": "ъ", "a": "ф", "s": "ы",
                "d": "в", "f": "а", "g": "п", "h": "р", "j": "о", "k": "л", "l": "д",
                ";": "ж", "'": "э", "z": "я", "x": "ч", "c": "с", "v": "м", "b": "и",
                "n": "т", "m": "ь", ",": "б", ".": "ю", "/": "."
            };

            let replace;

            //создаем цикл,чтобы не потерять длину
            for (let i = 0; i < value.length; i++) {

                //проверяем, что значемние value приобразованное в нижний регистр определено
                if (replacer[value[i].toLowerCase()] !== undefined) {

                    //если значение value в нижнем регистре
                    if (value[i] === value[i].toLowerCase()) {
                        //то в replace записывается значение value в низнем регистре
                        replace = replacer[value[i].toLowerCase()];
                    } else
                    // если значение value в верхнем регистре
                    if (value[i] === value[i].toUpperCase()) {
                        //то в replace записывается значение value в верхнем регистре
                        replace = replacer[value[i].toLowerCase()].toUpperCase();
                    }
                    // Метод replace() возвращает новую строку с сопоставлениями, заменёнными на заменитель
                    name.value = value.replace(value[i], replace);
                }
            }
            const formatName = /^[А-ЯЁ][а-яё]+(-[А-ЯЁ][а-яё]+)? [А-ЯЁ][а-яё]+( [А-ЯЁ][а-яё]+)?$/.test(name.value);
            const errorPlace = item.querySelector(".js-error-name");
            if (formatName !== true) {
                // В переменную вставляем  строку
                errorPlace.innerHTML = "Укажите Ваше ФИО";
                // добавляем класс к переменной через метод класс-лист
                name.classList.add("error-border");
                // снимаем с переменной класс, через метод класс-лист
                name.classList.remove("pseudo-hover");
            } else {
                // в переменную также вставляется строка, с пустым значениями
                errorPlace.innerHTML = "";
                // снимаем с переменной класс, через метод класс-лист
                name.classList.remove("error-border");
                // добавляем класс к переменной через метод класс-лист
                name.classList.add("pseudo-hover");
            }
            clearCross();
        };
    })

}
testName();

function errorRegion(){
    const block = document.querySelectorAll('.form__region');
    block.forEach(item => {
        const inputRegion = item.querySelector('.form__region-input');
        const regionError = item.querySelector('.js-error-region');
        inputRegion.onkeyup = function test(){
            const value = inputRegion.value;
            //создаем объект для корректировки строки
            const replacer = {
                "q": "й", "w": "ц", "e": "у", "r": "к", "t": "е", "y": "н", "u": "г",
                "i": "ш", "o": "щ", "p": "з", "[": "х", "]": "ъ", "a": "ф", "s": "ы",
                "d": "в", "f": "а", "g": "п", "h": "р", "j": "о", "k": "л", "l": "д",
                ";": "ж", "'": "э", "z": "я", "x": "ч", "c": "с", "v": "м", "b": "и",
                "n": "т", "m": "ь", ",": "б", ".": "ю", "/": "."
            };

            let replace;

            //создаем цикл,чтобы не потерять длину
            for (let i = 0; i < value.length; i++) {

                //проверяем, что значемние value приобразованное в нижний регистр определено
                if (replacer[value[i].toLowerCase()] !== undefined) {

                    //если значение value в нижнем регистре
                    if (value[i] === value[i].toLowerCase()) {
                        //то в replace записывается значение value в низнем регистре
                        replace = replacer[value[i].toLowerCase()];
                    } else
                    // если значение value в верхнем регистре
                    if (value[i] === value[i].toUpperCase()) {
                        //то в replace записывается значение value в верхнем регистре
                        replace = replacer[value[i].toLowerCase()].toUpperCase();
                    }
                    // Метод replace() возвращает новую строку с сопоставлениями, заменёнными на заменитель
                    inputRegion.value = value.replace(value[i], replace);
                }
            }
            const formatRegion = /^[А-ЯЁ]/.test(inputRegion.value);
            //если значение не соответствует заданному формату
            if (formatRegion !== true || inputRegion.value.length < 2){
                // В переменную вставляем  строку
                regionError.innerHTML = "Укажите Ваше город или регион";
                // добавляем класс к переменной через метод класс-лист
                inputRegion.classList.add("error-border");
                // снимаем с переменной класс, через метод класс-лист
                inputRegion.classList.remove("pseudo-hover");
            } else {
                // если значение вышеуказанного условия не истинно, выполняется другая функция, нижеследующая
                // в переменную также вставляется строка, с другими значениями
                regionError.innerHTML = "";
                // снимаем с переменной класс, через метод класс-лист
                inputRegion.classList.remove("error-border");
                // добавляем класс к переменной через метод класс-лист
                inputRegion.classList.add("pseudo-hover");
            }
            clearCross();
        };
    })
}
errorRegion();

function testPostcode(){
     IMask(
        document.getElementById('regexp-mask'),
        {
            mask: /^[1-6]\d{0,5}$/
        });
}
testPostcode();

function errorPostcode(){
    const inputPostcode = document.querySelector('.form__postcode-input');
    const postcodeError = document.querySelector('.js-error-postcode');
    inputPostcode.addEventListener('input', event => {
        if(inputPostcode.value.replace(/[^0-9]/g, '').length !== 6){
            // В переменную вставляем  строку
            postcodeError.innerHTML = "Укажите индекс Вашего города";
            // добавляем класс к переменной через метод класс-лист
            inputPostcode.classList.add("error-border");
            // снимаем с переменной класс, через метод класс-лист
            inputPostcode.classList.remove("pseudo-hover");
        }else {
            // если значение вышеуказанного условия не истинно, выполняется другая функция, нижеследующая
            // в переменную также вставляется строка, с другими значениями
            postcodeError.innerHTML = "";
            // снимаем с переменной класс, через метод класс-лист
            inputPostcode.classList.remove("error-border");
            // добавляем класс к переменной через метод класс-лист
            inputPostcode.classList.add("pseudo-hover");
        }
        clearCross();
    })

}
errorPostcode();


//выделяет избранное
function paintingStars() {
    const block = document.querySelectorAll('.new-number__options');

    block.forEach(item => {
        const container = item.querySelectorAll('.phone-number__numbers-container');
        const favoritesNumbers = item.querySelector('.favorites-btn');

        container.forEach(item => {
            const star = item.querySelector('.phone-number__price');
            const checkbox = item.querySelector('input[type="checkbox"]');

            checkbox.addEventListener('click', () => {
                //добавляем метод toggle. Если класс color есть, он удаляется, если нет, то добавляется;
                star.classList.toggle('color');

                //вызываес функцию,находящуюся ниже
                favorites();
                const starActive = star.classList.contains('color');
                const active = favoritesNumbers.classList.contains('active');

                //если при клике звезда снимается и мы находимся в только фаворитах
                if (active && !starActive) {
                    //скрываем номер
                    item.classList.add('hidden');
                }
            })
        })
    })
}

paintingStars();


//активирует кнопку "показать избранное"
function favorites() {
    const block = document.querySelectorAll('.new-number__options');


    block.forEach(item => {
        const blockNumbers = item.querySelector('.phone-number__numbers');
        const container = blockNumbers.querySelectorAll('.phone-number__numbers-container');

        const favoritesNumbers = item.querySelector('.favorites-btn');
        const favoritesName = favoritesNumbers.querySelectorAll('.favorites-items');

        const nextNumbers = item.querySelector('.numbers-scroller__show-next');
        const nextNumbersItems = nextNumbers.querySelectorAll('.favorites-items');

        const prevNumbers = item.querySelector('.numbers-scroller__show-prev');
        const prevNumbersItem = prevNumbers.querySelectorAll('.favorites-items');

        const arr = Array.from(container);

        //ф-ция для метода some
        function stars(el) {
            //возвращает элементы у которых есть активные чекбоксы
            return el.querySelector('input[type="checkbox"]:checked');
        }

        //проверяем,что в arr есть хотя бы один активный чекбокс
        if (arr.some(stars) === true) {

            //для каждого элемента кнопки "Показать избранное"
            favoritesName.forEach(item => {
                item.classList.remove('favorites');
                favoritesNumbers.classList.remove('removal');
            })
        } else {
            //для каждого номера
            for (let i = 0; i < container.length; i++) {
                console.log('stars');
                if (i < 7) {
                    //удаляем, скрывающий класс с первых 7 номеров
                    container[i].classList.remove('hidden');
                } else {
                    //добавляем всем остальным
                    container[i].classList.add('hidden');
                }
            }
            //снимаем блокировку события с кнопки "предыдущие"
            prevNumbers.classList.remove('removal');
            //снимаем блокировку события с кнопки "следующие"
            nextNumbers.classList.remove('removal');

            //у каждого элемента кнопки "следующие"
            nextNumbersItems.forEach(item => {
                //удаляем обесцвечивающий класс
                item.classList.remove('favorites');
            });

            //для каждого элемента кнопки "показать избранное"
            favoritesName.forEach(item => {
                favoritesNumbers.classList.remove('active');
                item.classList.add('favorites');

            });

            //находим элементы кнопки "показать избранное"
            for (let i = 0; i < favoritesName.length; i++) {
                //для первого элемента
                if (i === 0) {
                    //меняем текст
                    favoritesName[i].innerHTML = "Показать избранное";
                } else if (i === 1) {
                    //у второго удаляем скрывающий класс
                    favoritesName[i].classList.remove('hidden');
                }
            }

        }
    })
}

//активация/блокировка кнопок переключения номеров
//что происходит при нажатии "показать избранное"
function onlyFavorites() {
    const block = document.querySelectorAll('.new-number__options');

    block.forEach(item => {
        const numbers = item.querySelector('.phone-number__numbers-block1');
        const elem = numbers.querySelectorAll('.phone-number__numbers-container');
        const nextNumbersBtn = item.querySelector('.numbers-scroller__show-next');
        const nextNumbersBtnItems = nextNumbersBtn.querySelectorAll('.favorites-items');

        const prevNumbersBtn = item.querySelector('.numbers-scroller__show-prev');
        const prevNumbersBtnItems = prevNumbersBtn.querySelectorAll('.favorites-items');

        const showFavorites = item.querySelector('.favorites-btn');
        const showFavoritesItems = showFavorites.querySelectorAll('.favorites-items');

        //при нажатии на "следующие"
        nextNumbersBtn.addEventListener('click', () => {

            //для каждого номера
            elem.forEach(item => {
                const result = item.classList.contains('hidden');

                //если есть класс hidden
                if (result === true) {
                    //то удаляем
                    item.classList.remove('hidden');
                } else {
                    //если нет,то добавляем
                    item.classList.add('hidden');
                }
            });

            //для каждого элемента кнопки "следующие"
            nextNumbersBtnItems.forEach(item => {
                //добавляем обесцвечивающий класс
                item.classList.add('favorites');
            });

            //для кнопки "следующие" добавляем класс, блокирующий события
            nextNumbersBtn.classList.add('removal');

            //для каждого элемента кнопки "предыдущие"
            prevNumbersBtnItems.forEach(item => {
                //добавляем выделяющий класс
                item.classList.remove('favorites');
            });
            //у кнопки "предыдущие" удаляем класс, блокирующий события
            prevNumbersBtn.classList.remove('removal');

        });

        //при нажатии на "предыдущие"
        prevNumbersBtn.addEventListener('click', () => {

            //для каждого номера
            elem.forEach(item => {
                const result = item.classList.contains('hidden');
                //если есть класс hidden
                if (result === true) {
                    //то удаляем
                    item.classList.remove('hidden');
                } else {
                    //если нет,то добавляем
                    item.classList.add('hidden');
                }
            });

            //для каждого элемента кнопки "предыдущие"
            prevNumbersBtnItems.forEach(item => {
                //добавляем обесцвечивающий класс
                item.classList.add('favorites');
            });
            //для кнопки  "предыдущие" добавляем класс, блокирующий события
            prevNumbersBtn.classList.add('removal');

            //для каждого элемента кнопки "следующие"
            nextNumbersBtnItems.forEach(item => {
                //добавляем выделяющий класс
                item.classList.remove('favorites');
            });
            //у кнопки "следующие" удаляем класс, блокирующий события
            nextNumbersBtn.classList.remove('removal');

        });

        //при нажатии "показать избранное"
        showFavorites.addEventListener('click', () => {

            //если имеется класс active
            if (showFavorites.classList.contains('active')) {


                for (let i = 0; i < elem.length; i++) {
                    if (i < 7) {
                        //удаляем, скрывающий класс с первых 7 номеров
                        elem[i].classList.remove('hidden');
                    } else {
                        //добавляем всем остальным
                        elem[i].classList.add('hidden');
                    }
                }
                //снимаем блокировку события с кнопки "предыдущие"
                prevNumbersBtn.classList.remove('removal');
                //снимаем блокировку события с кнопки "следующие"
                nextNumbersBtn.classList.remove('removal');

                //у каждого элемента кнопки "следующие"
                nextNumbersBtnItems.forEach(item => {
                    //удаляем обесцвечивающий класс
                    item.classList.remove('favorites');
                });

                //находим элементы кнопки "показать избранное"
                for (let i = 0; i < showFavoritesItems.length; i++) {
                    //для первого элемента
                    if (i === 0) {
                        //меняем текст
                        showFavoritesItems[i].innerHTML = "Показать избранное";
                    } else if (i === 1) {
                        //у второго удаляем скрывающий класс
                        showFavoritesItems[i].classList.remove('hidden');
                    }
                }

                //у кнопки "показать избранное" удаляем класс active
                showFavorites.classList.remove('active');


            } else {//если класса active нет

                //для каждого номера
                elem.forEach(item => {
                    const checkbox = item.querySelector('input[type="checkbox"]');
                    const result = item.classList.contains('hidden');


                    //если чекбокс активен и блок скрыт
                    if (checkbox.checked && result === true) {
                        //то удаляем класс, скрывающий блок
                        item.classList.remove('hidden');
                    } else if (!checkbox.checked && result === false) {//если чекбокс не активен и блок не скрыт
                        //то добавляем класс, скрывающий блок
                        item.classList.add('hidden');
                    }
                });

                //для кнопки  "предыдущие" добавляем класс, блокирующий события
                prevNumbersBtn.classList.add('removal');
                //для кнопки  "следующие" добавляем класс, блокирующий события
                nextNumbersBtn.classList.add('removal');

                //для каждого элемента кнопки "следующие"
                nextNumbersBtnItems.forEach(item => {
                    //добавляем обесцвечивающий класс
                    item.classList.add('favorites');
                });

                //для каждого элемента кнопки "предыдущие"
                prevNumbersBtnItems.forEach(item => {
                    //добавляем обесцвечивающий класс
                    item.classList.add('favorites');
                });

                //находим элементы кнопки "показать избранное"
                for (let i = 0; i < showFavoritesItems.length; i++) {
                    //для первого элемента
                    if (i === 0) {
                        //меняем текст
                        showFavoritesItems[i].innerHTML = "Показать все номера";
                    } else if (i === 1) {
                        //у второго добавляем скрывающий класс
                        showFavoritesItems[i].classList.add('hidden');
                    }
                }

                //кнопке "показать избранное" добавляем класс active
                showFavorites.classList.add('active');
            }

        })

    })
}

onlyFavorites();

const internet = document.querySelectorAll('[data-name="internet"]');
const addMoreInternet = document.querySelectorAll('[data-name="add-more-internet"]');
const addMoreTwoInternet = document.querySelectorAll('[data-name="add-more-two-internet"]');
const addMoreThreeInternet = document.querySelectorAll('[data-name="add-more-three-internet"]');
const addMoreFourInternet = document.querySelectorAll('[data-name="add-more-four-internet"]');

const calls = document.querySelectorAll('[data-name="calls"]');
const addMoreCalls = document.querySelectorAll('[data-name="add-more-calls"]');
const addMoreTwoCalls = document.querySelectorAll('[data-name="add-more-two-calls"]');
const addMoreThreeCalls = document.querySelectorAll('[data-name="add-more-three-calls"]');
const addMoreFourCalls = document.querySelectorAll('[data-name="add-more-four-calls"]');

const messengers = document.querySelectorAll('[data-name="messengers"]');
const addMoreMessengers = document.querySelectorAll('[data-name="add-more-messengers"]');
const addMoreTwoMessengers = document.querySelectorAll('[data-name="add-more-two-messengers"]');
const addMoreThreeMessengers = document.querySelectorAll('[data-name="add-more-three-messengers"]');
const addMoreFourMessengers = document.querySelectorAll('[data-name="add-more-four-messengers"]');

const social = document.querySelectorAll('[data-name="social"]');
const addMoreSocial = document.querySelectorAll('[data-name="add-more-social"]');
const addMoreTwoSocial = document.querySelectorAll('[data-name="add-more-two-social"]');
const addMoreThreeSocial = document.querySelectorAll('[data-name="add-more-three-social"]');
const addMoreFourSocial = document.querySelectorAll('[data-name="add-more-four-social"]');

const music = document.querySelectorAll('[data-name="music"]');
const addMoreMusic = document.querySelectorAll('[data-name="add-more-music"]');
const addMoreTwoMusic = document.querySelectorAll('[data-name="add-more-two-music"]');
const addMoreThreeMusic = document.querySelectorAll('[data-name="add-more-three-music"]');
const addMoreFourMusic = document.querySelectorAll('[data-name="add-more-four-music"]');

const video = document.querySelectorAll('[data-name="video"]');
const addMoreVideo = document.querySelectorAll('[data-name="add-more-video"]');
const addMoreTwoVideo = document.querySelectorAll('[data-name="add-more-two-video"]');
const addMoreThreeVideo = document.querySelectorAll('[data-name="add-more-three-video"]');
const addMoreFourVideo = document.querySelectorAll('[data-name="add-more-four-video"]');

const sms = document.querySelectorAll('[data-name="sms"]');
const addMoreSms = document.querySelectorAll('[data-name="add-more-sms"]');
const addMoreTwoSms = document.querySelectorAll('[data-name="add-more-two-sms"]');
const addMoreThreeSms = document.querySelectorAll('[data-name="add-more-three-sms"]');
const addMoreFourSms = document.querySelectorAll('[data-name="add-more-four-sms"]');

const enterPhone = document.querySelectorAll('.enter-number ');

const blockNumber = document.querySelectorAll('.js-block1');
const addMoreBlockNumber = document.querySelectorAll('.add-more-js-block1');
const addMoreTwoBlockNumber = document.querySelectorAll('.add-more-two-js-block1');
const addMoreThreeBlockNumber = document.querySelectorAll('.add-more-three-js-block1');
const addMoreFourBlockNumber = document.querySelectorAll('.add-more-four-js-block1');

const bucketInternet = document.querySelector('.bucket__internet');
const addMoreBucketInternet = document.querySelector('.bucket-new-number__internet');
const addMoreTwoBucketInternet = document.querySelector('.bucket-new-two-number__internet');
const addMoreThreeBucketInternet = document.querySelector('.bucket-new-three-number__internet');
const addMoreFourBucketInternet = document.querySelector('.bucket-new-four-number__internet');

const bucketCalls = document.querySelector('.bucket__calls');
const addMoreBucketCalls = document.querySelector('.bucket-new-number__calls');
const addMoreTwoBucketCalls = document.querySelector('.bucket-new-two-number__calls');
const addMoreThreeBucketCalls = document.querySelector('.bucket-new-three-number__calls');
const addMoreFourBucketCalls = document.querySelector('.bucket-new-four-number__calls');

const bucketPhone = document.querySelector('.options-menu__number-value');
const addMoreBucketPhone = document.querySelector('.options-menu__new-number-value');
const addMoreTwoBucketPhone = document.querySelector('.options-menu__new-number-two-value');
const addMoreThreeBucketPhone = document.querySelector('.options-menu__new-number-three-value');
const addMoreFourBucketPhone = document.querySelector('.options-menu__new-number-four-value');

const bucketMoreValue = document.querySelector('.options-menu__more-value');
const bucketMoreOneValue = document.querySelector('.options-menu__more-one-value');
const bucketMoreTwoValue = document.querySelector('.options-menu__more-two-value');
const bucketMoreThreeValue = document.querySelector('.options-menu__more-three-value');
const bucketMoreFourValue = document.querySelector('.options-menu__more-four-value');


const bucketNumberZero = document.querySelector('.bucket__number-price-zero');
const bucketNumberOne = document.querySelector('.bucket__number-price-one');
const bucketNumberTwo = document.querySelector('.bucket__number-price-two');
const bucketNumberThree = document.querySelector('.bucket__number-price-three');
const bucketNumberFour = document.querySelector('.bucket__number-price-four');


NodeList.prototype.indexOf = Array.prototype.indexOf;

function valueTransfer(internet, addMoreInternet, addMoreTwoInternet, addMoreThreeInternet, addMoreFourInternet,
                       calls, addMoreCalls, addMoreTwoCalls, addMoreThreeCalls, addMoreFourCalls,
                       sms, addMoreSms, addMoreTwoSms, addMoreThreeSms, addMoreFourSms,
                       messengers, addMoreMessengers, addMoreTwoMessengers, addMoreThreeMessengers, addMoreFourMessengers,
                       social, addMoreSocial, addMoreTwoSocial, addMoreThreeSocial, addMoreFourSocial,
                       music, addMoreMusic, addMoreTwoMusic, addMoreThreeMusic, addMoreFourMusic,
                       video, addMoreVideo, addMoreTwoVideo, addMoreThreeVideo, addMoreFourVideo,
                       blockNumber, addMoreBlockNumber, addMoreTwoBlockNumber, addMoreThreeBlockNumber, addMoreFourBlockNumber,
                       enterPhone) {
    const items = [internet, addMoreInternet, addMoreTwoInternet, addMoreThreeInternet, addMoreFourInternet,
        calls, addMoreCalls, addMoreTwoCalls, addMoreThreeCalls, addMoreFourCalls,
        sms, addMoreSms, addMoreTwoSms, addMoreThreeSms, addMoreFourSms,
        messengers, addMoreMessengers, addMoreTwoMessengers, addMoreThreeMessengers, addMoreFourMessengers,
        social, addMoreSocial, addMoreTwoSocial, addMoreThreeSocial, addMoreFourSocial,
        music, addMoreMusic, addMoreTwoMusic, addMoreThreeMusic, addMoreFourMusic,
        video, addMoreVideo, addMoreTwoVideo, addMoreThreeVideo, addMoreFourVideo,
        blockNumber, addMoreBlockNumber, addMoreTwoBlockNumber, addMoreThreeBlockNumber, addMoreFourBlockNumber,
        enterPhone];
    items.forEach(select => {
        //для каждого элемента селеста(их всегда 2)
        select.forEach(item => {
            //для элемента сеелеста, навешиваем событие
            item.addEventListener('change', event => {
                //для каждого элемента селеста
                select.forEach(item => {
                    if (item.type === 'checkbox') {
                        //присваиваем элементу,тот checked, который имеется у элемента,
                        //который мы изменили в рамках события
                        item.checked = event.target.checked;
                        calc();
                    } else {
                        //присваиваем элементу,тот value, который имеется у элемента,
                        //который мы изменили в рамках события
                        item.value = event.target.value;
                    }
                });
                //блок со списком нтелефонных номеров
                if (select === blockNumber) {
                    const number = function () {
                        //в переменную записывается name измененного эл
                        const nameChange = event.target.name;
                        //в переменную записывается name другого эл
                        //находим этот name.
                        // если name измененного эл = numbers, то name другого эл = numbers-block1,
                        // если name измененного эл != numbers, то name другого эл = numbers
                        const nameOther = event.target.name === 'numbers' ? 'numbers-block1' : 'numbers';
                        //находим все эл блока, в котором было изменение
                        const numbersOne = document.querySelectorAll('input[name="' + nameChange + '"]');
                        //находим все эл другого блока
                        const numbersTwo = document.querySelectorAll('input[name="' + nameOther + '"]');
                        //находим эл :checked в блоке, в котором проихзошло изменение
                        const activeNumberOne = document.querySelector('input[name="' + nameChange + '"]:checked');
                        //находим индекс :checked элемента
                        const index = numbersOne.indexOf(activeNumberOne);
                        //делаем эл с таким же индексом в другом блоке :checked
                        numbersTwo[index].checked = true;

                        //кнопка с номером телефона
                        const correctBtn = document.querySelector('.correct-number__next-bth');

                        //в корзине номеров в инпут записываем значение :checked эл
                        bucketPhone.innerHTML = activeNumberOne.value;
                        //в кнопку с номером телефона записываем значение :checked эл
                        correctBtn.innerHTML = activeNumberOne.value;
                        //в корзине номеров в инпут записываем стоимость номера
                        bucketNumberZero.innerHTML = item.querySelector(`[value="${activeNumberOne.value}"]`).dataset.price;
                        calc();
                    };
                    //значение меняется только после выполнения функции(event),
                    //поэтому, когда  number запускается, изменения еще не произошли
                    setTimeout(number, 100);
                }else if(select === addMoreBlockNumber){
                    const number = function () {
                        //в переменную записывается name измененного эл
                        const nameChange = event.target.name;
                        //в переменную записывается name другого эл
                        //находим этот name.
                        // если name измененного эл = numbers, то name другого эл = numbers-block1,
                        // если name измененного эл != numbers, то name другого эл = numbers
                        const nameOther = event.target.name === 'add-more-numbers' ? 'add-more-numbers-block1' : 'add-more-numbers';
                        //находим все эл блока, в котором было изменение
                        const numbersOne = document.querySelectorAll('input[name="' + nameChange + '"]');
                        //находим все эл другого блока
                        const numbersTwo = document.querySelectorAll('input[name="' + nameOther + '"]');
                        //находим эл :checked в блоке, в котором проихзошло изменение
                        const activeNumberOne = document.querySelector('input[name="' + nameChange + '"]:checked');
                        //находим индекс :checked элемента
                        const index = numbersOne.indexOf(activeNumberOne);
                        //делаем эл с таким же индексом в другом блоке :checked
                        numbersTwo[index].checked = true;

                        //кнопка с номером телефона
                        const correctBtn = document.querySelector('.correct-number__add-more-next-bth');
                        //в корзине номеров в инпут записываем значение :checked эл
                        addMoreBucketPhone.innerHTML = activeNumberOne.value;
                        //в кнопку с номером телефона записываем значение :checked эл
                        correctBtn.innerHTML = activeNumberOne.value;
                        //в корзине номеров в инпут записываем стоимость номера
                        bucketNumberOne.innerHTML = item.querySelector(`[value="${activeNumberOne.value}"]`).dataset.price;
                        calc();
                    };
                    //значение меняется только после выполнения функции(event),
                    //поэтому, когда  number запускается, изменения еще не произошли
                    setTimeout(number, 100);
                }else if(select === addMoreTwoBlockNumber){
                    const number = function () {
                        //в переменную записывается name измененного эл
                        const nameChange = event.target.name;
                        //в переменную записывается name другого эл
                        //находим этот name.
                        // если name измененного эл = numbers, то name другого эл = numbers-block1,
                        // если name измененного эл != numbers, то name другого эл = numbers
                        const nameOther = event.target.name === 'add-more-numbers' ? 'add-more-numbers-block1' : 'add-more-numbers';
                        //находим все эл блока, в котором было изменение
                        const numbersOne = document.querySelectorAll('input[name="' + nameChange + '"]');
                        //находим все эл другого блока
                        const numbersTwo = document.querySelectorAll('input[name="' + nameOther + '"]');
                        //находим эл :checked в блоке, в котором проихзошло изменение
                        const activeNumberOne = document.querySelector('input[name="' + nameChange + '"]:checked');
                        //находим индекс :checked элемента
                        const index = numbersOne.indexOf(activeNumberOne);
                        //делаем эл с таким же индексом в другом блоке :checked
                        numbersTwo[index].checked = true;

                        //кнопка с номером телефона
                        const correctBtn = document.querySelector('.correct-number__add-more-two-next-bth');
                        //в корзине номеров в инпут записываем значение :checked эл
                        addMoreTwoBucketPhone.innerHTML = activeNumberOne.value;
                        //в кнопку с номером телефона записываем значение :checked эл
                        correctBtn.innerHTML = activeNumberOne.value;
                        //в корзине номеров в инпут записываем стоимость номера
                        bucketNumberTwo.innerHTML = item.querySelector(`[value="${activeNumberOne.value}"]`).dataset.price;
                        calc();
                    };
                    //значение меняется только после выполнения функции(event),
                    //поэтому, когда  number запускается, изменения еще не произошли
                    setTimeout(number, 100);
                }else if(select === addMoreThreeBlockNumber){
                    const number = function () {
                        //в переменную записывается name измененного эл
                        const nameChange = event.target.name;
                        //в переменную записывается name другого эл
                        //находим этот name.
                        // если name измененного эл = numbers, то name другого эл = numbers-block1,
                        // если name измененного эл != numbers, то name другого эл = numbers
                        const nameOther = event.target.name === 'add-more-numbers' ? 'add-more-numbers-block1' : 'add-more-numbers';
                        //находим все эл блока, в котором было изменение
                        const numbersOne = document.querySelectorAll('input[name="' + nameChange + '"]');
                        //находим все эл другого блока
                        const numbersTwo = document.querySelectorAll('input[name="' + nameOther + '"]');
                        //находим эл :checked в блоке, в котором проихзошло изменение
                        const activeNumberOne = document.querySelector('input[name="' + nameChange + '"]:checked');
                        //находим индекс :checked элемента
                        const index = numbersOne.indexOf(activeNumberOne);
                        //делаем эл с таким же индексом в другом блоке :checked
                        numbersTwo[index].checked = true;

                        //кнопка с номером телефона
                        const correctBtn = document.querySelector('.correct-number__add-more-three-next-bth');
                        //в корзине номеров в инпут записываем значение :checked эл
                        addMoreThreeBucketPhone.innerHTML = activeNumberOne.value;
                        //в кнопку с номером телефона записываем значение :checked эл
                        correctBtn.innerHTML = activeNumberOne.value;
                        //в корзине номеров в инпут записываем стоимость номера
                        bucketNumberThree.innerHTML = item.querySelector(`[value="${activeNumberOne.value}"]`).dataset.price;
                        calc();
                    };
                    //значение меняется только после выполнения функции(event),
                    //поэтому, когда  number запускается, изменения еще не произошли
                    setTimeout(number, 100);
                }else if(select === addMoreFourBlockNumber){
                    const number = function () {
                        //в переменную записывается name измененного эл
                        const nameChange = event.target.name;
                        //в переменную записывается name другого эл
                        //находим этот name.
                        // если name измененного эл = numbers, то name другого эл = numbers-block1,
                        // если name измененного эл != numbers, то name другого эл = numbers
                        const nameOther = event.target.name === 'add-more-numbers' ? 'add-more-numbers-block1' : 'add-more-numbers';
                        //находим все эл блока, в котором было изменение
                        const numbersOne = document.querySelectorAll('input[name="' + nameChange + '"]');
                        //находим все эл другого блока
                        const numbersTwo = document.querySelectorAll('input[name="' + nameOther + '"]');
                        //находим эл :checked в блоке, в котором проихзошло изменение
                        const activeNumberOne = document.querySelector('input[name="' + nameChange + '"]:checked');
                        //находим индекс :checked элемента
                        const index = numbersOne.indexOf(activeNumberOne);
                        //делаем эл с таким же индексом в другом блоке :checked
                        numbersTwo[index].checked = true;

                        //кнопка с номером телефона
                        const correctBtn = document.querySelector('.correct-number__add-more-four-next-bth');
                        //в корзине номеров в инпут записываем значение :checked эл
                        addMoreFourBucketPhone.innerHTML = activeNumberOne.value;
                        //в кнопку с номером телефона записываем значение :checked эл
                        correctBtn.innerHTML = activeNumberOne.value;
                        //в корзине номеров в инпут записываем стоимость номера
                        bucketNumberFour.innerHTML = item.querySelector(`[value="${activeNumberOne.value}"]`).dataset.price;
                        calc();
                    };
                    //значение меняется только после выполнения функции(event),
                    //поэтому, когда  number запускается, изменения еще не произошли
                    setTimeout(number, 100);
                }

                // console.log(item);
                // console.log(item.dataset.number);
                // console.log(item.classList.contains(`[value="${item.value}"]`));
                if(item.type !== 'checkbox'){
                    const value = item.querySelector(`[value="${item.value}"]`).dataset.number;

                    console.log(value);

                    if(select === internet){
                        bucketInternet.innerHTML = value;
                    }else if(select === calls){
                        bucketCalls.innerHTML = value;
                    }else if(select === addMoreInternet){
                        addMoreBucketInternet.innerHTML = value;
                    }else if(select === addMoreCalls){
                        addMoreBucketCalls.innerHTML = value;
                    }else if(select === addMoreTwoInternet){
                        addMoreTwoBucketInternet.innerHTML = value;
                    }else if(select === addMoreTwoCalls){
                        addMoreTwoBucketCalls.innerHTML = value;
                    }else if(select === addMoreThreeInternet){
                        addMoreThreeBucketInternet.innerHTML = value;
                    }else if(select === addMoreThreeCalls){
                        addMoreThreeBucketCalls.innerHTML = value;
                    }else if(select === addMoreFourInternet){
                        addMoreFourBucketInternet.innerHTML = value;
                    }else if(select === addMoreFourCalls){
                        addMoreFourBucketCalls.innerHTML = value;
                    }
                    setTimeout(() => calc(), 100);
                }else{
                    // moreZero.forEach(item => {
                    //     bucketMoreValue.innerHTML = item.dataset.number;
                    // })
                    if(item.classList.contains('block-zero__checkbox')){
                        const moreZero = pageBlockZero.querySelectorAll('input:checked');
                        console.log(moreZero);
                        bucketMoreValue.innerHTML = '';
                        for(let i = 0; i < moreZero.length; i++){
                            console.log('test');
                            if(i === 0){
                                bucketMoreValue.innerHTML += moreZero[i].dataset.number;
                            }else{
                                bucketMoreValue.innerHTML += ', ' + moreZero[i].dataset.number;
                            }
                        }
                    }else if(item.classList.contains('block-one__checkbox')){
                        const moreOne = pageBlockOne.querySelectorAll('input:checked');
                        bucketMoreOneValue.innerHTML = '';
                        for(let i = 0; i < moreOne.length; i++){
                            if(i === 0){
                                bucketMoreOneValue.innerHTML += moreOne[i].dataset.number;
                            }else{
                                bucketMoreOneValue.innerHTML += ', ' + moreOne[i].dataset.number;
                            }
                        }
                    }else if(item.classList.contains('block-two__checkbox')){
                        const moreTwo = pageBlockTwo.querySelectorAll('input:checked');
                        bucketMoreTwoValue.innerHTML = '';
                        for(let i = 0; i < moreTwo.length; i++){
                            if(i === 0){
                                bucketMoreTwoValue.innerHTML += moreTwo[i].dataset.number;
                            }else{
                                bucketMoreTwoValue.innerHTML += ', ' + moreTwo[i].dataset.number;
                            }
                        }
                    }else if(item.classList.contains('block-three__checkbox')){
                        const moreThree = pageBlockThree.querySelectorAll('input:checked');
                        bucketMoreThreeValue.innerHTML = '';
                        for(let i = 0; i < moreThree.length; i++){
                            if(i === 0){
                                bucketMoreThreeValue.innerHTML += moreThree[i].dataset.number;
                            }else{
                                bucketMoreThreeValue.innerHTML += ', ' + moreThree[i].dataset.number;
                            }
                        }
                    }else if(item.classList.contains('block-four__checkbox')){
                        const moreFour = pageBlockFour.querySelectorAll('input:checked');
                        bucketMoreFourValue.innerHTML = '';
                        for(let i = 0; i < moreFour.length; i++){
                            if(i === 0){
                                bucketMoreFourValue.innerHTML += moreFour[i].dataset.number;
                            }else{
                                bucketMoreFourValue.innerHTML += ', ' + moreFour[i].dataset.number;
                            }
                        }
                    }
                }
            });
        })
    })
}

valueTransfer(internet, addMoreInternet, addMoreTwoInternet, addMoreThreeInternet, addMoreFourInternet,
    calls, addMoreCalls, addMoreTwoCalls, addMoreThreeCalls, addMoreFourCalls,
    sms, addMoreSms, addMoreTwoSms, addMoreThreeSms, addMoreFourSms,
    messengers, addMoreMessengers, addMoreTwoMessengers, addMoreThreeMessengers, addMoreFourMessengers,
    social, addMoreSocial, addMoreTwoSocial, addMoreThreeSocial, addMoreFourSocial,
    music, addMoreMusic, addMoreTwoMusic, addMoreThreeMusic, addMoreFourMusic,
    video, addMoreVideo, addMoreTwoVideo, addMoreThreeVideo, addMoreFourVideo,
    blockNumber, addMoreBlockNumber, addMoreTwoBlockNumber, addMoreThreeBlockNumber, addMoreFourBlockNumber,
    enterPhone);

function newNumber() {
    const addBtn = document.querySelector('.numbers-bucket__btn-wrapper');
    const block1 = document.querySelector('.bucket-new-number');
    const block2 = document.querySelector('.bucket-new-two-number');
    const block3 = document.querySelector('.bucket-new-three-number');
    const block4 = document.querySelector('.bucket-new-four-number');

    addBtn.addEventListener('click', event =>{
        const wrap = document.querySelector('.numbers-bucket__content');
        const bucket = wrap.querySelector('.hidden');
        if(bucket === block1){
            addBtn.href = "#add-more-service";
            const pageNumber = document.querySelector('[data-page="add-more-number"]');
            const btn = pageNumber.querySelector('.phone-number__next-btn');
            btn.addEventListener('click', event =>{
                block1.classList.remove('hidden');
            })
        }else if(bucket === block2){
            addBtn.href = "#add-more-two-service";
            const pageNumber = document.querySelector('[data-page="add-more-two-number"]');
            const btn = pageNumber.querySelector('.phone-number__next-btn');
            btn.addEventListener('click', event =>{
                block2.classList.remove('hidden');
            })
        }else if(bucket === block3){
            addBtn.href = "#add-more-three-service";
            const pageNumber = document.querySelector('[data-page="add-more-three-number"]');
            const btn = pageNumber.querySelector('.phone-number__next-btn');
            btn.addEventListener('click', event =>{
                block3.classList.remove('hidden');
            })
        }else if(bucket === block4){
            addBtn.href = "#add-more-four-service";
            const pageNumber = document.querySelector('[data-page="add-more-four-number"]');
            const btn = pageNumber.querySelector('.phone-number__next-btn');
            btn.addEventListener('click', event =>{
                block4.classList.remove('hidden');
            })
        }
    });
}

newNumber();



function conditionError() {
    const block = document.querySelectorAll('.condition');
    block.forEach(item => {
        const text = item.querySelector('.js-error__checkbox');
        const checkbox = item.querySelector('.condition__checkbox');
        //при клике на чекбокс с условиями
        checkbox.addEventListener('click', event => {
            if (checkbox.checked !== true) {
                //меняется цвет
                checkbox.classList.add('condition__error');
                //появляется текст
                text.classList.remove('hidden');
            } else {
                checkbox.classList.remove('condition__error');
                text.classList.add('hidden');
            }
        });
    })
}

conditionError();


function number() {
    const block = document.querySelectorAll('.container-phone-number');
    const blockNewPhone = document.querySelectorAll('.container-new-phone-number');
    // const blocks = [block, blockNewPhone];
    // blocks.forEach(item => {
    //     item.forEach(item => {
    //         const saveNumber = item.querySelector('.phone-number__save-number');
    //         const number = item.querySelector('.enter-number');
    //
    //         number.addEventListener('change', event => {
    //
    //             //если выбран "Сохранить номер"
    //             if(saveNumber.checked === true){
    //                 //то в корзине номеров в инпут записываем значение введенное пользователем
    //                 bucketPhone.innerHTML = number.value;
    //
    //             }
    //             console.log(item);
    //             const correctBtn = item.querySelector('.correct-number__next-bth');
    //             console.log(correctBtn);
    //             //если есть кнопка,на которой указан номер
    //             if(correctBtn === true){
    //                 //в кнопку с номером телефона записываем значение введенное пользователем
    //                 correctBtn.innerHTML = number.value;
    //             }
    //         })
    //     })
    // })
    block.forEach(item => {
        const btn = item.querySelector('.phone-number__next-btn');
        const saveNumber = item.querySelector('.phone-number__save-number');
        const number = item.querySelector('.enter-number');

        //при клике на кнопку далее в блоке с выбором телефона
        number.addEventListener('change', event => {
            const correctBtn = document.querySelector('.correct-number__next-bth');
            //если выбран "Сохранить номер"
            if(saveNumber.checked === true){
                //то в корзине номеров в инпут записываем значение введенное пользователем
                bucketPhone.innerHTML = number.value;
                //в кнопку с номером телефона записываем значение введенное пользователем
                correctBtn.innerHTML = number.value;
            }
        })
    });
    blockNewPhone.forEach(item => {
        const btn = item.querySelector('.phone-number__next-btn');
        const saveNumber = item.querySelector('.phone-number__save-number');
        const number = item.querySelector('.enter-number');

        //при клике на кнопку далее в блоке с выбором телефона
        number.addEventListener('change', event => {
            const number = document.getElementById('add-more-phone-numb');
            const correctBtn = document.querySelector('.correct-number__add-more-next-bth');
            //если выбран "Сохранить номер"
            if(saveNumber.checked === true){
                //то в корзине номеров в инпут записываем значение введенное пользователем
                addMoreBucketPhone.innerHTML = number.value;
                //в кнопку с номером телефона записываем значение введенное пользователем
                correctBtn.innerHTML = number.value;
            }
        })
    })

}

number();



function clearInput(){
    const blocks = document.querySelectorAll('.input-parent');
    blocks.forEach(item => {
        const clear = item.querySelector('.js-clear-field');
        if(clear !== null){
            clear.addEventListener('click', event => {
                const field = item.querySelector('.js-ascent-text');
                if(field.classList.contains('form__phone-input')){
                    field.value="+7(";
                    //чтобы при очищении поля удалялся и "Некорректный номер телефона"
                    errorPhone();
                }else{
                    field.value="";
                }

                if (field.value.length > 0) {
                    field.classList.add("form__input-up");
                } else {
                    field.classList.remove("form__input-up");
                }
                clearCross();
            })
        }

    });
}


clearInput();


// а этот кусок кода когда вызывается?
//хз просто , ты ж видел там сразу все +7 показывает
function clearCross(){
    const blocks = document.querySelectorAll('.input-parent');
    blocks.forEach(item => {
        const clear = item.querySelector('.js-clear-field');
        const filled = item.querySelector('.input-filled');
        //если у инпута предусмотрен очищающий крестик
        if(clear !== null){
            const field = item.querySelector('.js-ascent-text');
            const formatName = /^[А-ЯЁ][а-яё]+(-[А-ЯЁ][а-яё]+)? [А-ЯЁ][а-яё]+( [А-ЯЁ][а-яё]+)?$/.test(field.value);
            if (field.value.length > 0) {
                //и если это инпут телефона и длина его value равна 11 с учетом только цифр(полный номер)
                if(field.classList.contains('form__phone-input') && field.value.replace(/[^0-9]/g, '').length === 11){
                    //то добавляем класс скрывающий крестик
                    clear.classList.add('display-none');
                    //удаляем класс скрывающий галочку
                    filled.classList.remove('display-none');
                    //удаляем показывающий крустик
                    clear.classList.remove('display-block');
                    //добавляем класс показывающий галочку
                    filled.classList.add('display-block');

                }else if(field.classList.contains('form__phone-input') && field.value === '+7('){
                    //если это номер телефона и его value равно +7(
                    //то добавляем класс скрывающий крестик
                    clear.classList.add('display-none');
                    //удаляем показывающий крустик
                    clear.classList.remove('display-block');
                }else if(field.classList.contains('form__name-input') && formatName === true){
                    //то добавляем класс скрывающий крестик
                    clear.classList.add('display-none');
                    //удаляем класс скрывающий галочку
                    filled.classList.remove('display-none');
                    //удаляем показывающий крустик
                    clear.classList.remove('display-block');
                    //добавляем класс показывающий галочку
                    filled.classList.add('display-block');
                }else if(field.classList.contains('form__region-input') && /^[А-ЯЁ]/.test(field.value) === true && field.value.length > 1){
                    //то добавляем класс скрывающий крестик
                    clear.classList.add('display-none');
                    //удаляем класс скрывающий галочку
                    filled.classList.remove('display-none');
                    //удаляем показывающий крустик
                    clear.classList.remove('display-block');
                    //добавляем класс показывающий галочку
                    filled.classList.add('display-block');
                }else if(field.classList.contains('form__postcode-input') && field.value.replace(/[^0-9]/g, '').length === 6){
                    //то добавляем класс скрывающий крестик
                    clear.classList.add('display-none');
                    //удаляем класс скрывающий галочку
                    filled.classList.remove('display-none');
                    //удаляем показывающий крустик
                    clear.classList.remove('display-block');
                    //добавляем класс показывающий галочку
                    filled.classList.add('display-block');
                }else {
                    //если это инпут не телефона
                    //то добавляем класс показывающий крестик
                    clear.classList.add('display-block');
                    //удаляем класс скрывающий крестик
                    clear.classList.remove('display-none');

                    //удаляем класс показывающий галочку
                    filled.classList.remove('display-block');
                    //добавляем класс скрывающий галочку
                    filled.classList.add('display-none');
                }
            }else {
                clear.classList.add('display-none');
                clear.classList.remove('display-block');
            }
        }
    })
}

clearCross();

function correct(){
    const block = document.querySelectorAll('.options-menu__correction');
    block.forEach(item => {
        //onmouseover - событие, когда курсор мыши наводится на элемент
        item.onmouseover = function(){
            item.innerHTML = '&#9997;️';
        };
        //onmouseout - событие, когда курсор мыши выходит за пределы элемента
        item.onmouseout = function(){
            item.innerHTML = '✏️';
        }
    })
}

correct();




























