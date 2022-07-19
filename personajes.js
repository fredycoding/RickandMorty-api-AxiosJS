export const cargarPersonajes = async(pagina) => {	
	try {
		const respuesta =await axios(`https://rickandmortyapi.com/api/character/?page=${pagina}`);	
        const datos = await respuesta.data.results;
		console.log(datos)

		if(respuesta.status == 200){			
			let personajes = '';
			datos.forEach(personaje => {
				personajes += `
					<div class="card">
						<img class="poster" src="${personaje.image}">
						<h3 class="titulocard">${personaje.name}</h3>
                        <h4 class="subtitulocard">${personaje.species} - ${personaje.gender}</h4>
					</div>`;
			});
			document.getElementById('contenedor').innerHTML = personajes;
		} else {
			console.log('Error en el status:' + respuesta.status);
		}

	} catch(error){
		console.log(error);
	}

}
cargarPersonajes();

