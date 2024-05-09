package com.project.watch_buddy.entity;

import com.project.watch_buddy.MovieReviewDTO.MovieReviewRatingDTO;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class MovieList {
    @Id
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(columnDefinition = "TEXT")
    private String overview;

    @Column
    private String releaseDate;

    @Column
    private String originalLanguage;
    
 
	@Column
    private String myReview;
    


    @Column
    private double voteAverage;
    @Column
    private double popularity;

    @Column
    private String backdropPath;

    @Column
    private String posterPath;

    @Column
    private boolean video;

    @Column
    private boolean adult;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getOverview() {
		return overview;
	}

	public void setOverview(String overview) {
		this.overview = overview;
	}

	public String getReleaseDate() {
		return releaseDate;
	}

	public void setReleaseDate(String releaseDate) {
		this.releaseDate = releaseDate;
	}

	public String getOriginalLanguage() {
		return originalLanguage;
	}

	public void setOriginalLanguage(String originalLanguage) {
		this.originalLanguage = originalLanguage;
	}

	public double getVoteAverage() {
		return voteAverage;
	}

	public void setVoteAverage(double voteAverage) {
		this.voteAverage = voteAverage;
	}

	public double getPopularity() {
		return popularity;
	}

	public void setPopularity(double popularity) {
		this.popularity = popularity;
	}

	public String getBackdropPath() {
		return backdropPath;
	}

	public void setBackdropPath(String backdropPath) {
		this.backdropPath = backdropPath;
	}

	public String getPosterPath() {
		return posterPath;
	}

	public void setPosterPath(String posterPath) {
		this.posterPath = posterPath;
	}

	public boolean isVideo() {
		return video;
	}

	public void setVideo(boolean video) {
		this.video = video;
	}

	public boolean isAdult() {
		return adult;
	}

	public void setAdult(boolean adult) {
		this.adult = adult;
	}

	   public String getMyReview() {
			return myReview;
		}

		public void setMyReview(String myReview) {
			this.myReview = myReview;
		}


	    public void updateFromDTO(MovieReviewRatingDTO movieReviewRatingDTO) {
	        // Update the entity fields with values from the DTO
	        this.myReview = movieReviewRatingDTO.getMyReview();
	    }

}
