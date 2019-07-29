const App = (function () {
    const btn = document.querySelector(".bring-info__learn-more");
    const text = document.querySelector(".bring-info__learn_more-text");
    const inputPhone = document.querySelector(".js-phone-input");
    const inputName = document.querySelector(".js-name-input");
    const errorPlace = document.querySelector(".js-error-name");
    const phoneError = document.querySelector(".js-phone-error");
    const sel = document.querySelector(".form__citizenship-input");
    const value = sel.options[sel.selectedIndex].value;
    const countryOk = document.querySelector(".form__country");
    const inputs = document.querySelectorAll(".js-ascent-text");
    const clearField = document.querySelectorAll(".js-clear-field");
    const shortAppSwitch = document.querySelector(".form__fill-short-app-input");
    const recallForm = document.querySelector(".form__recall");
    const citizenship = document.querySelector(".form__citizenship");
    const incorrectPhoneMessage = "Некорректный номер телефона";
    const emptyPhonemessage = "Необходимо указать номер телефона";

    return {
        init: function () {
            this.learnMoreBtn();
            this.appearError();
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
            this.phoneError();
        },

        phoneError: function () {
            inputPhone.addEventListener("blur", function (event) {
                const isValidForm = event.target.checkValidity();
                const regStr = "\\+7\\s\\d{3}\\s\\d{3}-\\d{2}-\\d{2}";
                const regPhone = new RegExp(regStr, "u");

                if (isValidForm && regPhone.test(inputPhone.value)) {
                    phoneError.innerHTML = "";
                } else {
                    phoneError.innerHTML = incorrectPhoneMessage;
                }
                if (inputPhone.value == "+7(") {
                    inputPhone.innerHTML = emptyPhonemessage;
                } else {
                    inputPhone.innerHTML = "";
                }
            });
        },

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

        appearError: function () {  // объявляем функцию
            inputName.addEventListener("click", function () {  // добавляем к переменной input обработчик событий, который реагирует, в случае если с элемента снимается фокус, и вызывает функцию
                if (inputName.value.length == 0) {  // Если значение в условии истинно, то есть значение селектора "нестрого" равно нулю выполняется функция.
                    errorPlace.innerHTML = "Укажите Ваше ФИО";  // В переменную вставляем  строку
                    inputName.classList.add("error-border"); // добавляем класс к переменной через метод класс-лист
                    inputName.classList.remove("pseudo-hover");   // снимаем с переменной класс, через метод класс-лист
                } else {  // если значение вышеуказанного условия не истинно, выполняется другая функция, нижеследующая
                    errorPlace.innerHTML = ""; // в переменную также вставляется строка, с другими значениями
                    inputName.classList.remove("error-border");  // снимаем с переменной класс, через метод класс-лист
                    inputName.classList.add("pseudo-hover"); // добавляем класс к переменной через метод класс-лист
                }
            });
        },

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

                    // App.appearCross(); // если сметчилось, то так же выполняется функция ниже appear cross
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
            const conditionInfo = document.querySelector(button);
            const modal = document.querySelector(popup);
            const closeBtn = document.querySelector(closeButton);

            conditionInfo.addEventListener("click", function () {
                modal.classList.add("modal");
                modal.classList.remove("popup");
            });

            closeBtn.addEventListener("click", function () {
                modal.classList.add("popup");
                modal.classList.remove("modal");
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

                const number = document.getElementById('phone-number');
                correctBtn.innerHTML = number.value;
            }
        });

        newNumber.addEventListener("click", function () {
            if (newNumber.checked) {
                console.log('test');
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


// function showPrevNext() {
// 	const block1 = document.querySelector(".phone-number__numbers-block1");
// 	const block2 = document.querySelector(".phone-number__numbers-block2");
// 	const nextBtn = document.querySelector(".js-block-nextBtn");
// 	const prevBtn = document.querySelector(".js-block-prevBtn");
//
// 	nextBtn.addEventListener("click", function() {
// 		block1.classList.add("hidden");
// 		block1.classList.remove("visible");
// 		block2.classList.remove("hidden");
// 	});
//
// 	prevBtn.addEventListener("click", function() {
// 		block2.classList.add("hidden");
// 		block2.classList.remove("visible");
// 		block1.classList.remove("hidden");
// 	});
// }
//
//
// showPrevNext();


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


//находим форму
const form = document.querySelector('.form');

//находим все блоки калькулятора
const block = form.querySelectorAll('.additional-offer__form-item');

const priceValue = document.querySelectorAll('[data-name="price"]');

//в каждом блоке ищем функциональный элемент формы
block.forEach(item => {
    const el = item.querySelectorAll('.additional-offer__form-el');

    //на каждый функциональный элемент формы навешиваем событие
    el.forEach(item => {
        item.addEventListener('input', () => calculator());

    });
});

function calculator() {
    let price = 0;
    // const priceValue = document.querySelectorAll('[data-name="price]');

    //в каждом блоке ищем функциональный элемент формы
    block.forEach(item => {
        const el = item.querySelectorAll('.additional-offer__form-el');

        //проверяем каждый функц. эл. формы
        el.forEach(item => {
            if (item.type !== 'checkbox' || item.type === 'checkbox' && item.checked) {
                price += Number(item.value);
            }
        })
    });

    priceValue.forEach(item => {
        //вставляем значение price в разметку
        item.innerHTML = price;
    })
}

calculator();


//находим все блоки калькулятора в контейнере Редактирования пакутов услуг
const correctBlock = form.querySelectorAll('.correct-service__form-item');

//в каждом блоке ищем функциональный элемент формы
correctBlock.forEach(item => {
    const elem = item.querySelectorAll('.correct-service__form-el');

    //на каждый функциональный элемент формы навешиваем событие
    elem.forEach(item => {
        item.addEventListener('input', () => calculatorCorrect());

    });
});

function calculatorCorrect() {
    let priceCorrect = 0;

    //в каждом блоке ищем функциональный элемент формы
    correctBlock.forEach(item => {
        const elem = item.querySelectorAll('.correct-service__form-el');

        //проверяем каждый функц. эл. формы
        elem.forEach(item => {
            if (item.type !== 'checkbox' || item.type === 'checkbox' && item.checked) {
                priceCorrect += Number(item.value);
            }
        })
    });
    priceValue.forEach(item => {
        //вставляем значение priceCorrect в разметку
        item.innerHTML = priceCorrect;
    })
}

calculatorCorrect();

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
        //на каджый инпут навешиваем событие onkeyup
        //(возникает в момент отпускания нажатой клавиши)
        // item.onkeyup = function test(){
        //
        // 	const value = item.value;
        //
        // 	const pattern = /[-\.;":'a-zA-Zа-яА-Я]/;
        //
        // 	//делаем проверку с помощью метода test
        // 	//(выполняет поиск сопоставления)
        // 	if(pattern.test(value)){
        // 		//Метод replace() возвращает новую строку с сопоставлениями, заменёнными на заменитель
        // 		item.value = value.replace(pattern, '');
        // 	}
        // };
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

// function testData() {
// 	//находим все импуты, где должны записываться только цифры и .
// 	const el = document.querySelectorAll(".form__date-input");
//
// 	el.forEach(item => {
// 		//на каджый инпут навешиваем событие onkeyup
// 		//(возникает в момент отпускания нажатой клавиши)
// 		item.onkeyup = function test(){
// 			const value = item.value;
//
// 			const pattern = /[-\;":'a-zA-Zа-яА-Я]/;
//
// 			//делаем проверку с помощью метода test
// 			//(выполняет поиск сопоставления)
// 			if(pattern.test(value)){
// 				//Метод replace() возвращает новую строку с сопоставлениями, заменёнными на заменитель
// 				item.value = value.replace(pattern, '');
// 			}
// 		}
// 	})
// }
//
// testData();

new Pikaday({
    field: document.getElementById('datepicker'),
    format: 'D/M/YYYY',
    toString(date, format) {
        // you should do formatting based on the passed format,
        // but we will just return 'D/M/YYYY' for simplicity
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}.${month}.${year}`;
    },
});

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


//выделяет избранное
function paintingStars() {
    const block = document.querySelectorAll('.phone-number__numbers-container');
    const favoritesNumbers = document.querySelector('.favorites-btn');

    block.forEach(item => {
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

}

paintingStars();


//активирует кнопку "показать избранное"
function favorites() {
    const block = document.querySelector('.phone-number__numbers');
    const container = block.querySelectorAll('.phone-number__numbers-container');
    const favoritesNumbers = document.querySelector('.favorites-btn');
    const favoritesName = favoritesNumbers.querySelectorAll('.favorites-items');
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
        container.forEach(item => {
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
        //для каждого элемента кнопки
        favoritesName.forEach(item => {
            favoritesNumbers.classList.remove('active');
            item.classList.add('favorites');
        })
    }
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
                // и добавляем класс блокирующий события
                showFavorites.classList.add('removal');


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
const calls = document.querySelectorAll('[data-name="calls"]');
const messengers = document.querySelectorAll('[data-name="messengers"]');
const social = document.querySelectorAll('[data-name="social"]');
const music = document.querySelectorAll('[data-name="music"]');
const video = document.querySelectorAll('[data-name="video"]');
const sms = document.querySelectorAll('[data-name="sms"]');
const enterPhone = document.querySelectorAll('.form__phone-input');
const blockNumber = document.querySelectorAll('.phone-number__numbers-block1');
const bucketInternet = document.querySelector('.bucket__internet');
const bucketCalls = document.querySelector('.bucket__calls');
const bucketPhone = document.querySelector('.options-menu__number-value');

NodeList.prototype.indexOf = Array.prototype.indexOf;

function valueTransfer(internet, calls, sms, messengers, social, music, video, blockNumber, enterPhone) {
    const items = [internet, calls, sms, messengers, social, music, video, blockNumber, enterPhone];
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

                    };
                    //значение меняется только после выполнения функции(event),
                    //поэтому, когда  number запускается, изменения еще не произошли
                    setTimeout(number, 100);
                }

                //перенос калькуляции и минут в корзину номеров
                if (item.value === '0') {
                    let sum = item.querySelector('[value="0"]').dataset.number;
                    bucketInternet.innerHTML = sum;
                    bucketCalls.innerHTML = sum;
                } else if (item.value === '99') {
                    sum = item.querySelector('[value="99"]').dataset.number;
                    bucketInternet.innerHTML = sum;
                } else if (item.value === '159' && item.type !== 'checkbox') {
                    sum = item.querySelector('[value="159"]').dataset.number;
                    bucketInternet.innerHTML = sum;
                    bucketCalls.innerHTML = sum;
                } else if (item.value === '199') {
                    sum = item.querySelector('[value="199"]').dataset.number;
                    bucketCalls.innerHTML = sum;
                } else if (item.value === '229') {
                    sum = item.querySelector('[value="229"]').dataset.number;
                    bucketInternet.innerHTML = sum;
                } else if (item.value === '299') {
                    sum = item.querySelector('[value="159"]').dataset.number;
                    bucketCalls.innerHTML = sum;
                } else if (item.value === '359') {
                    sum = item.querySelector('[value="359"]').dataset.number;
                    bucketInternet.innerHTML = sum;
                } else if (item.value === '999') {
                    sum = item.querySelector('[value="999"]').dataset.number;
                    bucketInternet.innerHTML = sum;
                    bucketCalls.innerHTML = sum;
                }

            });
        })
    })
}

valueTransfer(internet, calls, sms, messengers, social, music, video, blockNumber, enterPhone);


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
    block.forEach(item => {
        const btn = item.querySelector('.phone-number__next-btn');
        const saveNumber = item.querySelector('.phone-number__save-number');
        //при клике на кнопку далее в блоке с выбором телефона
        btn.addEventListener('click', event => {
            const number = document.getElementById('phone-num');
            const correctBtn = document .querySelector('.correct-number__next-bth');
            //если выбран "Сохранить номер"
            if(saveNumber.checked === true){
                //то в корзине номеров в инпут записываем значение введенное пользователем
                bucketPhone.innerHTML = number.value;
                //в кнопку с номером телефона записываем значение введенное пользователем
                correctBtn.innerHTML = number.value;
            }
        })
    });

}

number();



function clearInput(){
    const blocks = document.querySelectorAll('.input-parent');
    blocks.forEach(item => {
        const clear = item.querySelector('.js-clear-field');
        if(clear !== null){
            clear.addEventListener('click', event => {
                const field = item.querySelector('.js-ascent-text');
                field.value="";
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


function clearCross(){
    const blocks = document.querySelectorAll('.input-parent');
    blocks.forEach(item => {
        const clear = item.querySelector('.js-clear-field');
        if(clear !== null){
            const field = item.querySelector('.js-ascent-text');
            if (field.value.length > 0) {
                // console.log(clear);
                clear.classList.add('display-block');
                clear.classList.remove('display-none');
                // console.log(clear.style);
            } else {
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






