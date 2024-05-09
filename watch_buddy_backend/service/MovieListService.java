package com.project.watch_buddy.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.project.watch_buddy.MovieReviewDTO.MovieReviewRatingDTO;
import com.project.watch_buddy.entity.MovieList;
import com.project.watch_buddy.repository.MovieRepository;

public interface MovieListService {
 
	MovieList addMovie(MovieList movie);
	Iterable<MovieList>getAllMovies();
	void deleteMovie(Long id);
	Optional<MovieList> getMovieById(Long id);
	//void updateReviewAndRating(Long id ,MovieReviewRatingDTO movieReviewRatingDTO);
	void updateReview(Long id, String review);
	   
	   
}
