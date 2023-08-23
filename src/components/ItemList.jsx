import { useLocation, Link } from 'react-router-dom';

const ItemList = ({ movie }) => {
    const location = useLocation();
  return (
    <ul>
      {movie.map(({ id, original_title }) => (
        <li key={id} id={id}>
            <Link state={{ from: location }} to={`/movies/${id}`}>
            {original_title}
          </Link>
    
        </li>
      ))}
    </ul>
  );
};

export default ItemList;