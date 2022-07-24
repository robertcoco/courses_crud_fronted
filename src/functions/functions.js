import axios from 'axios';

const TodosPersonajes = async() => {
    const request =  await axios.get("https://rickandmortyapi.com/api/character");
    console.log("hola");
}

export {
    TodosPersonajes
}