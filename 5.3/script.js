function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Exercício 1:

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;

function createDaysOfTheMonth() {
	const daysOfDecember = document.querySelector('#days');

	for (let index = 0; index < dezDaysList.length; index += 1) {
		const days = dezDaysList[index];
		const dayListItem = document.createElement('li');
		dayListItem.className = 'day';
    dayListItem.innerHTML = days;

		if (days === 24 || days === 31) {
			dayListItem.className = 'day holiday'
		}

		if (days === 4 || days === 11 || days === 18) {
			dayListItem.className = 'day friday'
		}

		if (days === 25) {
			dayListItem.className = 'day holiday friday'
		}

    daysOfDecember.appendChild(dayListItem);
	}
}

createDaysOfTheMonth();

// Exercício 2:

function holidayButtonCreate () {
	const holidayButton = document.createElement('input');
	holidayButton.id = 'btn-holiday';
	holidayButton.value = 'Feriados';
	holidayButton.type = 'button';
	holidayButton.style.marginLeft = '50px';
	holidayButton.style.marginRight = '50px';

	document.querySelector('.buttons-container').appendChild(holidayButton);
}

holidayButtonCreate();

// Exercício 3:

const holidayButton = document.querySelector('#btn-holiday')
holidayButton.addEventListener ('click', function () {
	const listDays = document.querySelectorAll('.day');
	if (listDays[25].style.backgroundColor !== 'green') {
		for (let index = 0; index < listDays.length; index += 1) {
			const classHoliday = listDays[index].className.split(' ');
			for (let index2 = 0; index2 < classHoliday.length; index2 += 1) {
				if (classHoliday[index2] === 'holiday') {
				listDays[index].style.backgroundColor = 'green';
				listDays[index].style.color = 'white';
				}
			}
		}
	} else if (listDays[25].style.backgroundColor === 'green') {
		for (let index3 = 0; index3 < listDays.length; index3 += 1) {
			if (listDays[index3].style.backgroundColor === 'green') {
				listDays[index3].style.backgroundColor = 'rgb(238,238,238)';
				listDays[index3].style.color = '#777';
			}
		}
	}
});

// Exercício 4:

function fridayButtonCreate () {
	const fridayButton = document.createElement('input');
	fridayButton.id = 'btn-friday';
	fridayButton.value = 'Sexta-feira';
	fridayButton.type = 'button';
	fridayButton.style.marginLeft = '50px';
	fridayButton.style.marginRight = '50px';

	document.querySelector('.buttons-container').appendChild(fridayButton);
}

fridayButtonCreate();

// Exercício 5:

const fridayButton = document.querySelector('#btn-friday')
fridayButton.addEventListener ('click', function () {
	const listDays = document.querySelectorAll('.day');
	if (listDays[5].innerText === '4') {
		for (let index = 0; index < listDays.length; index += 1) {
			const classFriday = listDays[index].className.split(' ');
			for (let index2 = 0; index2 < classFriday.length; index2 += 1) {
				if (classFriday[index2] === 'friday') {
				listDays[index].innerText = 'SEXTOU!!!';
				}
			}
		}
	} else if (listDays[5].innerText === 'SEXTOU!!!') {
		for (let index3 = 0; index3 < listDays.length; index3 += 1) {
			if (listDays[index3].innerText === 'SEXTOU!!!') {
				listDays[index3].innerText = dezDaysList[index3]
			}
		}
	}
});

// Exercício 6:

const daysHTML = document.querySelectorAll('.day');
daysHTML=addEventListener ('mouseover', function () {
	daysHTML[0].style.fontSize = '25px';
})