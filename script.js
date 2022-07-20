import{cargarPersonajes, paginasdelaapi} from './personajes.js'

const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');
const tituloPagina = document.getElementById('tituloPagina');

let pagina = 1;

btnSiguiente.addEventListener('click', () => {
	if(pagina < paginasdelaapi){
		pagina += 1;
		tituloPagina.textContent = "Página " + pagina
		cargarPersonajes(pagina);
	}
});

btnAnterior.addEventListener('click', () => {
	if(pagina > 1){
		pagina -= 1;
		tituloPagina.textContent = "Página " + pagina
		cargarPersonajes(pagina);
	}
});

cargarPersonajes()