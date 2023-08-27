
import { getMovieCast } from "services/getFetch";
import {  useParams } from 'react-router-dom';
import './Cast.css'
const { useState, useEffect } = require("react")

 const Cast=()=>{
   const  [cast,setCast] = useState([]);
const { movieId } = useParams();
   
   useEffect(() => {
      
      const fetchMovieCast= async () => {
        try {
          const movieCast = await getMovieCast(movieId);
          setCast(movieCast);
        } catch (error) {
          console.log(error);
        }
      };
      fetchMovieCast();
    }, [movieId]);

   return( <ul className="castList">
      {cast.map(({name,profile_path, character, id
})=>{return <li key={id}>
      <img src={`${profile_path
            ? `https://image.tmdb.org/t/p/w500/${profile_path}`
            : name
        }`} alt={name} width={240} />
   <h3>{name}</h3>
<p>{character}</p>
   </li>
   

   
})}
   </ul>
   )
 }



 export default Cast;