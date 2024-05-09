import React from 'react'
import "../styles/card.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useState } from "react";
function Card(props) {
  const [open, setOpen] = useState(false);
  const addToWatchList = (e) => {
    e.preventDefault();
    const newMovie = {
      id : props.id,
      title : props.movieName,
      adult : props.adult,
      backdropPath : props.backDrop,
      originalLanguage : props.originalLanguage ,
      voteAverage : props. avgRating ,
      releaseDate : props.releaseDate,
      overview : props.overView,
      popularity : props.popularity,
      posterPath : props.pic,
      video : props.video
    }
    console.log(newMovie);

    const res =  fetch(`http://localhost:8090/MyList/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newMovie),
      });

      console.log(res);
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 3000);
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
    <button onClick={addToWatchList} class ="list-button">
          <FontAwesomeIcon icon={faPlus} />
        </button>
        <Snackbar open={open} autoHideDuration={3000} onClose={() => setOpen(false)}>
        <MuiAlert
          elevation={6}
          variant="filled"
          severity="success"
          onClose={() => setOpen(false)}
        >
          Added to your watch list
        </MuiAlert>
      </Snackbar>
 </div>
  )
}

export default Card