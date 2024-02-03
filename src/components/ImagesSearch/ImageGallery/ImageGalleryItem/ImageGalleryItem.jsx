import styles from './image-gallery-item.module.css';
import { Link } from 'react-router-dom';

const ImageGalleryItem = ({ items }) => {
  const elements = items.map(({ id, title }) => (
    <li className={styles.item} key={id}>
      <Link to={`/posts/${id}`}>{title}</Link>
    </li>
  ));

  return elements;
};

export default ImageGalleryItem;
