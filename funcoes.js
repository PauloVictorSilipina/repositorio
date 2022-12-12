let tamanho = 4;

function atualizatamanho() {
	const titulos = document.querySelector("h1");
	titulos.style.fontSize = tamanho;
}

function aumentatamanho() {
	if (tamanho < 7.5) {
		tamanho -= 0.5;
		atualizatamanho()
	}
}

function diminuitamanho() {
	if (tamanho > 0) {
		tamanho -= 0.5;
		atualizatamanho()
	}
}
