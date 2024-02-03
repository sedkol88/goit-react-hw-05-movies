import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getPostById } from '../../api/posts';

import styles from './movie-details.module.css';

const MovieDetails = () => {
  const [post, setPost] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const { data } = await getPostById(id);
        setPost(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, []);

  const getReleaseYear = dateString => {
    return dateString ? new Date(dateString).getFullYear() : '';
  };

  return (
    <div>
      {loading && <p>...Loading</p>}
      {error && <p>Error: {error}</p>}
      {post && (
        <div className={styles.singlePost}>
          <img
            src={`https://image.tmdb.org/t/p/w500${post.poster_path}`}
            alt="movie poster"
            width="300"
          />
          <div>
            <h2>
              {post.title}
              {post.name} ({getReleaseYear(post.release_date)})
            </h2>
            <p>User score: {Math.floor(post.vote_average * 10)}%</p>
            <h3>Overview</h3>
            <p>{post.overview}</p>
            <h4>Genres</h4>
            <p>{post.genres.map(genre => genre.name).join(' ')}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
