package com.project.watch_buddy.controller;

import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.watch_buddy.MovieReviewDTO.MovieReviewRatingDTO;
import com.project.watch_buddy.entity.MovieList;
import com.project.watch_buddy.service.MovieListService;

@RestController
@RequestMapping("/MyList")
@CrossOrigin
public class MovieListController {
	
private final MovieListService movieListService ;

public  MovieListController(MovieListService movieListService) {
	this.movieListService = movieListService;
}

@GetMapping("/all")
public Iterable<MovieList> getAllMovies(){
	return movieListService.getAllMovies();
}
	
@PostMapping("/add")
public ResponseEntity addMovie(@RequestBody MovieList movie) {
	 movieListService.addMovie(movie);
	 return new ResponseEntity<>(movie, HttpStatus.CREATED);
}

@DeleteMapping("/{id}")
public void deleteMovie(@PathVariable Long id) {
	movieListService.deleteMovie(id);
}
	
@GetMapping("/{id}")
public Optional<MovieList> getMovieByID(@PathVariable Long id)
{
	return movieListService.getMovieById(id);
}
//@PutMapping("/{movieId}/review-and-rating")
//public ResponseEntity<Void> submitReviewAndRating(
//        @PathVariable Long movieId,
//        @RequestBody MovieReviewRatingDTO reviewRatingDTO) {
//
//    // Here, you would save the review and rating to the database, linked to the movie with movieId.
//    // You may want to perform validation and other logic as needed.
//
//    // For simplicity, let's assume you have a service method for saving the review and rating.
//    movieListService.updateReviewAndRating(movieId, reviewRatingDTO);
//
//    return new ResponseEntity<>(HttpStatus.CREATED);
//}
@PutMapping("/{movieId}/review")
public ResponseEntity<Void> updateReview(
        @PathVariable Long movieId,
        @RequestParam String review) {
    
        movieListService.updateReview(movieId, review);
        return new ResponseEntity<>(HttpStatus.OK);
   
    }

}


