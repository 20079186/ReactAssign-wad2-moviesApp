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
          action={(now_playing) =>{
            return <TranslateButton movie={now_playing} />;
          }}
        />
    );
};

export default NowPlayingPage;