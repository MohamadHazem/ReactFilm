import './App.css';
import FilmLDetails from './components/FilmDetails';
import FilmListing from './components/FilmListing';
import TMDB from './data/TMDB';

function App() {
  return (
    <div className="film-library">
      <FilmListing movieData={TMDB}/>
      <FilmLDetails movieData={TMDB}/>
    </div>
  );
}

export default App;