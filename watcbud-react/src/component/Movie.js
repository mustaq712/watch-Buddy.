import React, { useEffect, useState } from 'react';
import Card from './Card';


function Movie() {
  const [movieList , setMovieList]  = useState([]) ;
  const getMovie = () => {
       fetch('https://api.themoviedb.org/3/discover/movie?api_key=22531b12e90fbdfd0bd6258b72bcccc8')
       .then(res => res.json())
       .then(json=>setMovieList(json.results))
  }  

  useEffect(()=>{
    getMovie()
  },[])

  console.log(movieList);


  return (
    <div>
        {movieList.map((movie)=> (
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

export default Movie