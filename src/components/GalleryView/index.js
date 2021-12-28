import { useParams, Route, Switch } from 'react-router-dom';
import ArtDescription from '../ArtDescription/index';
import ArtImageTile from '../ArtImageTile/index';

const GalleryView = ({ galleries }) => {
  const {galleryId} = useParams();
  const gallery = galleries.find((gallery) => gallery.id === parseInt(galleryId));

  return (
    <div>
      <h2>{gallery.name}</h2>
        <Switch>
          <Route exact path={`/galleries/${galleryId}`}>
            {gallery.objects.map((art) => (
              <ArtImageTile art={art} galleryId={galleryId}/>
            ))}
          </Route>
          <Route path={`/galleries/${galleryId}/art/:artId`}>
            <ArtDescription gallery={gallery} />
          </Route>

        </Switch>

    </div>
  );
}

export default GalleryView;
