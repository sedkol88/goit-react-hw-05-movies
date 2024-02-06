import styles from './cast.module.css';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getCastById } from '../../api/posts';

const Cast = () => {
  const [casts, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const { data } = await getCastById(id);
        setCast(data?.cast.length ? data.cast : []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  const defaultImg =
    '<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>';

  const elements = casts.map(({ id, name, character, profile_path }) => (
    <li key={id} className={styles.item}>
      <p>{name}</p>
      <p>{character}</p>
      <img
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/w500${profile_path}`
            : defaultImg
        }
        alt="actor"
        width="100"
      />
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

export default Cast;
