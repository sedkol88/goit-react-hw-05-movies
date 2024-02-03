import { Link, Outlet, useParams, useNavigate } from 'react-router-dom';

import MovieDetails from '../../components/MovieDetails/MovieDetails';

import styles from './movie-details-page.module.css';

const MovieDetailsPage = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  return (
    <>
      <div className={styles.singlePostBox}>
        <button onClick={() => navigate(-1)} type="button">
          Go back
        </button>
        <MovieDetails />
        <h3>Additional Information</h3>
        <ul className={styles.list}>
          <li>
            <Link to={`/posts/${id}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`/posts/${id}/reviews`}>Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetailsPage;
