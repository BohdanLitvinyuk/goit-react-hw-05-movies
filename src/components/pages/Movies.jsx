import { useState,useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { getSearchMovie } from 'getFetch';
import ItemList from 'components/MovieList/ItemList';
const Movies = () => {
  const [movie,setMovie] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const searchQuery = searchParams.get('query') ?? '';

  const updateQueryString = evt => {
    const query= evt.target.value;
    if (query === '') {
      return setSearchParams({});
    }
    setSearchParams({ searchQuery: query });
  };
  useEffect(() => {
    const fetchMovieByQuery= async () => {
      try {
        const movieByQuery= await getSearchMovie(searchQuery);
        // console.log(movieById);
        setMovie(movieByQuery);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovieByQuery();
  }, [searchQuery]);

  const visibleMovie = movie.filter(movie => movie.includes(searchQuery));
  return (
    <div>
      Список фільмів
      <input type="text" onChange={updateQueryString} />
      <ItemList movie={movie}/>
            
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
