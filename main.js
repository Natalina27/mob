const App = (function() {
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
		init: function() {
			this.learnMoreBtn();
			this.appearError();
			this.citizenship();
			this.ascentText();
			this.ascentText();
			this.clearField();
			this.appearCross();
			this.toggleModal(".js-open-btn-conditions", ".js-popup--condition", ".js-close-btn-conditions");
			this.toggleModal(".js-open-btn-friend", ".js-popup--friend-condition", ".js-close-btn-friend");
			this.toggleModal(".js-number-transfer", ".js-popup--number-transfer", ".js-close-btn-number-transfer");
			this.addPlaceholder();
			this.recallCheckbox();
			this.phoneError();
		},

		phoneError: function() {
			inputPhone.addEventListener("blur", function(event) {
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

		recallCheckbox: function() {
			shortAppSwitch.addEventListener("click", function() {
				if (shortAppSwitch.checked) {
					recallForm.style.display = "block";
					citizenship.style.display = "none";
				} else {
					recallForm.style.display = "none";
					citizenship.style.display = "block";
				}
			});

		},

		learnMoreBtn: function() { // объявляем функцию
			btn.addEventListener("click", function() { // добавляем к константе обработчик событий "клик", который вызывает функцию
				// btn.classList.add("display-none"); // объявляем функцию
				// text.classList.add("display-block"); // объявляем функцию
				btn.style.display = "none"; // на константу накидываем стиль, свойство и значение "none", что выполняется вышеуказанной ф-цией, которая запускается благодаря собитию "клик"
				text.style.display = "block"; // тоже самое, только блок
			}); 
		},

		appearError: function() {  // объявляем функцию
			inputName.addEventListener("blur", function() {  // добавляем к переменной input обработчик событий, который реагирует, в случае если с элемента снимается фокус, и вызывает функцию
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

		addPlaceholder: function() {
			for (let i = 0; i < inputs.length; i++) {
				inputs[i].addEventListener("focus", function() {
					inputs[i].classList.add("is-active-placeholder");
				});

				inputs[i].addEventListener("blur", function() {
					inputs[i].classList.remove("is-active-placeholder");
				});
			}
		},

		citizenship: function() {
			sel.addEventListener("click", function() {
				if (sel.selectedIndex == 0) {
					countryOk.style.display = "none";
				} else {
					countryOk.style.display = "block";
				}
			});
		},

		ascentText: function() { // объявляем функцию, в параметры записываем переменную labelClass
			for (let i = 0; i < inputs.length; i++) {  //объявляем цикл, который начинается с переменной i, к которой присваиваем значение 0; переменная i меньше чем массив inputs.length и инкрементацией последовательно перебирает его, выполняя следующие команды.
				inputs[i].addEventListener("blur", function() {  // к сметченной с массивом [i] переменной инпут, навешивается событие blur, при этом объявляется функция при которой
					if (inputs[i].value.length > 0) { // если значение сметченной с массивом [i] переменной инпут больше чем 0
						inputs[i].classList.add("form__input-up"); // то к сметченной с массивом [i] переменной инпут добавляется класс 						
					} else {
						inputs[i].classList.remove("form__input-up");	// или убирается класс 
					}

					App.appearCross(); // если сметчилось, то так же выполняется функция ниже appear cross
				}); 
			}
		},

		clearField: function() {  // объявляем функцию 
			for (let i = 0; i < clearField.length; i++) {
				clearField[i].addEventListener("click", function() {
					inputs[i].value = "";
					if (inputs[i].value.length > 0) {
						inputs[i].classList.add("form__input-up");				
					} else {
						inputs[i].classList.remove("form__input-up");	
					}

					App.appearCross();
				});
			}
		},

		appearCross: function() { 
			for (let i = 0; i < clearField.length; i++) {
				if (inputs[i].value.length > 0) {
					clearField[i].style.display = "block";
				} else {	
					clearField[i].style.display = "none";
				}
			}
		},

		toggleModal: function(button, popup, closeButton) {
			const conditionInfo = document.querySelector(button); 
			const modal = document.querySelector(popup);
			const closeBtn = document.querySelector(closeButton);

			conditionInfo.addEventListener("click", function() {
				modal.classList.add("modal");
				modal.classList.remove("popup");
			})

			closeBtn.addEventListener("click", function() {
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

	input.addEventListener("blur", function() {
		if (input.value.length > 0) {
			tariffBlock.classList.remove("hidden");
		}
	});
}


showTariffOptions();


function saveNumberNewNumberToggle() {
	const save = document.querySelector(".phone-number__save-number");
	const saveBlock = document.querySelector(".save-number__options");
	const newNumber = document.querySelector(".phone-number__new-number");
	const newNumberBlock = document.querySelector(".new-number__options");


	save.addEventListener("click", function() {
		if (save.checked) {
			saveBlock.classList.add("visible");
			saveBlock.classList.remove("hidden");
			newNumberBlock.classList.add("hidden");
			newNumberBlock.classList.remove("visible");
		}
	});

	newNumber.addEventListener("click", function() {
		if (newNumber.checked) {
			saveBlock.classList.remove("visible");
			saveBlock.classList.add("hidden");
			newNumberBlock.classList.remove("hidden");
			newNumberBlock.classList.add("visible");
		}
	});
}


saveNumberNewNumberToggle();


function showPrevNext() {
	const block1 = document.querySelector(".phone-number__numbers-block1");
	const block2 = document.querySelector(".phone-number__numbers-block2");
	const nextBtn = document.querySelector(".js-block-nextBtn");
	const prevBtn = document.querySelector(".js-block-prevBtn");

	nextBtn.addEventListener("click", function() {
		block1.classList.add("hidden");
		block1.classList.remove("visible");
		block2.classList.remove("hidden");
	});

	prevBtn.addEventListener("click", function() {
		block2.classList.add("hidden");
		block2.classList.remove("visible");
		block1.classList.remove("hidden");
	});
}


showPrevNext();




document.querySelectorAll('.application-internet__options').forEach(item =>{
	item.ApplicationInternet = new ApplicationInternet(item);
});

function ApplicationInternet(item) {
	this.item = item;
	this.button = this.item.querySelector('.application-internet__button');

	this.onClickButton = () => {
		if(this.item.classList.contains('application-internet__options_open')){
			this.close();
		}else{
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

//в каждом блоке ищем функциональный элемент формы
block.forEach( item => {
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
			if(item.type !== 'checkbox' || item.type === 'checkbox' && item.checked){
				price += Number(item.value);
			}
		})
	});

	//вставляем значение price в разметку
	form.querySelector('.additional-offer__form-sum').innerHTML = price;
}

calculator();



//находим все блоки калькулятора в контейнере Редактирования пакутов услуг
const correctBlock = form.querySelectorAll('.correct-service__form-item');

//в каждом блоке ищем функциональный элемент формы
correctBlock.forEach( item => {
	const elem = item.querySelectorAll('.correct-service__form-el');

	//на каждый функциональный элемент формы навешиваем событие
	elem.forEach(item => {
		item.addEventListener('input', () => calculatorCorrect());

	});
});

function calculatorCorrect(){
	let priceCorrect = 0;

	//в каждом блоке ищем функциональный элемент формы
	correctBlock.forEach(item => {
		const elem = item.querySelectorAll('.correct-service__form-el');

		//проверяем каждый функц. эл. формы
		elem.forEach(item => {
			if(item.type !== 'checkbox' || item.type === 'checkbox' && item.checked){
				priceCorrect += Number(item.value);
			}
		})
	});

	//вставляем значение priceCorrect в разметку
	form.querySelector('.correct-service__form-sum').innerHTML = priceCorrect;
}

calculatorCorrect();



if (location.hash) {
	updatePage();
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
		}else {
			item.classList.remove('page_active');
		}
	})
}


//ф-ция проверки согласия на условия передачи ин-ции
function check(){
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

		if(nextButton !== null && checkbox){


			checkbox.addEventListener('click', () => {
				if(!checkbox.checked){
					nextPage.classList.add('removal');
				}else{
					nextPage.classList.remove('removal');
				}
			});

			// навешиваем на кнопку событие клик
			nextButton.addEventListener('click', () => {
				//если галочка не стоит
				if(!checkbox.checked){
					//используем метод preventDefault() для отмены переключения стр
					event.preventDefault();
				}
			})
		}


	})
}

check();



function testPhone(){
	//находим все импуты, где должны записываться только цифры
	const el = document.querySelectorAll(".form__phone-input");

	el.forEach(item => {
		//на каджый инпут навешиваем событие onkeyup
		//(возникает в момент отпускания нажатой клавиши)
		item.onkeyup = function test(){
			const value = item.value;

			const pattern = /[-\.;":'a-zA-Zа-яА-Я]/;

			//делаем проверку с помощью метода test
			//(выполняет поиск сопоставления)
			if(pattern.test(value)){
				//Метод replace() возвращает новую строку с сопоставлениями, заменёнными на заменитель
				item.value = value.replace(pattern, '');
			}
		}
	})
}

testPhone();



function testText(){
	//находим все импуты, где должны записываться только буквы
	const el = document.querySelectorAll(".form__text-input");

	el.forEach(item => {
		//на каджый инпут навешиваем событие onkeyup
		//(возникает в момент отпускания нажатой клавиши)
		item.onkeyup =function Auto() {
			let value = item.value;

			//создаем объект для корректировки строки
			const replacer = {
				"q":"й", "w":"ц"  , "e":"у" , "r":"к" , "t":"е", "y":"н", "u":"г",
				"i":"ш", "o":"щ", "p":"з" , "[":"х" , "]":"ъ", "a":"ф", "s":"ы",
				"d":"в" , "f":"а"  , "g":"п" , "h":"р" , "j":"о", "k":"л", "l":"д",
				";":"ж" , "'":"э"  , "z":"я", "x":"ч", "c":"с", "v":"м", "b":"и",
				"n":"т" , "m":"ь"  , ",":"б" , ".":"ю" , "/":"."
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




function paintingStars() {
	const block = document.querySelectorAll('.phone-number__numbers-container');

	block.forEach(item => {
		const star = item.querySelector('.phone-number__price');
		const checkbox = item.querySelector('input[type="checkbox"]');


		checkbox.addEventListener('click', () => {
			star.classList.toggle('color');
			favorites();
		})
	})

}
paintingStars();

function favorites() {
	const block = document.querySelector('.phone-number__numbers');
	const container = block.querySelectorAll('.phone-number__numbers-container');
	const favoritesNumbers = document.querySelector('.favorites-btn');
	const favoritesName = favoritesNumbers.querySelectorAll('.favorites-items');
	const arr = Array.from(container);

	function stars(el){
		return el.querySelector('input[type="checkbox"]:checked');
	}

	console.log(arr.some(stars));

	if(arr.some(stars) === true){
		console.log('test');
		favoritesName.forEach(item => {
			item.classList.remove('favorites');
		})
	}else{
		console.log('test1');
		favoritesName.forEach(item => {
			item.classList.add('favorites');
		})
	}
}

function onlyFavorites() {
	const page = 0;
	const block = document.querySelectorAll('.phone-number__numbers-block1');

	block.forEach(item => {
		const elem = item.querySelectorAll('.phone-number__numbers-container');

	})

	

}

onlyFavorites();
























