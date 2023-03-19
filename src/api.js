import axios from 'axios';

const BASE_ENDPOINT = 'https://api.themoviedb.org/3/movie';
const API_KEY = 'a2df3d1a7611194432bbdf1fc80540f2';

export const getMovies = ({ pageParam = 1 }) => {
  return axios
    .get(
      `${BASE_ENDPOINT}/popular?api_key=${API_KEY}&language=en-US&page=${pageParam}`
    )
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

export const getMovie = (id) => {
  return axios
    .get(`${BASE_ENDPOINT}/${id}?api_key=${API_KEY}`)
    .then((response) => response.data)
    .catch((error) => console.log(error));
};
