import { useEffect, useState } from 'react';

import Button from '../Button/Button';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { searchPosts } from '../../api/posts';

import styles from './images-search.module.css';

const ImagesSearch = () => {
  const [search, setSearch] = useState('');
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const { data } = await searchPosts(search, page);
        setPosts(prevPosts =>
          data?.results?.length ? [...prevPosts, ...data.results] : prevPosts
        );
        setTotalResults(data.total_results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (search) {
      fetchPosts();
    }
  }, [search, page]);

  const handleSearch = ({ search }) => {
    setSearch(search);
    setPosts([]);
    setPage(1);
  };

  const loadMore = () => setPage(prevPage => prevPage + 1);

  const isPosts = Boolean(posts.length);

  return (
    <>
      <Searchbar onSubmit={handleSearch} />
      {error && <p className={styles.error}>{error}</p>}
      {loading && <p>...Loading</p>}
      {isPosts && <ImageGallery items={posts} />}

      {isPosts && (
        <div className={styles.loadMoreWrapper}>
          {posts.length < totalResults && (
            <Button onClick={loadMore} type="button">
              Load more
            </Button>
          )}
        </div>
      )}
    </>
  );
};

export default ImagesSearch;
