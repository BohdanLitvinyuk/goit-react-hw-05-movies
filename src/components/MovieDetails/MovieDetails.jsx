import { useRef, useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieById } from 'services/getFetch';
import MovieCard from '../MovieCard/MovieCard';
import './MovieDetails.css'

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();

  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    const fetchMovieById = async () => {
      try {
        const movieById = await getMovieById(movieId);
        setMovie(movieById);
      } catch (error) {
      }
    };
    fetchMovieById();
  }, [movieId]);

  return (
    <>
      <Link to={backLinkLocationRef.current} >
        <button>Go Back </button>
      </Link>

      <MovieCard movie={movie} />
<div className='aditionalList' >
<p>Additional Information</p>
   <ul >
        <li>
          <Link to="Cast"> Cast</Link>
        </li>
        <li>
          <Link to="review"> Review</Link>
        </li>
      </ul>
  </div>
      <Outlet />
    </>
  );
};

export default MovieDetails;
