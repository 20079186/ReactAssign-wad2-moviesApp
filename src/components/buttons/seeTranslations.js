import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";

const TranslateButton = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleSeeTranslations = e => {
    e.preventDefault();
    context.seeTranslations(movie.id);
  };
  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleSeeTranslations}
    >
      See Translations
    </button>
  );
};

export default TranslateButton;