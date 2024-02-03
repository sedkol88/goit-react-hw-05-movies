import { Routes, Route } from 'react-router-dom';

import MainMenu from './components/MainMenu/MainMenu';

import HomePage from './pages/HomePage/HomePage';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
import Cast from './components/Cast/Cast';
import Reviews from './components/Reviews/Reviews';

function App() {
  return (
    <div className="App">
      <MainMenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts-search" element={<MoviesPage />} />
        <Route path="/posts/:id/*" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
