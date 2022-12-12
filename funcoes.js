let tamanho = 2;

function atualizatamanho() {
	const titulos = document.querySelectorAll('h1');
	titulos.style.fontSize = `${tamanho}em`;
}

function aumentatamanho() {
	tamanho += .5;
	atualizatamanho()
}

function diminuitamanho() {
	tamanho -= .5;
	atualizatamanho()
}
