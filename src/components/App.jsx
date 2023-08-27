import {  Route, Routes } from 'react-router-dom';
// import MovieDetails from './MovieDetails/MovieDetails';
// import Home from '../pages/home';
// import Movies from '../pages/Movies';
import { Layout } from '../pages/Layout';
// import Cast from './Cast/Cast';
// import Reviews from './Reviews/Reviews';
import { lazy } from 'react';
const MovieDetails=lazy(()=>import('./MovieDetails/MovieDetails'))
const Home=lazy(()=>import('../pages/home'))
const Cast = lazy(()=>import('./Cast/Cast'))
const Movies=lazy(()=>import('../pages/Movies'));
const Reviews=lazy(()=>import('./Reviews/Reviews'))



export const App = () => {
  return (
    
      <Routes >
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
        <Route path="movies" element={<Movies/>} />
        <Route path="movies/:movieId" element={<MovieDetails/>} >
          <Route path="cast" element={<Cast/>}/>
          <Route path="review" element={<Reviews/>}/>
        </Route>
        </Route>
        
      </Routes>
   
  );
};
