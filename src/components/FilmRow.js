import FilmPoster from "./FilmPoster";

export default function FilmRow(props) {
    return (
        <div className="film-row">
            <FilmPoster posterURL={`https://image.tmdb.org/t/p/w780/${props.film.poster_path}`}/>

            <div className="film-summary">
                <h1>{props.film.title}</h1>
                <p>{new Date(props.film.release_date).getFullYear()}</p>
            </div>
        </div>

    ) 
}