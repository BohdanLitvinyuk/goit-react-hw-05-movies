import {  Route, Routes } from 'react-router-dom';
import MovieDetails from './MovieDetails';
import Home from '../pages/home';
import Movies from '../pages/Movies';
import { Layout } from '../pages/Layout';

export const App = () => {
  return (
    
      <Routes >
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
        <Route path="movies" element={<Movies/>} />
        <Route path="movies/:movieId" element={<MovieDetails/>} >
          <Route path="cast" element={<div> Cast film</div>}/>
          <Route path="review" element={<div> Review film</div>}/>

        </Route>
        </Route>
        
      </Routes>
   
  );
};
