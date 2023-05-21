import { options } from "./options.js";

const buscar = document.querySelector('.inputFormulario').value;

/*
const url =  `https://watchmode.p.rapidapi.com/autocomplete-search/?search_value=${buscar}&search_type=1`;
const url2 = `https://watchmode.p.rapidapi.com/autocomplete-search/?search_value=${buscar}&search_type=1`;
*/

document.querySelector(".buscar").addEventListener("click", (e) => {
    e.preventDefault();

    console.log(buscar.value);
    /*
    const fetchData = async () =>{
        try {
            const response = await fetch(url2, options);
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }
    fetchData()
    */
});















