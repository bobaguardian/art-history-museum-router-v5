import { NavLink, Route, Switch } from 'react-router-dom';
import './GalleryNavigation.css';

const GalleryNavigation = ({ galleries }) => {
    console.log(galleries);
    return (
        <nav>
            <NavLink exact to='/'>Home</NavLink>
            <h1>Hello from GalleryNavigation</h1>
            {galleries.map((gallery) => (
                <span key={gallery.id}>
                    <NavLink to={`/galleries/${gallery.id}`}>{gallery.name}</NavLink>
                </span>
            ))}

            {/* <Switch>
                <route path={`galleries/:id`}>
                </route>
            </Switch> */}
        </nav>
    )
};

export default GalleryNavigation;
