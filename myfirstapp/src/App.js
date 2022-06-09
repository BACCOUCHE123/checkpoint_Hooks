import './App.css';
import AddMovie from './Componets/AddMovie';
import React, { useState,useEffect } from 'react'
import MovieList from './Componets/MovieList';
import {v4 as uuidv4} from "uuid"
import Filter from './Componets/Filter';


function App() {
  const [filteredMovie,setFilteredMovie] = useState([])
  const [searchKeys,setSearchKeys] = useState({
    key:"",
    rate:1
  })
  

  const [movies,setMovie]= useState([{
    id :uuidv4(),
    imgurl:"8.jpg " ,
    Title: " fast and furious 8",
    description : " est une série de films d'action américains, dont les thèmes tournent principalement autour des voitures et de la famille.",
    Ratting : " 3 "

  },
  {
    id :uuidv4(),
    imgurl:"9.jpg " ,
    Title: "fast and furious 9 ",
    description : "Dom et son équipe doivent affronter un terroriste international qui s'avère être le frère séparé de Dom et Mia. ",
    Ratting : "4"

  },
  {
    id : uuidv4() ,
    imgurl:"7.jpg " ,
    Title: "fast and furious 7 ",
    description : "Deckard Shaw cherche à se venger de Dominic Toretto et de sa famille pour son frère dans le coma. ",
    Ratting : " 5 "


  },
  {
    id : uuidv4() ,
    imgurl:"https://play-lh.googleusercontent.com/YMkscfkxtVS8yNtCO8ieucgIgbe7Yv_ZlGMr1ytnY5UCVbygLPHR05d-KNXNQ3sgfphh " ,
    Title: "the lion king ",
    description : "season 2 (2020) ",
    Ratting : " 2 "



  }
]);
  const add =(newmovie)=>{
    setMovie((movies)=> movies.concat(newmovie))
  }
  const search = (e) => {
    setSearchKeys({...searchKeys,[e.target.name]:e.target.value})
  };
  
  useEffect(() => {
    setFilteredMovie(movies.filter(m => (m.Ratting >= searchKeys.rate) && (searchKeys.key === "" || m.Title.startsWith(searchKeys.key) )))
  }, [movies,searchKeys])
  return (

    <div className="App">
    
      <h1>Welcome To Movie List</h1>
      <MovieList movies={filteredMovie}/>
      <Filter search={search}/>
      
       <AddMovie add={(newmovie)=>add(newmovie)}/>
      
    </div>
  );
}

export default App;
