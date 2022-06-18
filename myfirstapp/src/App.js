import './App.css';
import React, { useState} from 'react'
import {v4 as uuidv4} from "uuid"
import {Routes ,Route } from 'react-router-dom';
import Home from './Componets/Home';
import MovieCard from './Componets/MovieCard';


function App() {

  

  const [movies,setMovie]= useState([{
    id :uuidv4(),
    imgurl:"8.jpg " ,
    Title: " fast and furious 8",
    description : " est une série de films d'action américains, dont les thèmes tournent principalement autour des voitures et de la famille.",
    trailer:  "https://www.youtube.com/embed/d6BRWxsrcNA",
    Ratting : " 3 "

  },
  {
    id :uuidv4(),
    imgurl:"9.jpg " ,
    Title: "fast and furious 9 ",
    description : "Dom et son équipe doivent affronter un terroriste international qui s'avère être le frère séparé de Dom et Mia. ",
    trailer :"https://youtu.be/YT63DCXVH1g",
    Ratting : "4"


  },
  {
    id : uuidv4() ,
    imgurl:"7.jpg " ,
    Title: "fast and furious 7 ",
    description : "Deckard Shaw cherche à se venger de Dominic Toretto et de sa famille pour son frère dans le coma. ",
    trailer:"https://youtu.be/Skpu5HaVkOcv",
    Ratting : " 5 "


  },
  {
    id : uuidv4() ,
    imgurl:"https://play-lh.googleusercontent.com/YMkscfkxtVS8yNtCO8ieucgIgbe7Yv_ZlGMr1ytnY5UCVbygLPHR05d-KNXNQ3sgfphh " ,
    Title: "the lion king ",
    description : "season 2 (2020) ",
    trailer:"https://www.youtube.com/embed/7TavVZMewpY",
    Ratting : " 2 "



  }
]);
  const add =(newmovie)=>{
    setMovie((movies)=> movies.concat(newmovie))
  }
  return (

    <div className="App">
     
    <Routes>  
    <Route path='/' element ={<Home movies={movies} add={add}/> }/>
     <Route path ='/products/:id' element={<MovieCard movies={movies}/>}/> 
    </Routes>
       
    </div>
  );
}

export default App;
