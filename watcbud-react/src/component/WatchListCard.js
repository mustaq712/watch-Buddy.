import React, { useEffect } from 'react'

function WatchListCard(props) {

  const removeFromWatchlist = (e)=>{
    e.preventDefault();
    const id = props.id;
    const res = fetch(`http://localhost:8090/MyList/${id}`,{
      method : 'DELETE'
    });
  }
  
  return (
  <div className="card">
    <div className="moviename">
      <h3>{props.movieName}</h3>
    </div>
    <div className="pic">
    <img src ={props.pic}/>
    </div>
    <div className="Director">
     <h4>Rating :{props.avgRating}</h4>
    </div>
   <button className="list-button" onClick={removeFromWatchlist}>
    Remove
   </button>
   <button className="list-button">
    Add review
   </button>
 </div>
  )
}

export default WatchListCard