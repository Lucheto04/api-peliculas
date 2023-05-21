import { options } from "./options.js";

document.querySelector(".buscar").addEventListener("click", (e) => {
    e.preventDefault();
    const buscar = document.getElementById('inputFormulario').value;
    const url2 = `https://watchmode.p.rapidapi.com/autocomplete-search/?search_value=${buscar}&search_type=1`;

    console.log(buscar);
    
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
    
});















