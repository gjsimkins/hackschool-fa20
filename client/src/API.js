import axios from 'axios';

const serverUrl = "https://pokemon-creator.herokuapp.com/api";

const API = {
    getPokemon: function() {
        return axios.get(`${serverUrl}/pokemon`);
    },
    createPokemon: function(pokemon) {
        return axios.post(`${serverUrl}/pokemon`, pokemon);
    }
};

export default API;