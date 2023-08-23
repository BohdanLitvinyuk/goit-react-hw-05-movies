import { useState } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';

const Movies = () => {
  const [movie] = useState([
    'movies-1',
    'movies-2',
    'movies-3',
    'movies-4',
  ]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const movieId = searchParams.get('movieId') ?? '';

  const updateQueryString = evt => {
    const movieIdValue = evt.target.value;
    if (movieIdValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ movieId: movieIdValue });
  };
  const visibleMovie = movie.filter(movie => movie.includes(movieId));
  return (
    <div>
      {' '}
      Список фільмів
      <input type="text" onChange={updateQueryString} />
      <ul>
        {visibleMovie.map(movie => {
          return (
            <li key={movie}>
              <Link to={`${movie}`} state={{ from: location }}>
                {movie}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Movies;
