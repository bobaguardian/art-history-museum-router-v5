import { Link } from 'react-router-dom';

const ArtImageTile = ({art, galleryId}) =>{
    return (
        art.images[0].baseimageurl ?
        <div>
            <Link to={`/galleries/${galleryId}/art/${art.id}`} >
                <img src={art.images[0].baseimageurl} alt="temp" />
            </Link>
        </div>
        : null
    )
};

export default ArtImageTile;
