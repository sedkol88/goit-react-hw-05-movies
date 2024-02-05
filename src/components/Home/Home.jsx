import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { getAllPosts } from '../../api/posts';

import styles from './home.module.css';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const { data } = await getAllPosts();
        setPosts(data?.results.length ? data.results : []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const elements = posts.map(({ id, title, name }) => (
    <li key={id} className={styles.item}>
      {id && (
        <Link to={`/movies/${id}`} state={{ from: location }}>
          {title}
          {name}
        </Link>
      )}
    </li>
  ));

  return (
    <>
      {error && <p className={styles.error}>{error}</p>}
      {loading && <p>...Loading</p>}
      {Boolean(elements.length) && <ul className={styles.list}>{elements}</ul>}
    </>
  );
};

export default Home;

{
  /* <Link to={`/posts/${id}`} state={{ from: location }}></Link> */
}
