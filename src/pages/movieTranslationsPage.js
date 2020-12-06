import React from "react";
import PageTemplate from '../components/templateMoviePage'
import MovieTranslations from "../components/movieTranslate";

const MovieTranslationsPage = (props) => {
  return (
      <PageTemplate movie={props.location.state.movie}>
        <MovieTranslations translations={props.location.state.review} /> 
      </PageTemplate>
  );
};

export default MovieTranslationsPage;