import React, { useContext } from "react";
import {MoviesContext} from "../contexts/moviesContext"
import MovieListPageTemplate from "../components/templateMovieListPage"
import TranslateButton from '../components/buttons/seeTranslations'

const NowPlayingPage = () => {
  const context = useContext(MoviesContext)
  const movies = context.now_playing.filter((m) => {
      return !("translate" in m);
  });
      return (
        <MovieListPageTemplate
          title='Now Playing'
          movies={movies}
          action={(movie) =>{
            return <TranslateButton movie={movie} />;
          }}
        />
    );
};

export default NowPlayingPage;