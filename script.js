import{cargarPersonajes} from './personajes.js'
let pagina = 1;

const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');

btnSiguiente.addEventListener('click', () => {
	if(pagina < 43){
		pagina += 1;
		cargarPersonajes();
	}
});

btnAnterior.addEventListener('click', () => {
	if(pagina > 1){
		pagina -= 1;
		cargarPersonajes();
	}
});



cargarPersonajes();