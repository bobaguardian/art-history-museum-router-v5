import './App.css';
import harvardArt from './data/harvardArt';
import GalleryNavigation from './components/GalleryNavigation/index';

function App() {
  return (
    <div>
      <GalleryNavigation galleries={harvardArt.records}/>
    </div>
  );
}

export default App;
