import React, { useContext } from "react";
import {MoviesContext} from "../contexts/moviesContext"
import PageTemplate from "../components/templateMovieListPage";
import AddToWatchListButton from "../components/buttons/addToWatchList"

const UpcomingMoviesPage = () => {
  const context = useContext(MoviesContext)
  const upcoming = context.movies.filter((m) => {
      return !("watchList" in m);
  });
      return (
        <PageTemplate
          title='Upcoming Movies'
          movies={upcoming}
          action={(movie) =>{
            return <AddToWatchListButton movie={movie} />;
          }}
        />
    );
};

export default UpcomingMoviesPage;