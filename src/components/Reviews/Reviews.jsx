import styles from './reviews.module.css';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getReviewsById } from '../../api/posts';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const { data } = await getReviewsById(id);
        setReviews(data?.results.length ? data.results : []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, []);

  const elements = reviews.map(({ author, content }, index) => (
    <li key={index} className={styles.item}>
      <h4>Author: {author}</h4>
      <p>{content}</p>
    </li>
  ));

  return (
    <>
      {error && <p className={styles.error}>{error}</p>}
      {loading && <p>...Loading</p>}
      {Boolean(elements.length) ? (
        <ul className={styles.list}>{elements}</ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </>
  );
};

export default Reviews;
