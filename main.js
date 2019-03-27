 function learnMoreBtn() { // объявляем функцию
	const btn = document.querySelector(".bring-info__learn-more"); // объявляем константу, которая обращается к селектору
	const text = document.querySelector(".bring-info__learn_more-text"); // объявляем константу, которая обращается к селектору

	btn.addEventListener("click", function() { // добавляем к константе обработчик событий "клик", который вызывает функцию
		// btn.classList.add("display-none"); // объявляем функцию
		// text.classList.add("display-block"); // объявляем функцию
		btn.style.display = "none"; // на константу накидываем стиль, свойство и значение "none", что выполняется вышеуказанной ф-цией, которая запускается благодаря собитию "клик"
		text.style.display = "block"; // тоже самое, только блок
	}); 
}

learnMoreBtn(); // вызываем функцию


function appearError() {  // объявляем функцию
	let input = document.querySelector(".js-name-input");  // объявляем переменную, которая обращается к селектору
	let errorPlace = document.querySelector(".js-error-name"); // объявляем переменную, которая обращается к селектору

	input.addEventListener("blur", function() {  // добавляем к переменной input обработчик событий, который реагирует, в случае если с элемента снимается фокус, и вызывает функцию
		if (input.value.length == 0) {  // Если значение в условии истинно, то есть значение селектора "нестрого" равно нулю выполняется функция.
			errorPlace.innerHTML = "Укажите Ваше ФИО";  // В переменную вставляем  строку
			input.classList.add("error-border"); // добавляем класс к переменной через метод класс-лист
			input.classList.remove("pseudo-hover");   // снимаем с переменной класс, через метод класс-лист
		} else {  // если значение вышеуказанного условия не истинно, выполняется другая функция, нижеследующая
			errorPlace.innerHTML = ""; // в переменную также вставляется строка, с другими значениями
			input.classList.remove("error-border");  // снимаем с переменной класс, через метод класс-лист
			input.classList.add("pseudo-hover"); // добавляем класс к переменной через метод класс-лист
		}
	});
}

appearError(); // вызываем функцию

function citizenship() {

var sel = document.querySelector(".form__citizenship-input");
var value = sel.options[sel.selectedIndex].value;
var countryOk = document.querySelector(".form__country");

	sel.addEventListener("click", function() {
		if (sel.selectedIndex == 0) {
			countryOk.style.display = "none";
		} else {
			countryOk.style.display = "block";
		}
	});
}

citizenship();

function ascentText(labelClass) { // объявляем функцию, в параметры записываем переменную labelClass
	const inputs = document.querySelectorAll(labelClass);   // объявляем  переменную labelClass

	for (let i = 0; i < inputs.length; i++) {  //объявляем цикл, который начинается с переменной i, к которой присваиваем значение 0; переменная i меньше чем массив inputs.length и инкрементацией последовательно перебирает его, выполняя следующие команды.
		inputs[i].addEventListener("blur", function() {  // к сметченной с массивом [i] переменной инпут, навешивается событие blur, при этом объявляется функция при которой
			if (inputs[i].value.length > 0) { // если значение сметченной с массивом [i] переменной инпут больше чем 0
				inputs[i].classList.add("form__input-up"); // то к сметченной с массивом [i] переменной инпут добавляется класс 
			} else {
				inputs[i].classList.remove("form__input-up");	// или убирается класс 
			}

			appearCross(); // если сметчилось, то так же выполняется функция ниже appear cross
		}); 
	}
}

ascentText(".js-ascent-text"); // вызываем функцию 

function clearField() {  // объявляем функцию 
	const inputs = document.querySelectorAll(".js-ascent-text");
	const clearField = document.querySelectorAll(".js-clear-field");

	for (let i = 0; i < clearField.length; i++) {
		clearField[i].addEventListener("click", function() {
			inputs[i].value = "";						

			if (inputs[i].value.length > 0) {
				inputs[i].classList.add("form__input-up");				
			} else {
				inputs[i].classList.remove("form__input-up");	
			}

			appearCross();
		});
	}
}

clearField();

function appearCross() { 
	const inputs = document.querySelectorAll(".js-ascent-text");
	const clearField = document.querySelectorAll(".js-clear-field");

	for (let i = 0; i < clearField.length; i++) {
		if (inputs[i].value.length > 0) {
			clearField[i].style.display = "block";
		} else {	
			clearField[i].style.display = "none";
		}
	}
}

function toggleModal(button, popup, closeButton) {
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

toggleModal(".js-open-btn-conditions", ".js-popup--condition", ".js-close-btn-conditions");
toggleModal(".js-open-btn-friend", ".js-popup--friend-condition", ".js-close-btn-friend");




