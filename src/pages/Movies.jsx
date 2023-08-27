import { useState,useEffect} from 'react';
import {  useSearchParams } from 'react-router-dom';
import { getSearchMovie } from 'services/getFetch';
import ItemList from 'components/MovieList/ItemList';
const Movies = () => {
  const [movie, setMovie] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);
  
  const [searchParams, setSearchParams] = useSearchParams();
  
  const updateQueryString = evt => {
    // if(evt.target.value !== '')
    setSearchQuery(evt.target.value);
  };


  useEffect( ()=>{   
     const currentQuery = searchParams.get('query') ?? '';
const fetchMovie=async()=>{
  try {
      const movieByQuery = await getSearchMovie(currentQuery);
      setMovie(movieByQuery);
    } catch (error) {
      console.log(error);
    }
}
    
    fetchMovie();
  },[searchParams])


  const handleFormSubmit = async evt => {

    evt.preventDefault();
    if (!searchQuery) {
      setSearchParams({});
    }
    setSearchParams({ query: searchQuery });
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input type="text" onChange={updateQueryString} />

        <button type="submit"> Search </button>
      </form>
      
      <ItemList movie={movie} />
    </div>
  );
};
export default Movies;
