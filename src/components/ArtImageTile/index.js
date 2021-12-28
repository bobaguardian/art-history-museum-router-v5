import { Link } from 'react-router-dom';

const ArtImageTile = ({art, galleryId}) =>{

    return (
        <div>
            <Link to={`/galleries/${galleryId}/art/${art.images[0].imageid}`} >
                <img src={art.images[0].baseimageurl} alt="temp"></img>
            </Link>
        </div>
    )
};

export default ArtImageTile;
