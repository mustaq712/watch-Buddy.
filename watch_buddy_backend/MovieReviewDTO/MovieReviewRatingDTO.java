package com.project.watch_buddy.MovieReviewDTO;

public class MovieReviewRatingDTO {
	private String myReview;
    
    
    public MovieReviewRatingDTO() {
       
    }
    
    public MovieReviewRatingDTO(String myReview, Double myRating) {
        this.myReview = myReview;
       
    }

	public String getMyReview() {
		return myReview;
	}

	public void setMyReview(String myReview) {
		this.myReview = myReview;
	}

}