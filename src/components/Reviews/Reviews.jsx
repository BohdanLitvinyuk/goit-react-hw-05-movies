
import { getMovieReview } from "services/getFetch"
import { useState, useEffect } from "react";
import {  useParams } from 'react-router-dom';


const Reviews=()=>{
    const [reviews,setReviews] = useState([]);
    const { movieId } = useParams();


    useEffect(() => {
      
        const fetchReviewById= async () => {
          try {
            const movieRewiews = await getMovieReview(movieId);
            setReviews(movieRewiews);
          } catch (error) {
            console.log(error);
          }
        };
        fetchReviewById();
      }, [movieId]);
  
     return( <ul className="">
        {reviews.map(({author, content, id
  })=>{return <li key={id}> 
     <h3>{author}</h3>
  <p>{content}</p>
     </li>})}
     </ul>
     )
   
  

}

export default Reviews;