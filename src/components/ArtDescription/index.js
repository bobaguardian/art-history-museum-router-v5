
import { Link } from 'react-router-dom';

const ArtDescription = ({ gallery }) => {
  console.log("IN ART DESCRIPTION", gallery);
  return (
    <div>
      <h1>Hello from Art Description</h1>
      {gallery.objects.map((art) => {

      })}
      <Link to={`/galleries/${gallery.id}`}>Back to Gallery {gallery.name}</Link>
      {/* <p>Description: {gallery.description}</p>
      <p>Credit: {gallery.credit}</p>
      <p>Technique: {gallery.technique}</p> */}

    </div>
  );
}

export default ArtDescription;
