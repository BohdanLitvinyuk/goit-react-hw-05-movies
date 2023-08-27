import "./MovieCard.css"

const MovieCard = ({ movie }) => {
  const {
    original_title,
    overview,
    vote_average,
    genres,
    poster_path,
    tagline,
  } = movie;

  return (
    <div className="movieCard">
      <img
        src={`${
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : movie.original_title
        }`}
        alt={tagline} height="320"
      />
      <div>
        <h1>{original_title}</h1>
      <p> User Score: {Math.round(vote_average)}%</p>
      <h2> Overview</h2>
      <p>{overview}</p>

      <ul className="MovieCardList">
        <h3>Genres:</h3>
        {genres?.map(genre => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
     
      </div>
      
    </div>
  );
};
export default MovieCard;
