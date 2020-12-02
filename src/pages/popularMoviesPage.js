import React, { useContext } from "react";
import {MoviesContext} from "../contexts/moviesContext"
import MovieListPageTemplate from "../components/templateMovieListPage"
import AddReviewButton from '../components/buttons/addReview'

const PopularMoviesPage = () => {
  const context = useContext(MoviesContext)
  const movies = context.popular.filter((m) => {
    return !("watchList" in m);
  });
      return (
        <MovieListPageTemplate
          title='Popular Movies'
          movies={movies}
          action={(movie) =>{
            return <AddReviewButton movie={movie} />;
          }}
        />
    );
};

export default PopularMoviesPage;