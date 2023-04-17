import axios from 'axios';

const KEY_API = '?api_key=df88ba4f44a5ed712dd0a71f1b3d877c';
const BASE_URL = 'https://api.themoviedb.org/3';
const LANGUAGE = '&language=en-US';

export const getTrending = () => {
  const TRENDING = '/trending/movie/day';
  const response = axios.get(`${BASE_URL}${TRENDING}${KEY_API}`);
  return response;
};

export const getMovieById = id => {
  const BYID = `/movie/${id}`;
  const response = axios.get(`${BASE_URL}${BYID}${KEY_API}${LANGUAGE}`);
  return response;
};

export const getMovieAdditionalInformation = (id, info) => {
  const CREDITS = `/movie/${id}/${info}`;
  const response = axios.get(`${BASE_URL}${CREDITS}${KEY_API}${LANGUAGE}`);
  return response;
};

export default async function getSearchMovie(query) {
  const QUERY = `&query=${query}`;
  try {
    const response = await axios.get(
      `${BASE_URL}/search/movie${KEY_API}${LANGUAGE}${QUERY}`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
}
