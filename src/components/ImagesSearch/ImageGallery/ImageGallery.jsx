import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

import styles from './imagegallery.module.css';

const ImageGallery = ({ items }) => {
  return (
    <ul className={styles.ImageGallery}>
      <ImageGalleryItem items={items} />
    </ul>
  );
};

export default ImageGallery;
