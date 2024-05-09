import React, { useEffect, useState } from 'react'
import Card from './Card';
import WatchListCard from './WatchListCard';
function WatchList() {
    const [watchList , setWatchList] = useState([]);
    const getWatchList = () => {
        fetch("http://localhost:8090/MyList/all ",{
        method : 'GET'})
        .then(res => res.json())
        .then(json => setWatchList(json))
 }
 useEffect(()=>{
    getWatchList()
  },[])
 console.log(watchList);

  return (
    <div>
        {watchList.map((movie)=>(
            <WatchListCard
              id = {movie.id}
              movieName = {movie.title}
              avgRating = {movie.voteAverage}
              pic = {movie.posterPath}
            />
        ))}
    </div>
  )
}

export default WatchList;