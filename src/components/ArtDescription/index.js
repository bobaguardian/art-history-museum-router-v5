
import { Link } from 'react-router-dom';

import './ArtDescription.css';

const ArtDescription = ({ gallery }) => {
  return (
    <div>
      {gallery.objects.map((art) => (
        <div className="description flex">
          <h2>{art.title}</h2>
          <img src={art.primaryimageurl}></img>
          {art.description ? <p>Description: {art.description}</p> : null}
          {art.creditline ? <p>Credit: {art.creditline}</p> : null}
          {art.technique ? <p>Technique: {art.technique}</p> : null}
          <a href={art.url}>Artwork Link</a>
        </div>

      ))}

      <Link to={`/galleries/${gallery.id}`}>Back to Gallery {gallery.name}</Link>

    </div>
  );
}

export default ArtDescription;
