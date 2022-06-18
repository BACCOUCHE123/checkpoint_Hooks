import React, {useState}from 'react'
import {Link ,useParams} from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';
const MovieCard =({movies}) => {
const {id} =useParams()
  const [m, setM] = useState(movies.find(movie => movie.id === id))
  console.log(id)
return (
<div>
<Link to={`/`} style={{color: "white", position:"absolute",top:20,left:20}}>GO Back</Link>
      <h1>{m.title}</h1>
      
      <h4>{m.discription}</h4>
      <div>
      <StarRatingComponent 
        name="rate1" 
        starCount={5}
        value={parseInt( m.rating)} />

        </div>

        <iframe width="853" height="480" src={m.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    
)}


export default MovieCard 