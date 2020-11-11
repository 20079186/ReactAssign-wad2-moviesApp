import React, { useContext } from "react";
import {MoviesContext} from "../contexts/moviesContext"
import PageTemplate from "../components/templateMovieListPage";
import AddToFavoritesButton from '../components/buttons/addToFavorites'

const UpcomingMoviesPage = () => {
  const context = useContext(MoviesContext)
  const upcoming = context.upcoming.filter((m) => {
      return !("WatchList in m");
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