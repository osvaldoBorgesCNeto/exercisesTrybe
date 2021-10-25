let estadosTodos = ['Acre', 'Alagoas', 'Amapa', 'Amazonas', 'Bahia', 'Ceara', 'Espirito Santo', 'Goias', 'Maranhao', 'Mato Grosso', 'Mato Grosso do Sul', 'Minhas Gerais', 'Para', 'Paraiba', 'Parana', 'Pernambuco', 'Piaui', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondonia', 'Roraima', 'Santa Catarina', 'Sao Paulo', 'Sergipe', 'Tocatins', 'Distrito Federal'];
let siglasTodas = ['ac', 'al', 'ap', 'am', 'ba', 'ce', 'es', 'go', 'ma', 'mt', 'ms', 'mg', 'pa', 'pb', 'pr', 'pe', 'pi', 'rj', 'rn', 'rs', 'ro', 'rr', 'sc', 'sp', 'se', 'to', 'df'];

function estados(nameEstado, siglas) {
	const father = document.querySelector('#input-stage');
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

window.onload = function() {
	loopEstado();
}
