import { options } from "./options.js";

document.querySelector(".buscar").addEventListener("click", (e) => {
    e.preventDefault();
    const buscar = document.getElementById('inputFormulario').value;
    const url2 = `https://watchmode.p.rapidapi.com/autocomplete-search/?search_value=${buscar}&search_type=1`;
    const fetchData = async () =>{
        try {
            const response = await fetch(url2, options);
            const data = await response.json();
            // console.log(data); // Solicitamos los datos de la API
            const resultadosBusqueda = data.results
            obtenerID(resultadosBusqueda)
        } catch (error) {
            console.error(error);
        }
    }
    fetchData()
});
function obtenerID(resultadosBusqueda) {
    let carta = "";
    for (let i = 0; i < resultadosBusqueda.length; i++) {
        const ID = resultadosBusqueda[i].id;
    const url_info_detallada = `https://watchmode.p.rapidapi.com/title/${ID}/details/?language=ES`;

        const fetchData = async () => {
            try {
                const response = await fetch(url_info_detallada, options)
                const data = await response.json();
                // console.log(data); // obtenemos la info detallada de todos los resultados
                const poster = data.poster
                const titulo = data.title
                const tipo = data.type
                const estreno = data.release_date
                const generos = data.genre_names
                const calificacion = data.user_rating

                carta += /*HTML*/`
                <div class="text-content">
                    <img src="https://cdn.watchmode.com/posters/03173903_poster_w185.jpg" alt="">
                    <h3 class="nombre">Nombre</h3>
                    <p class="type">Tipo</p>
                    <p class>tiempo de duracion o cantidad de capitulos</p>
                </div>
                `
            } catch (error) {            
            }
        };
        fetchData();
    } 
}













