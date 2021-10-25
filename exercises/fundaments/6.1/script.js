let estadosTodos = ['Acre', 'Alagoas', 'Amapa', 'Amazonas', 'Bahia', 'Ceara', 'Espirito Santo', 'Goias', 'Maranhao', 'Mato Grosso', 'Mato Grosso do Sul', 'Minhas Gerais', 'Para', 'Paraiba', 'Parana', 'Pernambuco', 'Piaui', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondonia', 'Roraima', 'Santa Catarina', 'Sao Paulo', 'Sergipe', 'Tocatins', 'Distrito Federal'];
let siglasTodas = ['ac', 'al', 'ap', 'am', 'ba', 'ce', 'es', 'go', 'ma', 'mt', 'ms', 'mg', 'pa', 'pb', 'pr', 'pe', 'pi', 'rj', 'rn', 'rs', 'ro', 'rr', 'sc', 'sp', 'se', 'to', 'df'];

function estados(nameEstado, siglas) {
	const father = document.querySelector('#input-estado');
	const estado = document.createElement('option');
	estado.innerText = nameEstado;
	estado.value = siglas;
	father.appendChild(estado);
}

function loopEstado() {
	let estadoIndex = '';
	let siglaIndex = '';
	for (let index = 0; index < estadosTodos.length; index += 1) {
		estadoIndex = estadosTodos[index];
		siglaIndex = siglasTodas[index];
		estados(estadoIndex, siglaIndex);
	}
}

function stop(event) {
	event.preventDefault();
	const father = document.querySelector('#resultado-final');
	const input = document.querySelectorAll('input');
	for (let index = 0; index < input.length; index += 1) {
		if (input[index].type === 'radio' && !input[index].checked) {
			continue;
		}
			const formInput = document.createElement('div');
			formInput.className = 'div-resultado';
			formInput.innerHTML = input[index].value;
			father.appendChild(formInput);
	}
}

const buttonStop = document.querySelector('#button-submit');
buttonStop.addEventListener('click', stop, false);

function clearAll() {
	const input = document.querySelectorAll('input');
	const textarea = document.querySelector('textarea');
	const divResult = document.querySelectorAll('.div-resultado');
	for (let index = 0; index < input.length && index < divResult.length; index += 1) {
		input[index].value = '';
		textarea.value = '';
		divResult[index].remove()
	}
}

const buttonClear = document.querySelector('#button-clear')
buttonClear.addEventListener('click', clearAll)

window.onload = function() {
	loopEstado();
}