import { useRef, useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieById } from 'getFetch';
// import { getMovieById } from 'getFetch';

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
  const BASE_POSTER_URL = 'https://image.tmdb.org/t/p/w500/';
  return (
    <>
      MovieDetails : {movieId}
      <Link to={backLinkLocationRef.current}> Back to movie</Link>
      <img src={`${ movie.poster_path
              ? BASE_POSTER_URL + movie.poster_path :  movie.original_title}`} alt={`${movie.title}`}/>
      
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
