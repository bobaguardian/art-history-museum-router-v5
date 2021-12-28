
import { useParams, Route } from 'react-router-dom';
import ArtImageTile from '../ArtImageTile/index';

const GalleryView = ({ galleries }) => {
  const {galleryId} = useParams();
  const gallery = galleries.find((gallery) => gallery.id === parseInt(galleryId));
  //console.log(gallery)
  //console.log(img);
  return (
    <div>
      <h2>{gallery.name}</h2>
      {gallery.objects.map((art) => (
        <Route path={`/galleries/${galleryId}`}>
          <ArtImageTile key={art.images[0].imageid} art={art} galleryId={galleryId}/>
        </Route>
      ))}
    </div>
  );
}

export default GalleryView;
