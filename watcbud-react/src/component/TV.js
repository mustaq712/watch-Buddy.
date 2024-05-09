import React, { useEffect, useState } from 'react'
import Card from './Card';

function TV() {
 const [TVList , setTVList]  = useState([]) ;
  const getTV = () => {
       fetch('https://api.themoviedb.org/3/discover/tv?api_key=22531b12e90fbdfd0bd6258b72bcccc8')
       .then(res => res.json())
       .then(json=>setTVList(json.results))
  }  

  useEffect(()=>{
    getTV()
  },[])

  console.log(TVList);
  return (
    <div>
    {TVList.map((tv)=> (
     //<img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
     <Card 
     id = {tv.id}
     pic ={`https://image.tmdb.org/t/p/w500${tv.poster_path}`}
     movieName = {tv.name}
     avgRating = {tv.vote_average}
     
      />
    ))}
</div>
  )
}

export default TV