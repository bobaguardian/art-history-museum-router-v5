import { Route } from 'react-router-dom';

import './App.css';
import harvardArt from './data/harvardArt';
import GalleryNavigation from './components/GalleryNavigation/index';
import GalleryView from './components/GalleryView/index';

function App() {
  return (
    <div>
      <GalleryNavigation galleries={harvardArt.records} />

      <Route path='/galleries/:galleryId'>
        <GalleryView galleries={harvardArt.records} />
      </Route>
    </div>
  );
}

export default App;
