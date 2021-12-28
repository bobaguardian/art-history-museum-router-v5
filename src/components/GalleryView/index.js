
import { useParams } from 'react-router-dom';

const GalleryView = ({ galleries }) => {
  const {galleryId} = useParams();
  const gallery = galleries.find((gallery) => gallery.id === parseInt(galleryId));
  console.log(gallery);

  return (
    <div>
      <h1>Hello from GalleryView</h1>
      <h2>{gallery.name}</h2>
    </div>
  );
}

export default GalleryView;
