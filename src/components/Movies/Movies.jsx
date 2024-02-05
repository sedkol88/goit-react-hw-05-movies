import { useState, useEffect } from 'react';
import { useSearchParams, useLocation, Link } from 'react-router-dom';
import { fetchSearchMovie } from 'api/posts';

import styles from './movies.module.css';

const Movies = () => {
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState(searchParams.get('query') ?? '');
  const query = searchParams.get('query') ?? '';
  const location = useLocation();

  const onFormSubmit = e => {
    e.preventDefault();
    if (value === '') {
      return alert(
        'Sorry, but we can not find empty string, you should write something'
      );
    }
    setSearchParams({ query: value });
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    fetchSearchMovie(query)
      .then(info => {
        if (!info.data.total_results) {
          return alert(`Sorry we dont found ${query}`);
        }
        setFilms(info.data.results);
      })
      .catch(error => console.log(error));
  }, [query]);

  const handleInputChange = e => {
    setValue(e.target.value);
  };

  return (
    <>
      <form className={styles.form} onSubmit={onFormSubmit}>
        <input
          type="text"
          className={styles.input}
          value={value}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {films.map(({ title, name, id }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title}
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Movies;
