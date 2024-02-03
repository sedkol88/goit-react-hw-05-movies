import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMThiYTIxZDE1MzI0YzAxNjgwMmVjNTI4NGJkOGEzYiIsInN1YiI6IjY1YmFhNGVjMzNhMzc2MDBlNjg1ZmJmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fLVvcAoMtoguxzCXZiqFiKcftDcbrmaR_5k4XEIUtk8',
  },
});

export const getAllPosts = () => {
  return instance.get('/trending/all/day');
};

export const getPostById = id => {
  return instance.get(`/movie/${id}`);
};

export const getCastById = id => {
  return instance.get(`/movie/${id}/credits`);
};

export const getReviewsById = id => {
  return instance.get(`/movie/${id}/reviews`);
};

export const searchPosts = (q, _page = 1) => {
  return instance.get('/search/movie', {
    params: {
      q,
      // _limit: 10,
      _page,
    },
  });
};
