import { useEffect, useState } from 'react';
import {getTrendMovie} from 'getFetch';
import ItemList from 'components/MovieList/ItemList';
const Home = () => {
    const [movie, setMovie]= useState([]);

  useEffect(() => {
    getTrendMovie().then(setMovie)
  
  }, [])
  return (
    <>
    <h1>
    Trending today 
        </h1>
<ItemList movie={movie}/>
        </>
  )
};
export default Home;
