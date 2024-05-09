package com.project.watch_buddy.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.watch_buddy.MovieReviewDTO.MovieReviewRatingDTO;
import com.project.watch_buddy.entity.MovieList;
import com.project.watch_buddy.repository.MovieRepository;

@Service
public class MovieListServiceImpl implements MovieListService {
	@Autowired
	private final MovieRepository movieRepository;
	
	@Autowired
	public MovieListServiceImpl(MovieRepository movieRepository) {
		this.movieRepository = movieRepository;
	}

	  @Override
	    public MovieList addMovie(MovieList movie) {
	 
	        return movieRepository.save(movie);
	    }
	
	  @Override
	  public Iterable<MovieList> getAllMovies () {
		  
		  return movieRepository.findAll();
	  }
	  
	  @Override
	  public void deleteMovie(Long id) {
		  movieRepository.deleteById(id);
	  }
	  @Override 
	  public Optional<MovieList> getMovieById(Long id) {
		 return movieRepository.findById(id);
	  }
//	  @Override
//	  public void updateReviewAndRating(Long id ,MovieReviewRatingDTO movieReviewRatingDTO) {
//		  Optional<MovieList> optionalMovie = movieRepository.findById(id);
//		  MovieList movie = optionalMovie.get();
//
//          movie.updateFromDTO(movieReviewRatingDTO);
//
//          movieRepository.save(movie);
//		  
//	  }
	  @Override
	  public void updateReview(Long id, String review) {
		    Optional<MovieList> optionalMovie = movieRepository.findById(id);
		   
		        MovieList movie = optionalMovie.get();
		        movie.setMyReview(review);
		        movieRepository.save(movie);
	  
}
}
