
import React, { useState } from 'react'
import Card from './Card';
import Button from '@mui/material/Button';
import "../styles/search.css";

import { styled } from '@mui/material/styles';

function Search() {
 const [movieName,setMoviename] = useState("");
 const[searchList , setSearchList] = useState([]);

 const url = `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`;
 const apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjUzMWIxMmU5MGZiZGZkMGJkNjI1OGI3MmJjY2NjOCIsInN1YiI6IjY1MTkxYjQxOTY3Y2M3MzQyOGNiMzQ4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DJ3d3bmwRvPX4WuS2ZIW7DKcswIdIH8eKdq5Td6sm0Y'; // Replace with your actual API key
 
 const CustomButton = styled(Button)({
  backgroundColor: 'black', 
  color :'chocolate',
  '&:hover': {
    backgroundColor: ' #d2691e', // Change this to the color you want on hover
    color: 'black', // Change this to the text color you want on hover
  },
});

 const headers = new Headers({
   'Authorization': `Bearer ${apiKey}`,
   'accept': 'application/json'
  });
const handleClick = () =>{
fetch(url, {
  method: 'GET',
  headers: headers
})
  .then(response => response.json())
  .then(json=>setSearchList(json.results))
  .catch(error => {
    
    console.error('Error:', error);
  });
  console.log(searchList);
}

  return (
    <div>
    <div >
       <input class= "search-input" onChange={(e)=> {setMoviename(e.target.value)}}type = "text" id="moviename" value={movieName}></input>
       <CustomButton variant="contained" type ="submit" onClick={handleClick} >Search</CustomButton>
    </div>
  
    {searchList.map((movie)=> (
         <Card 
         id = {movie.id}
         pic ={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
         movieName = {movie.title}
         avgRating = {movie.vote_average}
         overView = {movie.overview}
         adult = {movie.adult}
         releaseDate = {movie.release_date}
         backDrop = {movie.backdrop_path}
         originalLanguage = {movie.original_language}
         video = {movie.video}
         popularity = {movie.popularity}
          />
        ))}
    </div>
  )
}

export default Search