import React from 'react'
import {Card } from "react-bootstrap";
import {v4 as uuidv4} from "uuid" 
import StarRatingComponent from 'react-star-rating-component';
import {Link} from "react-router-dom";

function MovieList({movies}) {
   return (
     <div className='listMovies'>
     <div className="pg">
       {movies.map((el,i)=><Card className="card" border="Primary" style={{ width: '18rem' }}key={uuidv4()} >
       
  <Card.Img  className="Img" variant="top" src={el.imgurl} />
  
  <Card.Body>
    <Card.Title>{el.Title} </Card.Title>
    <Card.Text>{el.description}</Card.Text>
    <StarRatingComponent 
                    name="rate1" 
                    starCount={5}
                    value={parseInt(el.Ratting)} />
  
  </Card.Body>
  <Link to={`/products/${el.id}`}>see more</Link>
</Card> 

)
} </div>
     </div>
   )
 }
 export default MovieList 