import { useLocation, Link } from 'react-router-dom';
import './MovieList.css'
const ItemList = ({ movie }) => {
    const location = useLocation();
  return (
    <ul className='MovieList'>
      {movie.map(({ id, original_title }) => (
        <li key={id} id={id} className='MovieListItem'>
            <Link state={{ from: location }} to={`/movies/${id}`} className='MovieListLink'>
            {original_title}
          </Link>
    
        </li>
      ))}
    </ul>
  );
};

export default ItemList;