import { NavLink} from 'react-router-dom';
import './GalleryNavigation.css';

const GalleryNavigation = ({ galleries }) => {
    return (
        <nav>
            <NavLink exact to='/' id="home" >Home</NavLink>
            {galleries.map((gallery) => (
                <span key={gallery.id} className="gallery-link">
                    <NavLink to={`/galleries/${gallery.id}`}>{gallery.name}</NavLink>
                </span>
            ))}
        </nav>
    )
};

export default GalleryNavigation;
