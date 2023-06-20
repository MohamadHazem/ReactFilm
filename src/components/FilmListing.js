import FilmRow from "./FilmRow"

export default function FilmListing(props) {
    return (
        <div className="film-list">
            <h1 className="section-title">FILMS</h1>
            {props.movieData.films.map(film => 
                <FilmRow key={film.id} film={film}/>
            )}
        </div>
    )
}