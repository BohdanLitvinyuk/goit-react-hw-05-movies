import { useRef, useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieById } from 'getFetch';
// import { getMovieById } from 'getFetch';
import MovieCard from './MovieCard/MovieCard';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();

  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    const fetchMovieById = async () => {
      try {
        const movieById = await getMovieById(movieId);
        // console.log(movieById);
        setMovie(movieById);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovieById();
  }, [movieId]);

  return (
    <>
      <Link to={backLinkLocationRef.current}>
        <button>Go Back </button>
      </Link>

      <MovieCard movie={movie} />

      <ul>
        <li>
          <Link to="Cast"> Cast</Link>
        </li>
        <li>
          <Link to="review"> Review</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
