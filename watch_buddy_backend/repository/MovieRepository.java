package com.project.watch_buddy.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.watch_buddy.entity.MovieList;
@Repository
public interface MovieRepository extends JpaRepository<MovieList ,Long>{

}
