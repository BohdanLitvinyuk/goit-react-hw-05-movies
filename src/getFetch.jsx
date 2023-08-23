import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'b1c6bbc042c9e61c5ef7b6dc565b8ced';


export const getTrendMovie = async ()=>{
    const {data} = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
    return data.results;
}

export const getSearchMovie = async (query)=>{
    const {data} = await axios.get(`search/movie?query=${query}&include_adult=false?api_key=${API_KEY}`);
    return data.results;
}


export const getMovieById = async (id)=>{
    const {data} = await axios.get(`movie/${id}?api_key=${API_KEY}`);
    console.log(data);
    return data;
}