import axios from 'axios';

const API_KEY_V4_AUTH =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzU0YjI4OTg0YTYwYjBkZThmNzljOTMyMmVlYmY1OSIsInN1YiI6IjYwZGNmZDBkOTk3OWQyMDAyOTQzNmJhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gZolqivUSBHzbWdsqpPOVtBSN2X05rqq4rm1n9fSMtE';
const POSTER_PATH = 'https://image.tmdb.org/t/p/w500';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.common['Authorization'] = `Bearer ${API_KEY_V4_AUTH}`;

export function getPosterPic(poster, template = 'avatar.jpg') {
  return poster
    ? `${POSTER_PATH}${poster}`
    : process.env.PUBLIC_URL + `/${template}`;
}

export async function getTrendMovies() {
  try {
    const {
      data: { results: data },
    } = await axios.get('/trending/movie/day');
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function searchMovies(query) {
  try {
    const {
      data: { results: data },
    } = await axios.get(`/search/movie?query=${query}`);
    return data || [];
  } catch (error) {
    console.log(error);
  }
}

export async function getMovieById(movieId) {
  try {
    const { data } = await axios.get(`/movie/${movieId}`);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getMovieCastById(movieId) {
  try {
    const {
      data: { cast: data },
    } = await axios.get(`/movie/${movieId}/credits`);
    return data || [];
  } catch (error) {
    console.log(error);
  }
}

export async function getMovieReviewsById(movieId) {
  try {
    const {
      data: { results: data },
    } = await axios.get(`/movie/${movieId}/reviews`);
    return data || [];
  } catch (error) {
    console.log(error);
  }
}
